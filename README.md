# Buzzwords To Go

Buzzwords to Go is a tongue-in-cheek mobile web app that serves up three random business buzzwords every time you shake your phone. Built with HTML, CSS, and vanilla JavaScript, this project is a quick hit of corporate nonsense—perfect for startup founders, product managers, and lovers of synergy everywhere.

Designed as a lightweight static site, it also serves as a fun example project for experimenting with GitHub Copilot, device motion APIs, and responsive mobile UX.

## How it works

- Public site files live under `public/`.
- The page entry point is `public/index.html`.
- Styling is in `public/assets/css/style.css`.
- Logic (random selection + refresh triggers) is in `public/assets/js/app.js`.
- The buzzword list lives in `public/assets/js/buzzwords.js`.

## Run locally

Because the app uses ES module imports, it’s best to run it via a local web server.

```powershell
npx --yes http-server .\public -p 8080 -c-1
```

Then open:

 `http://localhost:8080/`
