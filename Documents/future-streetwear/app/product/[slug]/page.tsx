import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { products } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import ProductActions from "@/components/ProductActions"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return { title: "Produit introuvable — FUTURE" }
  return {
    title: `${product.name} — FUTURE`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3)
  const relatedProducts = related.length >= 2 ? related : products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <nav className="flex items-center gap-2 text-gray-600 text-xs uppercase tracking-widest mb-12">
          <Link href="/" className="hover:text-[#39FF14] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#39FF14] transition-colors">Boutique</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="relative">
            <div className="border-2 border-white/10 relative overflow-hidden aspect-[3/4] bg-gray-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-[#39FF14] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                {product.category}
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 w-12 h-1 bg-[#39FF14]" />
            <div className="absolute -bottom-3 -left-3 w-1 h-12 bg-[#39FF14]" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[#39FF14] text-xs uppercase tracking-[0.5em] mb-4">{product.category}</p>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
              {product.name}
            </h1>
            <p className="text-[#39FF14] font-bold text-5xl mb-8">{product.price}&euro;</p>
            <div className="border-t border-white/10 pt-8 mb-8">
              <p className="text-gray-400 leading-relaxed text-sm">{product.description}</p>
            </div>
            <ProductActions />
          </div>
        </div>

        <div className="border-t-2 border-[#39FF14] pt-16">
          <h2 className="font-display text-5xl text-white mb-10">VOUS AIMEREZ AUSSI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}