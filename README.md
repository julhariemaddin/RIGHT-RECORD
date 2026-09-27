# The Right to a Fair Trial — Digital Museum Exhibit

A React + Vite site tracing the right to a fair trial from Magna Carta (1215)
to the Universal Declaration of Human Rights (1948), built for the Digital
Museum Exhibit group project.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL in your browser.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`.

## Deploy

**Vercel**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Leave build command (`npm run build`) and output
   directory (`dist`) as detected. Click Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder
   after running `npm run build` at app.netlify.com/drop).
2. If connecting via Git: build command `npm run build`, publish directory
   `dist`.

**GitHub Pages**
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. `npm run build && npm run deploy`

## Design notes (v2)

- Redesigned away from the generic "cream + serif + terracotta" AI look. New
  direction is a dark archive/docket theme: deep charcoal-navy background,
  brass and rust accents, Fraunces (display) + Lora (body) as the only two
  typefaces, and a rotated wax-stamp detail on the hero plate instead of a
  generic hero treatment.
- Motion is powered by `framer-motion`, animating only `transform`/`opacity`
  (GPU-accelerated, no layout thrash): a single quiet fade-and-rise reveal
  per section on scroll, a subtle parallax on the hero manuscript plate, and
  a gentle image scale on timeline hover. All animations respect
  `prefers-reduced-motion`.
- Credits live in the footer: "Developed by Julharie Maddin" / "Powered by
  Null-Pointer" — edit these directly in `src/App.jsx` if they change.
- Built on React 19 and Vite 8 (latest at time of writing). A favicon and
  a small header logo (a balance-scale icon from the Twemoji CDN) are
  wired in `index.html` and `src/App.jsx` via a pinned jsDelivr URL —
  swap `LOGO_URL` in `App.jsx` and the `<link rel="icon">` in `index.html`
  to use your own logo instead.

## Content notes

- All historical images are pulled live from Wikimedia Commons
  (`commons.wikimedia.org/wiki/Special:FilePath/...`), each in the public
  domain. Swap any `IMG` entry in `src/App.jsx` to change or replace them.
- Timeline entries, the primary-source quote, and impact cards live as plain
  data arrays at the top of `src/App.jsx` — edit the text there to change the
  right covered (e.g. swap Magna Carta for the Declaration of the Rights of
  Man as the primary source) without touching the layout.
- Styling lives in `src/index.css`; colors are defined once as CSS variables
  at the top.
