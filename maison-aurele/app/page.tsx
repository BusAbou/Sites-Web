import Navbar from '@/components/Navbar'

const dishes = [
  {
    id: 1,
    name: 'Turbot de Ligne',
    description:
      'Turbot sauvage, émulsion de beurre nantais au caviar osciètre, jeunes légumes du potager et herbes fraîches.',
    image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=800&q=80',
  },
  {
    id: 2,
    name: "Pigeon en Croûte d'Épices",
    description:
      'Pigeon de Bresse rôti, croûte aux épices douces, jus corsé à la truffe noire du Périgord, pomme soufflée.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  },
  {
    id: 3,
    name: 'Soufflé Grand Marnier',
    description:
      `Soufflé chaud, glace vanille de Madagascar, zestes d'orange confits, dentelle de caramel doré.`,
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d792e?w=800&q=80',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-inter text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">
            Paris · Depuis 1987
          </p>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-[9rem] text-[#f0ebe0] mb-6 leading-none tracking-tight">
            Maison
            <br />
            <span className="italic text-[#c9a84c]">Aurèle</span>
          </h1>
          <p className="font-inter text-sm md:text-base tracking-[0.15em] text-[#f0ebe0]/60 uppercase mb-12 max-w-lg mx-auto">
            Une expérience gastronomique d'exception au cœur de Paris
          </p>
          <a
            href="#reservation"
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase px-10 py-4 bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#f0ebe0] transition-colors duration-300"
          >
            Réserver une table
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#f0ebe0]/40">
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
          <div className="w-px h-12 bg-[#c9a84c]/50 animate-pulse" />
        </div>
      </section>

      {/* ── Signature Dishes ── */}
      <section id="carte" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-inter text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Notre Cuisine
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#f0ebe0]">
            Créations <span className="italic">Signatures</span>
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {dishes.map((dish) => (
            <article key={dish.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="border-l border-[#c9a84c] pl-5">
                <h3 className="font-playfair text-xl text-[#f0ebe0] mb-2">{dish.name}</h3>
                <p className="font-inter text-xs leading-relaxed text-[#f0ebe0]/50">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-[#f0ebe0]/10" />
      </div>

      {/* ── About ── */}
      <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <p className="font-inter text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-8">
          Notre Philosophie
        </p>
        <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#f0ebe0]/90 leading-relaxed mb-12">
          "Chez Maison Aurèle, chaque assiette est le reflet d'un territoire, d'une saison,
          d'un artisan. Nous célébrons la France dans ce qu'elle a de plus singulier — la
          précision de ses terroirs, l'audace de ses producteurs, l'âme de sa cuisine."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-[#c9a84c]" />
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
            Chef Aurélien Morel
          </p>
          <div className="w-12 h-px bg-[#c9a84c]" />
        </div>
      </section>

      {/* ── Reservation CTA ── */}
      <section id="reservation" className="relative py-40 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="font-inter text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">
            Réservations
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#f0ebe0] mb-6">
            Vivez l'<span className="italic text-[#c9a84c]">Expérience</span>
          </h2>
          <p className="font-inter text-sm text-[#f0ebe0]/50 tracking-wide mb-10 leading-relaxed">
            Tables disponibles du mardi au samedi soir.
            <br />
            Nous vous invitons à réserver au minimum 48h à l'avance.
          </p>
          <a
            href="tel:+33140000000"
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase px-10 py-4 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
          >
            +33 1 40 00 00 00
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="bg-[#0a0a0a] border-t border-[#f0ebe0]/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          <div>
            <p className="font-inter text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mb-4">
              Adresse
            </p>
            <address className="font-playfair text-[#f0ebe0]/70 not-italic leading-relaxed">
              12, rue de l'Élégance
              <br />
              75008 Paris, France
            </address>
          </div>

          <div className="md:text-center">
            <p className="font-playfair text-xl tracking-widest text-[#c9a84c] uppercase mb-3">
              Maison Aurèle
            </p>
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#f0ebe0]/30">
              Restaurant Gastronomique
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-inter text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase mb-4">
              Horaires
            </p>
            <div className="font-inter text-xs text-[#f0ebe0]/50 space-y-1 leading-relaxed">
              <p>Mardi – Jeudi &nbsp;&nbsp;&nbsp;19h00 – 22h30</p>
              <p>Vendredi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12h00 – 14h00 · 19h00 – 23h00</p>
              <p>Samedi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19h00 – 23h00</p>
              <p className="mt-3 text-[#c9a84c]">+33 1 40 00 00 00</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#f0ebe0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#f0ebe0]/20">
            © 2024 Maison Aurèle. Tous droits réservés.
          </p>
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#f0ebe0]/20">
            Mentions légales · Politique de confidentialité
          </p>
        </div>
      </footer>
    </main>
  )
}
