# Technical Reviewer Checklist

Persona : Développeur senior / Tech lead évaluant la qualité technique du site.

## Architecture Astro
- [ ] Content collections utilisées avec le glob loader (pattern Astro 5)
- [ ] Schémas Zod pour la validation des frontmatter
- [ ] `getStaticPaths` correctement implémenté pour les pages dynamiques
- [ ] Composants `.astro` avec props typées (interfaces TypeScript)
- [ ] Layout partagé avec `<slot />`
- [ ] Pas de JavaScript client inutile (avantage Astro : zero-JS par défaut)

## Performance
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 95
- [ ] Lighthouse SEO > 95
- [ ] Fonts preconnect déclaré
- [ ] `font-display: swap` (via Google Fonts URL)
- [ ] Pas de render-blocking resources inutiles
- [ ] Images optimisées (si présentes)

## SEO
- [ ] `<title>` unique par page
- [ ] `<meta name="description">` unique par page
- [ ] `<link rel="canonical">` présent
- [ ] Open Graph tags (og:title, og:description, og:type)
- [ ] `<html lang="fr">` correct
- [ ] Structure de headings logique (un seul h1 par page)
- [ ] URLs propres et descriptives (/projets/portfolio-astro/)

## Qualité du code
- [ ] TypeScript strict (tsconfig extends astro/tsconfigs/strict)
- [ ] Pas de `any` explicite
- [ ] CSS scopé par composant (style Astro)
- [ ] Custom properties CSS pour le theming (pas de valeurs en dur)
- [ ] Nommage cohérent (BEM-like pour les classes CSS)
- [ ] Pas de console.log ou code de debug

## Accessibilité technique
- [ ] Semantic HTML : header, nav, main, article, footer
- [ ] `aria-label` sur les contrôles sans texte visible
- [ ] `aria-expanded` sur le menu mobile
- [ ] Focus visible (`:focus-visible` outline)
- [ ] `prefers-reduced-motion` respecté dans les animations
- [ ] Attribut `role="list"` si le reset CSS supprime les puces

## i18n Readiness
- [ ] Chaînes UI extraites dans `fr.json` / `en.json`
- [ ] `defaultLocale: 'fr'` configuré dans astro.config
- [ ] Structure prête pour le préfixe `/en/` futur
- [ ] Pas de texte en dur dans les composants (sauf contenu)

## Déploiement
- [ ] GitHub Actions workflow avec `withastro/action@v5`
- [ ] `actions/deploy-pages@v4` pour le déploiement
- [ ] Trigger sur push to main
- [ ] `npm run build` réussit sans erreur
- [ ] Output statique compatible GitHub Pages
- [ ] `.gitignore` inclut node_modules, dist, .astro

## Maintenabilité
- [ ] Structure de fichiers claire et prévisible
- [ ] Composants réutilisables (SectionTitle, SkillBadge, etc.)
- [ ] Données séparées de la présentation (cv.json, content collections)
- [ ] Pas de duplication de code significative
