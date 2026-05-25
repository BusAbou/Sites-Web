import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "A Propos — FUTURE",
  description: "L'histoire de FUTURE, la marque streetwear qui redefinie la mode urbaine.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative px-4 md:px-12 py-24 border-b-2 border-[#39FF14] overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-[#39FF14]" />
        <div className="absolute right-0 top-0 w-1/4 h-full bg-[#39FF14]/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[#39FF14] text-xs uppercase tracking-[0.5em] mb-6">Notre histoire</p>
          <h1 className="font-display leading-none text-white" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
            NOUS<br />SOMMES<br /><span className="text-[#39FF14]">FUTURE</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        {/* Origin story */}
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-display text-6xl text-[#39FF14] mb-8">ORIGINE</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              FUTURE est ne en 2020 dans les rues de Paris, au coeur d&apos;une epoque de rupture et de transformation. Fonde par des creatifs issus du monde de l&apos;art et de la rue, FUTURE refusait d&apos;emblee les codes etablis.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Chaque collection est une reponse brutale a un monde trop lisse, trop propre, trop codifie. Nos vetements ne sont pas des produits. Ce sont des armes esthetiques.
            </p>
          </div>

          <div className="flex items-end">
            <div className="border-l-4 border-[#39FF14] pl-8">
              <blockquote className="font-display text-3xl md:text-4xl text-white leading-tight">
                &quot;LE FUTUR N&apos;ATTEND PAS. IL SE CONSTRUIT. IL SE PORTE.&quot;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-b border-[#39FF14]/30 py-16 my-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2020", label: "Fondee en" },
              { number: "+20K", label: "Clients" },
              { number: "3", label: "Collections" },
              { number: "100%", label: "Independant" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl md:text-6xl text-[#39FF14] mb-2">{s.number}</p>
                <p className="text-gray-600 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 my-20">
          {[
            { title: "BRUTALITE", desc: "Pas de compromis sur l'esthetique. Chaque piece est une declaration de guerre contre la mediocrite." },
            { title: "AUTHENTICITE", desc: "Ne de la rue, pour la rue. Zero greenwashing, zero bullshit. Ce que tu vois est ce que tu obtiens." },
            { title: "FUTUR", desc: "Anticiper, innover, bousculer les codes. L'avant-garde est notre seul territoire." },
          ].map((v) => (
            <div
              key={v.title}
              className="border border-white/10 hover:border-[#39FF14] p-8 transition-colors duration-300 group"
            >
              <h3 className="font-display text-3xl text-[#39FF14] mb-4 group-hover:text-white transition-colors">
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t-2 border-[#39FF14] pt-20 text-center">
          <h2 className="font-display text-[10vw] text-white leading-none mb-8">
            REJOINS<br />LE FUTUR
          </h2>
          <Link
            href="/shop"
            className="inline-block bg-[#39FF14] text-black font-bold text-xs uppercase tracking-[0.4em] px-12 py-5 hover:bg-white hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all duration-300"
          >
            VOIR LA COLLECTION
          </Link>
        </div>
      </div>
    </div>
  )
}
