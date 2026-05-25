# FUTURE — Site Streetwear

> Projet web personnel — Marque de streetwear fictive "FUTURE"  
> Site multipage au design brutaliste, construit avec Next.js 14 et Tailwind CSS.

---

## Apercu du projet

**FUTURE** est un site vitrine / e-commerce (front-end uniquement) pour une marque de streetwear urbaine fictive. Le projet met en valeur mes competences en developpement front-end moderne : architecture Next.js App Router, design system coherent, composants React reutilisables, et une identite visuelle forte et intentionnelle.

L'objectif etait de concevoir une experience web qui reflete l'univers de la marque : brutaliste, agressif, underground — loin des templates corporate lisses.

---

## Stack technique

| Technologie | Version | Role |
|-------------|---------|------|
| **Next.js** | 14.2.3 | Framework React (App Router) |
| **React** | 18 | UI library |
| **TypeScript** | 5 | Typage statique |
| **Tailwind CSS** | 3.4.1 | Styling utility-first |
| **PostCSS** | 8 | Transformation CSS |
| **Google Fonts** | — | Bebas Neue + Space Grotesk |

---

## Pages & fonctionnalites

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero full-screen, marquee anime, 4 produits mis en avant, section brand |
| `/shop` | Boutique | Grille de 8 produits avec effets hover |
| `/product/[slug]` | Produit | Page dynamique par slug, selecteur de taille, produits associes |
| `/about` | A Propos | Histoire de la marque, stats, valeurs, CTA |
| `/contact` | Contact | Formulaire interactif (nom, email, message) |

**Composants partages :**
- `Navbar` — sticky, responsive, menu hamburger mobile avec animation
- `Footer` — minimal, liens reseaux sociaux
- `ProductCard` — carte produit reutilisable avec effets hover
- `ProductActions` — selecteur de taille + bouton panier (composant client)
- `ContactForm` — formulaire avec gestion d'etat React

---

## Design & identite visuelle

**Concept :** brutalisme web — un style graphique agressif, experimental, qui rompt avec les designs corporates aseptises.

**Palette de couleurs :**
- `#000000` — Noir profond (background)
- `#FFFFFF` — Blanc (texte principal)
- `#39FF14` — Vert neon (accents, bordures, prix, CTA)

**Typographie :**
- **Bebas Neue** — titres impactants, display, uppercase
- **Space Grotesk** — texte courant, lisibilite

**Details visuels implementes :**
- Grille de fond subtile (`background-image` CSS)
- Animation marquee infinie (bande de mots defile)
- Effet glitch au hover sur le hero (keyframes CSS)
- Bordures neon avec `box-shadow` vert sur les cartes au survol
- Grille asymetrique (decalages volontaires entre les cartes)
- Barre de scroll personnalisee (3px, verte)
- Selection de texte en vert neon (`::selection`)
- Angles nets partout — zero `border-radius`

---

## Architecture du code

```
future-streetwear/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Layout racine (fonts, Navbar, Footer)
│   ├── globals.css             # Styles globaux + animations CSS
│   ├── page.tsx                # Page d'accueil
│   ├── shop/page.tsx           # Page boutique
│   ├── product/[slug]/         # Route dynamique produit
│   │   └── page.tsx
│   ├── about/page.tsx          # Page a propos
│   └── contact/page.tsx        # Page contact
├── components/                 # Composants React reutilisables
│   ├── Navbar.tsx              # (use client) menu responsive
│   ├── Footer.tsx              # Footer statique
│   ├── ProductCard.tsx         # Carte produit
│   ├── ProductActions.tsx      # (use client) taille + panier
│   └── ContactForm.tsx         # (use client) formulaire
└── lib/
    └── products.ts             # Donnees produits (TypeScript)
```

**Separation Server / Client Components :**  
Conformement aux bonnes pratiques Next.js 14, seuls les composants necessitant de l'interactivite (`useState`, events) sont marques `"use client"`. Les pages et composants purement affichage restent des Server Components.

---

## Installation & lancement

```bash
# Cloner le projet
git clone <url-du-repo>
cd future-streetwear

# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

```bash
# Build de production
npm run build
npm start
```

---

## Difficultes rencontrees & solutions

### 1. Chemin avec crochets sous Windows PowerShell
**Probleme :** Le dossier `app/product/[slug]/` contient des crochets `[]`, interpretes comme des wildcards par PowerShell. La commande `Set-Content -Path "...[slug]..."` echouait systematiquement.  
**Solution :** Utilisation de `[System.IO.File]::WriteAllText()` (.NET directement) qui prend le chemin en valeur litterale, contournant ainsi l'interpretation PowerShell.

### 2. Separation Server / Client Components
**Probleme :** En Next.js 14 App Router, utiliser `useState` ou des event handlers dans un Server Component provoque une erreur de build. Il fallait identifier precisement quelles parties necessitaient de l'interactivite.  
**Solution :** Extraction des parties interactives en composants dedies (`ProductActions`, `ContactForm`, `Navbar`) marques `"use client"`, tout en gardant les pages comme Server Components pour les performances et le SEO.

### 3. Animation marquee sans doublon visible
**Probleme :** Un marquee CSS defilant en boucle laisse apparaitre un blanc a la fin si les elements ne couvrent pas 200% de la largeur.  
**Solution :** Duplication du tableau de mots (`[...words, ...words]`) et animation de `-50%` en translateX, creant une boucle seamless invisible.

### 4. Typographie avec Next.js Font System
**Probleme :** Integrer deux polices Google (`Bebas Neue` + `Space Grotesk`) via le systeme de fonts Next.js en utilisant des variables CSS, puis les exposer dans Tailwind comme classes utilitaires (`font-display`).  
**Solution :** Declaration des polices avec `variable` dans `layout.tsx`, injection des variables CSS sur le `<body>`, configuration de `fontFamily` dans `tailwind.config.ts` pointant vers ces variables.

### 5. Design system coherent sur 5 pages
**Probleme :** Maintenir une identite visuelle forte et coherente (meme palette, meme espacements, meme intensite) sur 5 pages tres differentes en contenu.  
**Solution :** Centralisation de la palette dans Tailwind (`neon: "#39FF14"`), classes CSS globales reutilisables (`.font-display`, `.neon-glow`, `.glitch-hover`), et patterns de layout standardises (barre gauche verte, en-tete avec grille de fond).

---

## Ce que j'aurais ajoute avec plus de temps

- Panier fonctionnel avec Context API ou Zustand
- Animations d'entree au scroll (`Intersection Observer`)
- Filtre par categorie sur la page boutique
- Page 404 personnalisee dans l'univers de la marque
- Integration Stripe pour les paiements
- Deploiement sur Vercel

---

## Auteur

Projet realise dans le cadre d'un exercice de design front-end avance.  
Stack : **Next.js 14 · TypeScript · Tailwind CSS**

---

*"Le futur n'attend pas."*