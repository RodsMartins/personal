# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/CV website for a Full Stack developer, built with Astro 6 and deployed to GitHub Pages at `https://RodsMartins.github.io/personal/`.

## Commands

```bash
npm install        # Install dependencies (requires Node >= 22)
npm run dev        # Start dev server at localhost:4321
npm run build      # Build to ./dist/
npm run preview    # Preview production build locally
```

There is no test suite. Use `npm run build` to validate the site compiles correctly before pushing.

## Architecture

**Static site generation** — Astro outputs fully static HTML with `output: 'static'`. The site deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

**Base URL** — The site is hosted at the subpath `/personal/`. All internal links must use `import.meta.env.BASE_URL` (not hardcoded paths) to work correctly on GitHub Pages.

**Data layer** — Content comes from two sources:
- `src/data/cv.json` — Personal info, experience, and skills (imported directly in pages)
- `src/data/projects/*.md` and `src/data/formations/*.md` — Astro Content Collections with Zod schemas defined in `src/content.config.ts`

**i18n** — French is the default locale. Translation strings live in `src/i18n/fr.json` and `src/i18n/en.json`. Pages currently import `fr.json` directly; English is listed as a locale in `astro.config.mjs` but not yet implemented.

**Pages and routing:**
- `/` — Homepage with hero, about, experience, and skills sections
- `/projets/` — Projects list; `/projets/[slug]` — Project detail (from Content Collection)
- `/formations/` — Formations list; `/formations/[slug]` — Formation detail (from Content Collection)

**Animations** — `.animate-fade-up` CSS class triggers scroll-reveal via `IntersectionObserver` in `BaseLayout.astro`. Respects `prefers-reduced-motion`.

## Content Collections Schema

**Projects** (`src/data/projects/*.md`):
```
title, description, tags[], image?, repo? (URL), demo? (URL), date, featured (bool)
```

**Formations** (`src/data/formations/*.md`):
```
title, institution, type (diplome|certification|formation|mooc), date, description, link? (URL), tags[]
```

## Docs

`docs/personas/` contains review checklists (recruiter, technical, design) for evaluating the portfolio — useful for self-review before publishing content changes.
