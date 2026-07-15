# Furkan's Portfolio Website

Personal portfolio built with Next.js and Chakra UI, instrumented with **[pinqloq](https://pinqloq.pinqponq.io/)** — a centralized logging platform for .NET applications — for real-time client-side observability.

Thanks to [craftzdog-homepage](https://github.com/craftzdog/craftzdog-homepage) for the original template.

---

## Logging & observability

### What is pinqloq?

[pinqloq](https://pinqloq.pinqponq.io/) is a centralized logging and log management service built around a .NET SDK, distributed as the [`pinqloq` NuGet package](https://www.nuget.org/packages/pinqloq). It ships two integration paths: a one-line ASP.NET Core middleware for automatic HTTP request logging, and a manual `Enqueue` API for structured, custom application events. Both feed the same real-time log dashboard, so backend requests, business events, and client-side events end up on one timeline instead of scattered across `Console.WriteLine`, log files, or separate tools.

### pinqloq vs. Serilog, Seq, and Datadog

Structured logging libraries for .NET such as Serilog and NLog write logs but still need a separate sink — Seq, Elasticsearch, or Application Insights — to store and query them. Full observability suites like Datadog, Sentry, and New Relic solve this but are built (and priced) for large-scale infrastructure and APM. pinqloq sits in between: a lightweight, .NET-native SDK paired with a hosted dashboard, aimed at solo developers and small teams who want centralized log management without running their own ELK stack.

### How this portfolio logs client events

Browser-side events are captured through **one global `document` click listener** and a couple of `window` event listeners — not by wiring an `onClick` into every component. See [`lib/pinqloq.js`](lib/pinqloq.js):

| Event | Trigger |
| --- | --- |
| `page_view` | Every route change (initial load + client-side navigation) |
| `external_link_click` | Any `<a>` whose `href` points to a different origin (GitHub, LinkedIn, YouTube, Medium, etc.) |
| `work_click` | Any click on a `/works/:id` project link |
| `js_error` / `unhandled_rejection` | Uncaught exceptions and unhandled promise rejections |

Per pinqloq's client-logging model, **the browser never holds a secret key**. Events are posted to this app's own API route ([`pages/api/logs.js`](pages/api/logs.js)), which builds a `Device`-source `PinqloqLogEntry` and forwards it to pinqloq using a server-side secret key.

> **Current status:** the raw HTTP ingest endpoint for pinqloq isn't set up in this environment yet, so `pages/api/logs.js` validates each event and logs it to the server console (`[pinqloq:stub] ...`) instead of shipping it. Setting `PINQLOQ_INGEST_URL` and `PINQLOQ_SECRET_KEY` (see [`.env.local.example`](.env.local.example)) switches it to real forwarding — no code change required.

### Links

- Dashboard / website: [pinqloq.pinqponq.io](https://pinqloq.pinqponq.io/)
- NuGet package: [nuget.org/packages/pinqloq](https://www.nuget.org/packages/pinqloq)

---

## How to run locally

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** (comes with Node.js)

### Step-by-step

1. **Clone the repository** (if you haven’t already)
   ```bash
   git clone <repository-url>
   cd furkan-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   (The repo includes `.npmrc` with `legacy-peer-deps=true` so install works despite a Chakra/React peer dependency quirk.)

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the site**
   - In your browser go to: **http://localhost:3000**
   - The server listens on `0.0.0.0`, so you can also use your machine’s IP from other devices on the same network.

5. **Stop the server**
   - In the terminal where the dev server is running, press **Ctrl+C**.

---

## Available scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (hot reload)  |
| `npm run build`| Build for production           |
| `npm run start`| Run production build locally   |
| `npm run lint` | Run ESLint                     |
| `npm run prettier` | Format code with Prettier  |

---

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [pinqloq](https://pinqloq.pinqponq.io/) — client-side logging & observability
