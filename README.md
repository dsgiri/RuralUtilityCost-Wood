# Rural Utility Cost - Wood Hub

This repository powers the **Wood Hub** (`wood.ruralutilitycost.com`), a dedicated lumber, timber, and woodworking estimation engine within the Rural Utility Cost ecosystem.

## Overview

This application provides specialized calculation tools targeting forestry, lumber, and woodworking operations. It features interactive, client-side tools designed for fast estimation, including:
- Board Foot Calculations
- Real-time what-if scenario adjustments
- Actionable disclaimers and educational guidance

## Setup & Local Development

This is a Vite-powered React application using TypeScript and Tailwind CSS.

### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/dsgiri/RuralUtilityCost-Wood.git
cd RuralUtilityCost-Wood
npm install
```

### Running Locally

```bash
npm run dev
```

The development server will start binding to host `0.0.0.0` and be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This generates a `dist` folder containing the compiled, minified static assets suitable for web hosting.

### Deployment

This Vite-based single-page application (SPA) can be deployed easily to any static file hosting service, such as Vercel, Netlify, Firebase Hosting, Cloudflare Pages, or Google Cloud Run. 

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

*Note: For platforms that require a catch-all routing mechanism for React Router, ensure you configure redirects (e.g. `_redirects` for Netlify, `rewrites` for Vercel, or `try_files` for NGINX/Caddy) to point to `index.html`.*

## Environment Variables

Copy the example environment file to `/.env` and update values if needed:

```bash
cp .env.example .env
```

*(Currently, core calculators are fully client-side and require no external environment secrets. Any additions should be documented in `.env.example`.)*

## Related Rural Utility Cost Links

The Wood Hub operates as a dedicated node within the broader network of agricultural and rural utility tools.

- **Main Platform:** [ruralutilitycost.com](https://ruralutilitycost.com)
- **Network Portfolio:** [ruralutilitycost.com/portfolio](https://ruralutilitycost.com/portfolio)
- **Repository:** [RuralUtilityCost-Wood](https://github.com/dsgiri/RuralUtilityCost-Wood)

**Closely Related Subdomains:**
- [Platform Hub](https://ruralutilitycost.com) — Master hub for rural, agricultural, and utility estimation tools.
- [Forecast Hub](https://forecast.ruralutilitycost.com) — Predictive models for rural utility economics.
- [Solve Engine](https://solve.ruralutilitycost.com) — General problem-solving and utility computation engine.
- [Plan Hub](https://plan.ruralutilitycost.com) — Long-term operational and resource planning schedules.
