// pinqloq client-side logging helper.
//
// The client NEVER holds the pinqloq secret key. It only POSTs events to our own
// backend endpoint (/api/logs), which forwards them to pinqloq as Device-source
// logs. See pages/api/logs.js and the pinqloq docs ("Client events").

const ENDPOINT = '/api/logs'
const APP_VERSION =
  process.env.NEXT_PUBLIC_APP_VERSION || process.env.npm_package_version || ''

// Raw pinqloq log levels (logLevel is a number 1-5 on the HTTP payload).
export const PinqloqLogLevel = {
  Debug: 1,
  Information: 2,
  Warning: 3,
  Error: 4,
  Fatal: 5
}

// Collect a bit of ambient context. pinqloq Metadata/Detail values are strings.
function ambientMetadata() {
  if (typeof window === 'undefined') return {}
  const meta = {
    path: window.location.pathname,
    screen: `${window.innerWidth}x${window.innerHeight}`
  }
  const conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection
  if (conn && conn.effectiveType) meta.networkType = conn.effectiveType
  return meta
}

function stringifyValues(obj) {
  const out = {}
  for (const [key, value] of Object.entries(obj || {})) {
    if (value === undefined || value === null) continue
    out[key] = typeof value === 'string' ? value : String(value)
  }
  return out
}

/**
 * Send a client event to our backend, which forwards it to pinqloq.
 *
 * @param {string} event   Required log title. Skipped if empty (pinqloq rejects it).
 * @param {object} [opts]
 * @param {number} [opts.level]     PinqloqLogLevel (default Information).
 * @param {object} [opts.metadata]  Short searchable key/value pairs.
 * @param {object} [opts.detail]    Larger diagnostic data.
 */
export function logClientEvent(event, opts = {}) {
  if (typeof window === 'undefined') return
  if (!event) return // pinqloq drops entries without an Event.

  const payload = {
    event,
    logLevel: opts.level || PinqloqLogLevel.Information,
    metadata: stringifyValues({ ...ambientMetadata(), ...opts.metadata }),
    detail: stringifyValues(opts.detail),
    appVersionName: APP_VERSION
  }

  const body = JSON.stringify(payload)

  // Prefer sendBeacon so events survive page unloads (navigations, external links).
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' })
      if (navigator.sendBeacon(ENDPOINT, blob)) return
    }
  } catch {
    // fall through to fetch
  }

  // Fire-and-forget. keepalive lets it complete during unload.
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true
  }).catch(() => {
    // Client logging must never break the page.
  })
}

// Any anchor whose href points at one of these becomes a "work_click" instead
// of a generic link click. Add prefixes here if new sections need their own
// event name — no component needs to know about logging.
const WORK_PATH_PREFIX = '/works/'

function describeLink(anchor) {
  const href = anchor.getAttribute('href') || ''
  const label = (anchor.textContent || '').trim().slice(0, 120)

  let url
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }

  const isExternal = url.origin !== window.location.origin
  if (isExternal) {
    return { event: 'external_link_click', metadata: { href: url.href, label } }
  }

  if (url.pathname.startsWith(WORK_PATH_PREFIX)) {
    const workId = url.pathname.slice(WORK_PATH_PREFIX.length).split('/')[0]
    return { event: 'work_click', metadata: { workId, title: label } }
  }

  // Plain internal navigation — already covered by the page_view route hook.
  return null
}

// Global click delegation: one listener on the document instead of an
// onClick prop on every link. Works for any <a> rendered anywhere in the
// app (including inside Next <Link>), now and for links added later.
function handleDocumentClick(e) {
  const anchor = e.target.closest && e.target.closest('a[href]')
  if (!anchor) return

  const described = describeLink(anchor)
  if (!described) return

  logClientEvent(described.event, { metadata: described.metadata })
}

let installed = false

/**
 * Wire up automatic client logging: page views on route change, link clicks
 * (external + work items) via document-level delegation, and global JS error
 * / unhandled-rejection handlers. Call once from _app.js.
 *
 * @param {import('next/router').Router} router
 */
export function initPinqloqClient(router) {
  if (typeof window === 'undefined' || installed) return
  installed = true

  // Page views — initial load + every route change.
  logClientEvent('page_view', { metadata: { path: window.location.pathname } })
  router.events.on('routeChangeComplete', url => {
    logClientEvent('page_view', { metadata: { path: url } })
  })

  // Link clicks, captured centrally — no per-component wiring needed.
  document.addEventListener('click', handleDocumentClick)

  // Uncaught JS errors.
  window.addEventListener('error', e => {
    logClientEvent('js_error', {
      level: PinqloqLogLevel.Error,
      metadata: { source: e.filename || '', line: e.lineno, column: e.colno },
      detail: {
        message: e.message || 'Unknown error',
        stack: (e.error && e.error.stack) || ''
      }
    })
  })

  // Unhandled promise rejections.
  window.addEventListener('unhandledrejection', e => {
    const reason = e.reason
    logClientEvent('unhandled_rejection', {
      level: PinqloqLogLevel.Error,
      detail: {
        message: (reason && (reason.message || String(reason))) || 'Unknown',
        stack: (reason && reason.stack) || ''
      }
    })
  })
}
