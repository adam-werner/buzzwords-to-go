# Buzzwords To Go

Buzzwords to Go is a tongue-in-cheek mobile web app that serves up three random business buzzwords every time you shake your phone. Built with HTML, CSS, and vanilla JavaScript, this project is a quick hit of corporate nonsense—perfect for startup founders, product managers, and lovers of synergy everywhere.

Designed as a lightweight static site, it also serves as a fun example project for experimenting with GitHub Copilot, device motion APIs, and responsive mobile UX.

## How it works

- Public site files live under `public/`.
- The page entry point is `public/index.html`.
- Styling is in `public/assets/css/style.css`.
- Logic (random selection + refresh triggers) is in `public/assets/js/app.js`.
- The buzzword list lives in `public/assets/js/buzzwords.js`.

## Development

This project uses [Vite](https://vitejs.dev/) for development and building.

### Install dependencies

```powershell
npm install
```

### Run development server

```powershell
npm run dev
```

The dev server will start at `http://localhost:8080/` with hot module replacement (HMR) - changes to your files will instantly update in the browser.

### Build for production

```powershell
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Optimized assets with content hashes
- Source maps for debugging

### Preview production build

```powershell
npm run preview
```

Serves the production build locally to test before deployment.
