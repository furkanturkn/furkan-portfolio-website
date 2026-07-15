# Furkan's Portfolio Website

Personal portfolio built with Next.js and Chakra UI.

Thanks to [craftzdog-homepage](https://github.com/craftzdog/craftzdog-homepage) for the original template.

---

## How to run locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```

3. Open **http://localhost:3000**

---

## Available scripts

| Command             | Description                   |
|---------------------|-------------------------------|
| `npm run dev`       | Start dev server (hot reload) |
| `npm run build`     | Build for production          |
| `npm run start`     | Run production build locally  |
| `npm run lint`      | Run ESLint                    |
| `npm run prettier`  | Format code with Prettier     |

---

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [pinqloq](https://pinqloq.pinqponq.io/) — client-side event logging

---

## Logging

Client-side events (page views, project clicks, external link clicks, JS errors) are tracked with [pinqloq](https://pinqloq.pinqponq.io/). See [`lib/pinqloq.js`](lib/pinqloq.js) and [`pages/api/logs.js`](pages/api/logs.js). Required env vars are documented in [`.env.local.example`](.env.local.example).
