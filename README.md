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

### Code Quality & Formatting

Code linting and formatting are integrated into the build process.

#### Lint code

```powershell
npm run lint
```

Runs ESLint to check JavaScript code style and automatically fix issues.

#### Format code

```powershell
npm run format
```

Runs Prettier to format all code files (JavaScript, CSS, HTML, JSON) consistently.

## Build Pipeline

The project includes a modern build pipeline with the following optimizations:

### Vite

Fast build tool with dev server, HMR, and production optimization. Configuration in `vite.config.js`.

### PostCSS + Autoprefixer

Automatically adds vendor prefixes to CSS for broader browser compatibility:

- Targets browsers with >0.2% market share, last 2 versions
- Supports iOS/Safari 12+
- Handles CSS custom properties, backdrop-filter, and modern CSS features

Configuration in `postcss.config.js`.

### Image Optimization

Images are automatically optimized during the build process using vite-plugin-imagemin:

- PNG optimization with optipng (level 7)
- JPEG compression with mozjpeg (quality 80)
- Indexed PNG with pngquant (0.8-0.9 quality)
- SVG optimization with svgo

This results in dramatic file size reductions (e.g., logo reduced from 1.4 MB to 116 KB).

### ESLint + Prettier

Code quality and consistency tools:

- **ESLint** (`eslint.config.js`) - Enforces code standards with warnings for unused variables and console statements
- **Prettier** (`.prettierrc.json`) - Ensures consistent code formatting across all files

## Deployment

This project is configured for [Netlify](https://netlify.com/) deployment:

- `netlify.toml` defines build command (`npm run build`) and publish directory (`dist/`)
- Single-page app redirects configured for client-side routing
- Build automatically runs on every commit/push

## Contributing

This repository uses branch protection to ensure code quality:

- All changes require pull requests
- Code owner review required before merging to main
- See `.github/CODEOWNERS` for reviewer information
