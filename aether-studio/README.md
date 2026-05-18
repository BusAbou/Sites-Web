# Aether Studio — Site Web d'un Cabinet d'Architecture

Site vitrine fictif d'un studio d'architecture parisien, conçu pour démontrer mes compétences en développement front-end moderne.

---

## Aperçu

Aether Studio est une landing page complète et responsive pour un cabinet d'architecture premium basé à Paris. Le projet couvre l'ensemble des sections d'un site professionnel réel : présentation, projets, services, à propos et contact.

---

## Stack Technique

| Technologie | Version | Rôle |
|---|---|---|
| **Next.js** | 14 (App Router) | Framework React — routing, SSR, optimisation |
| **React** | 18 | UI components |
| **TypeScript** | 5 | Typage statique |
| **Tailwind CSS** | 3.4 | Styling utilitaire |
| **Inter** (Google Fonts) | — | Typographie |

---

## Structure du Projet

```
aether-studio/
├── app/
│   ├── layout.tsx      # Layout racine — police, métadonnées globales, lang="fr"
│   ├── page.tsx        # Page unique — tous les composants de la landing page
│   └── globals.css     # Styles globaux Tailwind
├── tailwind.config.ts  # Configuration Tailwind — palette orange custom, font Inter
├── tsconfig.json
└── package.json
```

---

## Sections du Site

- **Navbar** — barre fixe avec navigation desktop et menu hamburger mobile CSS-only (`<details>` / `<summary>`, sans JavaScript)
- **Hero** — section plein écran avec gradient, image principale, mini-statistiques et badge flottant animé
- **Projets** — grille de 3 cartes de projets avec images Unsplash, effets hover (zoom image, élévation carte)
- **Services** — 4 cartes de services (Architecture, Design Urbain, Design Intérieur, Architecture Durable) avec icônes SVG inline et animation hover
- **À Propos** — mosaïque d'images + grille de statistiques clés
- **Footer** — bande CTA orange, informations de contact, liens de navigation, icônes réseaux sociaux

---

## Points Techniques Notables

- **App Router Next.js 14** : métadonnées SEO déclarées via `export const metadata` dans `page.tsx`
- **Menu mobile sans JavaScript** : le menu hamburger utilise uniquement l'élément HTML `<details>` + CSS `group-open:` de Tailwind
- **Données centralisées** : les projets, services et stats sont définis comme constantes en haut du fichier et injectés via `.map()` — aucune duplication de JSX
- **Scroll fluide** : `scroll-smooth` appliqué à la balise `<html>` pour les ancres de navigation
- **Responsive design** : grilles adaptatives (`md:grid-cols-3`, `lg:grid-cols-2`) et navigation qui bascule entre desktop et mobile
- **Accessibilité** : attributs `aria-label` sur les sections, `aria-hidden` sur les éléments décoratifs, `address` sémantique dans le footer

---

## Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Auteur

Développé par **BusAbou** — [GitHub](https://github.com/BusAbou/Sites-Web)
