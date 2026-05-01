# SISSI — Ballet Flats Storefront

Static HTML/CSS/JS storefront for SISSI, an "ultra-soft ballet flats"
collection. Pure front-end with a tiny Node.js static file server for local
preview.

## Structure

```
index.html / about.html / product.html / blog.html / contact.html
faq.html / privacy.html / returns.html / shipping.html
server.mjs            ← Node.js static-file server (port 8080)
assets/
  css/                styles
  generated/          AI-generated product / hero / collection imagery
                      (Gemini, see filenames `gemini-*.png`)
reference/            Design reference screenshots + CSS analysis
_header_template.txt  Reusable header HTML snippet
```

## Run

```bash
node server.mjs
# open http://localhost:8080
```

No `package.json` — runs on plain Node.js (≥18 recommended for `node:` URL
imports).

## Notes

- Product photography in `assets/generated/` was produced with Gemini and is
  used as filler / mockup imagery — not real product shots.
- Layout takes inspiration from a few existing ballet-flat brand sites
  (LondonRag, etc.); see `reference/01-header-hero.png` and
  `reference/02-product-grid.png` for the visual reference set.

## License

MIT
