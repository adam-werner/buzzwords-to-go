# Buzzwords To Go

A tiny, responsive “business buzzword generator” web page.

It displays three randomly selected business words/phrases and lets you refresh them:
- On page load
- By clicking the buzzwords container background
- By shaking your device (when `devicemotion` is supported and permitted)

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
