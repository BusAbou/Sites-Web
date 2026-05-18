import Link from "next/link"
import type { Metadata } from "next"
import { products } from "@/lib/products"
import ProductCard from "@/components/ProductCard"

export const metadata: Metadata = {
  title: "FUTURE — Le Futur Est Maintenant",
  description: "Decouvrez la collection streetwear FUTURE. Mode urbaine brutale et experimentale.",
}

export default function HomePage() {
  const featured = products.slice(0, 4)
  const marqueeWords = ["STREETWEAR", "UNDERGROUND", "BRUTAL", "FUTURE", "RAW", "NEON", "DARK", "REBELLE"]

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center px-4 md:px-12 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 w-1 h-full bg-[#39FF14]" />
        {/* Right tinted block */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#39FF14]/5" />

        <div className="relative z-10 max-w-7xl w-full">
          <p className="text-[#39FF14] text-xs md:text-sm font-bold uppercase tracking-[0.6em] mb-6">
            COLLECTION 2024
          </p>

          <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.9] text-white uppercase mb-8 glitch-hover select-none">
            FUTURE<br />
            <span className="text-[#39FF14]">IS</span><br />
            NOW
          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-md mb-10 uppercase tracking-wide leading-relaxed">
            La mode qui refuse l&apos;ordinaire.<br />Pour ceux qui marchent en tete.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-block bg-[#39FF14] text-black font-bold text-xs uppercase tracking-[0.4em] px-10 py-5 hover:bg-white hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all duration-300"
            >
              VOIR LA COLLECTION
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white font-bold text-xs uppercase tracking-[0.4em] px-10 py-5 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
            >
              NOTRE HISTOIRE
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <p className="absolute bottom-8 right-8 text-gray-700 text-[10px] uppercase tracking-widest rotate-90 origin-bottom-right">
          SCROLL DOWN &darr;
        </p>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y-2 border-[#39FF14] bg-[#39FF14] py-3 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="font-display text-2xl text-black tracking-[0.3em]">
              {word} ///
            </span>
          ))}
        </div>
      </div>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#39FF14] text-xs uppercase tracking-[0.5em] mb-2">Selection</p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">BEST OF</h2>
          </div>
          <Link
            href="/shop"
            className="text-white text-xs uppercase tracking-widest font-bold border-b-2 border-[#39FF14] pb-1 hover:text-[#39FF14] transition-colors"
          >
            TOUT VOIR &rarr;
          </Link>
        </div>

        {/* Broken grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((product, i) => (
            <div
              key={product.slug}
              className={i === 1 ? "lg:mt-10" : i === 3 ? "lg:-mt-6" : ""}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRAND STATEMENT ===== */}
      <section className="border-t-2 border-[#39FF14] bg-[#39FF14]/5 py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <h2 className="font-display text-[12vw] md:text-[7vw] text-[#39FF14] leading-none">
            PAS<br />DE<br />REGLES
          </h2>
          <div>
            <p className="text-white text-xl leading-relaxed mb-6">
              FUTURE n&apos;est pas une marque. C&apos;est un etat d&apos;esprit. Une declaration contre la norme, une esthetique de la rebellion urbaine.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Chaque piece est concue pour ceux qui refusent l&apos;ordinaire. Pour ceux qui marchent dans les rues comme sur un ring.
            </p>
            <Link
              href="/about"
              className="inline-block border-2 border-[#39FF14] text-[#39FF14] font-bold text-xs uppercase tracking-[0.4em] px-8 py-4 hover:bg-[#39FF14] hover:text-black transition-all duration-300"
            >
              DECOUVRIR LA MARQUE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
