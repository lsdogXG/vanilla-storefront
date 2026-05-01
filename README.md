# Vanilla Storefront Template

Static HTML/CSS/JS storefront scaffolding for a small product site, with a
tiny Node.js static-file server for local preview. Pages cover the typical
e-commerce surface (home, product, blog, contact, FAQ, shipping/returns,
privacy).

Originally bootstrapped from a real client engagement; brand-specific copy and
assets have been replaced with neutral placeholders so this can serve as a
starter template.

## Run

```bash
node server.mjs
# open http://localhost:8080
```

No `package.json` — runs on plain Node.js (≥18 recommended for `node:` URL
imports).

## Structure

```
index.html / about.html / product.html / blog.html / contact.html
faq.html / privacy.html / returns.html / shipping.html
server.mjs            Static-file server (port 8080)
_header_template.txt  Reusable header HTML snippet
assets/
  css/                Stylesheets
  js/                 app.js + i18n.js (vanilla)
  images/             Logo + product placeholders
  generated/          AI-generated hero / collection imagery (Gemini)
reference/            Design reference screenshots + CSS analysis
```

## Notes

- All product photography in `assets/generated/` was produced with Gemini and
  is illustrative / placeholder.
- All bundled imagery (logo, hero/collection banners, design references)
  has been removed; HTML/CSS still references the original paths under
  `assets/images/` and `assets/generated/` — drop your own images at those
  paths or rewrite the references.
- `i18n.js` carries the user-facing copy as keyed strings; replace those
  values to re-skin the site for a different brand.

## License

MIT
