# Portfolio — build notes

## Missing font: Ruqah Wind Longo
The hero poem is set in **Ruqah Wind Longo**, referenced via `@font-face` at the
top of `style.css`, pointing to:

```
assets/fonts/RuqahWindLongo.woff2
assets/fonts/RuqahWindLongo.ttf
```

Neither file exists yet, so the browser silently falls back to **Aref Ruqaa**
(a Google Font already wired up) until you drop the real files in that folder.
No other code changes are needed — the fallback is intentional and documented,
not a permanent substitution.

## What's a placeholder right now
Anything wrapped in `[ ... ]` in the content (project images, dates, resume
links, certifications, the two non-RAFD case studies) is an editable stand-in.
Nothing is invented — no fake metrics, testimonials, or project outcomes.

## How translations work
All copy lives in one place: the `translations` object at the top of
`script.js`, keyed by the `data-i18n` id on each element. To edit copy or add
a project, change it there — you don't need to touch the HTML structure.

## Uploaded assets — naming & location
Whenever a real image or file is provided for the site, it's saved permanently
inside the project (not linked externally) under:

```
assets/images/projects/      — Selected Work / case-study cover images
assets/images/highlights/    — مختارات / Highlights ticket photos
assets/images/experience/    — Experience milestone images, if any
assets/documents/            — CV, certificates, other downloadable files
```

File names are clean, lowercase, hyphenated English — e.g.
`rafd-erp-cover.jpg`, `cv-2026.pdf` — never spaces or the original upload
name if it was messy.

All references use paths relative to the project root (e.g.
`assets/images/projects/rafd-erp-cover.jpg`), which resolve correctly both
locally and once deployed on GitHub Pages, since nothing depends on the
domain root — only on the folder structure staying intact next to the HTML
files.

## Structure
```
index.html                       — homepage (Hero … Contact)
ux.html                          — UX field page
business-analysis.html           — Business Analysis field page (fully built out)
digital-transformation.html      — DX field page (currently unlinked from nav)
creative-design-marketing.html   — CDM field page
style.css    — design tokens (colors/type/spacing) + all layout & motion
script.js    — translations, language switch, mobile nav, scroll reveal, page transitions
assets/
  fonts/                — currently empty, see note above
  images/
    projects/
    highlights/
    experience/
  documents/
```

## Next step
Tell me about your real projects (RAFD details are already in from your
brief — I need the other two case studies, project images, resume link,
socials, and any certifications) and I'll wire them in without touching the
system underneath.
