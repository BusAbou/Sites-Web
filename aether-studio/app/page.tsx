import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aether Studio — Studio d'Architecture à Paris",
  description:
    "Aether Studio est un cabinet d'architecture premium basé à Paris. Nous concevons des espaces contemporains, durables et élégants pour résidences, bureaux et espaces publics.",
  keywords: "architecture, studio, Paris, design intérieur, urbanisme, architecture durable",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#projets", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À Propos" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  {
    id: 1,
    name: "Villa Lumière",
    description:
      "Résidence privée contemporaine avec terrasses panoramiques et jardins suspendus sur les hauteurs de Paris.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    location: "Paris, France",
    year: "2023",
  },
  {
    id: 2,
    name: "Tour Horizon",
    description:
      "Complexe de bureaux certifié HQE, alliant performance énergétique et qualité de vie au travail.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80",
    location: "Lyon, France",
    year: "2022",
  },
  {
    id: 3,
    name: "Espace Miro",
    description:
      "Centre culturel dédié à l'art contemporain, lauréat du Prix National d'Architecture 2024.",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop&q=80",
    location: "Bordeaux, France",
    year: "2024",
  },
];

const SERVICES = [
  {
    title: "Architecture",
    description:
      "Conception de bâtiments résidentiels et commerciaux alliant esthétique contemporaine, fonctionnalité et durabilité.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M9 21V10.5m6 10.5V10.5M3 10.5 12 3l9 7.5"
        />
      </svg>
    ),
  },
  {
    title: "Design Urbain",
    description:
      "Planification et aménagement d'espaces urbains vivants, durables et conçus à l'échelle humaine.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5M3.75 21V9l7.5-6 7.5 6v12M9 21v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21"
        />
      </svg>
    ),
  },
  {
    title: "Design Intérieur",
    description:
      "Création d'espaces intérieurs raffinés qui reflètent votre identité et subliment votre quotidien.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Architecture Durable",
    description:
      "Solutions bioclimatiques et écologiques pour construire un avenir respectueux de notre planète.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
  },
];

const STATS = [
  { value: "15+", label: "Années d'expérience" },
  { value: "120+", label: "Projets réalisés" },
  { value: "20", label: "Experts passionnés" },
  { value: "8", label: "Prix d'architecture" },
];

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-lg border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 shrink-0">
            <span className="text-xl font-bold tracking-tight text-slate-900">Aether</span>
            <span className="text-xl font-bold tracking-tight text-orange-500">Studio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full shadow-md shadow-orange-200 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Demander un Devis
          </Link>

          {/* Mobile toggle — CSS-only via <details> */}
          <details className="md:hidden group relative">
            <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-sky-50 transition-colors select-none">
              {/* hamburger */}
              <svg
                className="w-6 h-6 text-slate-700 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* close */}
              <svg
                className="w-6 h-6 text-slate-700 hidden group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>
            {/* Mobile dropdown */}
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-sky-100 p-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-orange-500 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 inline-flex justify-center items-center px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors"
              >
                Demander un Devis
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden"
      aria-label="Accueil"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-100 rounded-full opacity-60 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-orange-50 rounded-full opacity-80 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: text ── */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 text-sm font-semibold rounded-full border border-orange-100">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Studio d&rsquo;Architecture — Paris
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Concevoir les{" "}
              <span className="text-orange-500">espaces</span>
              <br />
              de demain
            </h1>

            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Aether Studio transforme vos visions architecturales en réalisations
              exceptionnelles. Modernité, durabilité et élégance au cœur de chaque projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projets"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Voir nos projets
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-white hover:bg-sky-50 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Nous contacter
              </Link>
            </div>

            {/* Mini stats row */}
            <div className="flex gap-8 pt-2 border-t border-slate-100">
              {[
                { value: "15+", label: "Ans d'expérience" },
                { value: "120+", label: "Projets livrés" },
                { value: "8", label: "Prix reçus" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-200/60 aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&auto=format&fit=crop&q=80"
                alt="Architecture moderne — Aether Studio Paris"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 max-w-[190px] border border-sky-50">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-slate-500 font-medium">Projet en cours</span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Maison Soleil</div>
              <div className="text-xs text-slate-400 mt-0.5">Paris XVI&middot; 2025</div>
            </div>

            {/* Orange accent square */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-2xl -z-10 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projets" className="py-24 bg-white" aria-label="Projets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
              Nos Réalisations
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Projets en vedette
            </h2>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors group"
          >
            Voir tous les projets
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30 font-medium">
                    <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                  <span className="text-xs text-slate-400 font-medium shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Découvrir
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-24 bg-sky-50" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
            Ce que nous faisons
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            De la conception à la livraison, nous accompagnons chaque projet avec passion,
            précision et expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 border border-sky-100"
            >
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="a-propos" className="py-24 bg-white overflow-hidden" aria-label="À Propos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop&q=80"
                  alt="Équipe Aether Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=80"
                  alt="Bureau Aether Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Orange blob decoration */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-28 h-28 bg-orange-500 rounded-3xl -z-10 opacity-80"
            />
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-16 h-16 bg-sky-200 rounded-2xl -z-10"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
              Notre Histoire
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              L&rsquo;architecture comme art de vivre
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Fondé en 2009 à Paris, Aether Studio est un cabinet d&rsquo;architecture guidé par une
              vision simple : chaque espace doit être une œuvre pensée pour l&rsquo;humain. Notre équipe
              de 20 architectes et designers travaille à la croisée de l&rsquo;innovation
              technologique et de la tradition artisanale française.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Nos projets s&rsquo;étendent de résidences privées haut de gamme à des édifices publics
              emblématiques, toujours avec le même engagement pour la qualité, la durabilité et
              l&rsquo;excellence esthétique.
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 bg-sky-50 rounded-2xl border border-sky-100 hover:border-orange-200 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-orange-500">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer / Contact ─────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white" aria-label="Contact et pied de page">
      {/* CTA band */}
      <div className="bg-orange-500 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Prêt à bâtir votre vision ?
          </h2>
          <p className="text-orange-100 text-lg">
            Discutons de votre projet. Notre équipe vous répond sous 24h.
          </p>
          <a
            href="mailto:contact@aether-studio.fr"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Démarrer un projet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-0.5">
                <span className="text-2xl font-bold text-white">Aether</span>
                <span className="text-2xl font-bold text-orange-400">Studio</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Studio d&rsquo;architecture premium basé à Paris, créateur d&rsquo;espaces
                contemporains et durables depuis 2009.
              </p>
              {/* Social icons (placeholder) */}
              <div className="flex gap-3 pt-1">
                {[
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "LinkedIn",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                  {
                    label: "Behance",
                    path: "M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.68.756-.63.157-1.29.235-1.97.235H0V4.503h6.938zm-.4 5.545c.54 0 .984-.132 1.32-.398.337-.265.5-.673.5-1.226 0-.31-.057-.57-.17-.78-.115-.21-.27-.376-.46-.5-.19-.123-.41-.21-.657-.258-.25-.048-.51-.072-.784-.072H3.24v3.234h3.298zm.157 5.673c.307 0 .595-.03.862-.087.267-.06.5-.158.696-.297.19-.14.344-.32.46-.55.113-.23.17-.516.17-.86 0-.69-.196-1.185-.59-1.487-.394-.3-.917-.45-1.566-.45H3.24v3.73h3.455zm9.292-1.885c.37.367.906.55 1.607.55.5 0 .935-.127 1.297-.38.363-.252.586-.52.672-.806h2.33c-.374 1.17-1.01 2.016-1.897 2.537-.886.52-1.957.78-3.21.78-.872 0-1.655-.14-2.35-.42-.694-.28-1.285-.674-1.77-1.18-.487-.51-.86-1.11-1.12-1.8-.26-.69-.39-1.44-.39-2.24 0-.78.133-1.515.4-2.2.267-.685.644-1.278 1.13-1.778.487-.5 1.07-.89 1.753-1.17.683-.28 1.43-.42 2.235-.42.91 0 1.705.176 2.39.528.683.35 1.245.824 1.685 1.423.44.6.755 1.283.944 2.05.19.77.255 1.57.2 2.4H15.16c.054.867.295 1.51.665 1.875zm2.83-5.063c-.296-.327-.768-.49-1.415-.49-.413 0-.754.07-1.023.207-.27.137-.49.31-.657.517-.17.21-.287.43-.35.67-.065.24-.1.46-.106.67h4.13c-.063-.742-.29-1.247-.58-1.574zM18.45 4.89h5.18v1.33h-5.18V4.89z",
                  },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 fill-slate-400 hover:fill-white" viewBox="0 0 24 24">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Services</h3>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <Link
                      href="#services"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Contact</h3>
              <address className="not-italic space-y-4 text-sm text-slate-400">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    14 Rue de la Paix
                    <br />
                    75002 Paris, France
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-orange-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:contact@aether-studio.fr"
                    className="hover:text-white transition-colors"
                  >
                    contact@aether-studio.fr
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-orange-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+33142001234" className="hover:text-white transition-colors">
                    +33 1 42 00 12 34
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Aether Studio. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
