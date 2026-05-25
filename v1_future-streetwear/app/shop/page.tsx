import type { Metadata } from "next"
import { products } from "@/lib/products"
import ProductCard from "@/components/ProductCard"

export const metadata: Metadata = {
  title: "Boutique — FUTURE",
  description: "Toute la collection FUTURE. Streetwear brutal et experimental.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative border-b-2 border-[#39FF14] px-4 md:px-12 py-20 overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-[#39FF14]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[#39FF14] text-xs uppercase tracking-[0.5em] mb-4">Toute la collection</p>
          <h1 className="font-display text-[14vw] leading-none text-white">BOUTIQUE</h1>
          <p className="text-gray-500 mt-4 text-xs uppercase tracking-[0.4em]">{products.length} produits</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
