# BeatBroom

A small Next.js app (App Router) with a simple search API endpoint.

## Overview

This repository contains a Next.js application using the App Router (the `app/` directory). It includes a server-side API route at `app/api/search/route.ts` that can be used for searching or querying from the frontend.

> Assumption: Node.js 18+ is recommended. If your environment differs, adjust the commands accordingly.

## Quick start (Windows / PowerShell)

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```powershell
npm run build
npm start
```

If your `package.json` uses different scripts for dev/build/start, use those script names instead.

## API

The project has an example API route at:

- `POST /api/search` — implemented in `app/api/search/route.ts`.

Example requests (PowerShell):

```powershell
# Using Invoke-RestMethod
Invoke-RestMethod -Uri "http://localhost:3000/api/search" -Method POST -ContentType "application/json" -Body '{"q":"beat"}'

# Or using curl in PowerShell
curl -Method POST -Uri "http://localhost:3000/api/search" -Headers @{"Content-Type"="application/json"} -Body '{"q":"beat"}'
```

Adjust the request body to the API's expected shape. If you want, I can add concrete request/response examples after inspecting `app/api/search/route.ts`.

## Project structure (high level)

- `app/` — Next.js App Router pages and server components
	- `page.tsx` — main page
	- `layout.tsx` — root layout
	- `api/search/route.ts` — example API route
- `public/` — static assets
- `next.config.ts`, `tsconfig.json`, `package.json` — project config

## Development notes

- This repo uses TypeScript and the Next.js App Router.
- Linting, formatting, and test scripts (if present) will be in `package.json` — run `npm run <script>` as appropriate.

## Deployment

Deploy to Vercel for best Next.js compatibility. Alternatively, build and run the app on any Node-friendly host that supports Next.js:

```powershell
npm run build
npm start
```

## Troubleshooting

- Port in use: ensure nothing else is running on port 3000 or change the port when starting the dev server.
- Types or compile errors: run the TypeScript compiler or the dev server to see details.

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Open a PR with a clear description of changes.

## License

This repo does not include a license file. Add a `LICENSE` file (for example, MIT) if you want to specify reuse terms.

## Contact

If you want changes to this README (more details, examples, or restructuring), tell me what to include and I will update it.
