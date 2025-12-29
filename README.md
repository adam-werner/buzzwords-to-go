# Buzzwords To Go

Buzzwords to Go is a tongue-in-cheek mobile web app that serves up three random business buzzwords every time you shake your phone. Built with HTML, CSS, and vanilla JavaScript, this project is a quick hit of corporate nonsense—perfect for startup founders, product managers, and lovers of synergy everywhere.

Designed as a lightweight static site and deployed to Netlify, it also serves as a fun example project for experimenting with GitHub Copilot, device motion APIs, and responsive mobile UX.

## How it works

- The buzzword list lives in [buzzwords.js](buzzwords.js).
- The page is in [index.html](index.html).
- Styling is in [style.css](style.css).
- Logic (random selection + refresh triggers) is in [app.js](app.js).

## Run locally

Because the app uses ES module imports, it’s best to run it via a local web server.

```powershell
npx --yes http-server . -p 8080
```

Then open:

- `http://localhost:8080/`
