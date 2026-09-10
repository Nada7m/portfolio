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

## Structure
```
index.html   — semantic chapter markup (01 Hero … 12 Contact)
style.css    — design tokens (colors/type/spacing) + all layout & motion
script.js    — translations, language switch, mobile nav, scroll reveal
assets/      — fonts / images / icons (currently empty, ready to fill)
```

## Next step
Tell me about your real projects (RAFD details are already in from your
brief — I need the other two case studies, project images, resume link,
socials, and any certifications) and I'll wire them in without touching the
system underneath.
