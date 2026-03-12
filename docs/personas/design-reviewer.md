# Design Reviewer Checklist

Persona : UX/UI Designer senior évaluant le portfolio.

## Hiérarchie visuelle
- [ ] Le nom et le titre sont immédiatement lisibles au-dessus de la ligne de flottaison
- [ ] Les sections sont clairement délimitées avec un rythme visuel cohérent
- [ ] Les éléments interactifs (liens, boutons) sont visuellement distincts
- [ ] La page d'accueil guide le regard : Hero → À propos → Expérience → Compétences

## Typographie
- [ ] Police sans-serif (Inter) lisible en body text
- [ ] Police monospace (JetBrains Mono) réservée aux éléments techniques (dates, tags)
- [ ] Tailles de texte cohérentes et hiérarchisées (h1 > h2 > h3 > body)
- [ ] Interlignage confortable (≥ 1.5 pour le body)

## Couleurs & Contraste
- [ ] Contraste WCAG AA respecté pour tout le texte (≥ 4.5:1 normal, ≥ 3:1 large)
- [ ] Le texte secondaire (#a1a1aa sur #0a0a0f) reste lisible
- [ ] L'accent indigo (#6366f1) est utilisé de manière cohérente pour les éléments interactifs
- [ ] Pas de surcharge de couleurs — palette limitée et intentionnelle

## Responsive Design
- [ ] Mobile (375px) : contenu lisible, pas de scroll horizontal, nav fonctionnel
- [ ] Tablette (768px) : grilles adaptées, espacement suffisant
- [ ] Desktop (1024px+) : contenu centré, largeur max respectée
- [ ] Images et cartes s'adaptent sans distorsion

## Animations & Micro-interactions
- [ ] Animations subtiles et non distrayantes (fade-up au scroll)
- [ ] Hover states sur tous les éléments interactifs
- [ ] `prefers-reduced-motion` respecté (animations désactivées)
- [ ] Pas d'animation bloquant l'accès au contenu

## Accessibilité
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Navigation au clavier complète (Tab + Enter)
- [ ] Attributs `aria-label` sur les liens d'icônes/sociaux
- [ ] Structure sémantique : `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`
- [ ] `<html lang="fr">` présent
- [ ] Skip-to-content link (bonus)

## Cohérence
- [ ] Espacement uniforme entre les sections
- [ ] Style de cartes cohérent (projets vs formations)
- [ ] Même traitement visuel pour les éléments similaires (tags, badges)
- [ ] Footer aligné avec le design global
