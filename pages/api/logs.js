// Backend endpoint that receives client events and forwards them to pinqloq.
//
// The pinqloq secret key lives here (server-side) and is NEVER exposed to the
// client. Client events are forwarded as Device-source logs into a separate
// collection, per the pinqloq "Client events" guide.
//
// NOTE: The pinqloq raw HTTP ingest URL is not yet known (the SDK docs only
// cover the .NET SDK). Until PINQLOQ_INGEST_URL is set, this route validates and
// logs events to the server console instead of shipping them. Set the env vars
// below to enable real forwarding — no other code change needed.
//
//   PINQLOQ_INGEST_URL        e.g. https://<pinqloq-ingest-host>/api/logs
//   PINQLOQ_SECRET_KEY        server credential, sent as the X-Secret-Key header
//   PINQLOQ_CLIENT_COLLECTION collection for client logs (default: client_logs)

const INGEST_URL = process.env.PINQLOQ_INGEST_URL
const SECRET_KEY = process.env.PINQLOQ_SECRET_KEY
const CLIENT_COLLECTION = process.env.PINQLOQ_CLIENT_COLLECTION || 'client_logs'
const HTTP_TIMEOUT_MS = 10000

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { event, logLevel, metadata, detail, appVersionName } = req.body || {}

  // pinqloq rejects entries without an Event.
  if (!event || typeof event !== 'string') {
    return res.status(400).json({ error: 'event is required' })
  }

  // Build the pinqloq log entry. LogSourceType "Device" marks a client event.
  const entry = {
    Event: event,
    LogLevel: typeof logLevel === 'number' ? logLevel : 2, // Information
    LogSourceType: 'Device',
    CollectionName: CLIENT_COLLECTION,
    Metadata: sanitize(metadata),
    Detail: sanitize(detail),
    AppVersionName: appVersionName || ''
  }

  // Forward-leg not configured yet: log locally and acknowledge.
  if (!INGEST_URL || !SECRET_KEY) {
    console.log('[pinqloq:stub] would forward client event:', JSON.stringify(entry))
    return res.status(202).json({ ok: true, forwarded: false })
  }

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), HTTP_TIMEOUT_MS)
    const response = await fetch(INGEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Secret-Key': SECRET_KEY
      },
      body: JSON.stringify(entry),
      signal: controller.signal
    })
    clearTimeout(timer)

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error(`[pinqloq] forward failed: ${response.status} ${text}`)
      return res.status(502).json({ ok: false, status: response.status })
    }

    return res.status(202).json({ ok: true, forwarded: true })
  } catch (err) {
    console.error('[pinqloq] forward error:', err.message)
    return res.status(502).json({ ok: false, error: 'forward_failed' })
  }
}

// pinqloq Metadata/Detail are string→string maps. Coerce and drop empties.
function sanitize(obj) {
  const out = {}
  if (!obj || typeof obj !== 'object') return out
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === '') continue
    out[key] = typeof value === 'string' ? value : String(value)
  }
  return out
}
