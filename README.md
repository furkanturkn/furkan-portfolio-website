# Furkan's Portfolio Website

Personal portfolio built with Next.js and Chakra UI.

Thanks to [craftzdog-homepage](https://github.com/craftzdog/craftzdog-homepage) for the original template.

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
