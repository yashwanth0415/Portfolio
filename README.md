# Yashwanth Thurpati Portfolio

Vite + TypeScript conversion of the original portfolio. The project is prepared for Render Static Site deployment.

## Local

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Render

### Option 1 — Blueprint

Push this project to GitHub and create a Render Blueprint from the repository. The included `render.yaml` configures:

- Runtime: Static Site
- Build command: `npm install && npm run build`
- Publish directory: `dist`

### Option 2 — Existing Render service

Set:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Start Command:** leave empty

Do not leave the Build Command empty, otherwise Render will skip Vite and `dist/` will not exist.
