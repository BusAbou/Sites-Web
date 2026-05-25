import Link from "next/link"
import { Product } from "@/lib/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="border border-white/10 group-hover:border-[#39FF14] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.2)] transition-all duration-300">
        <div className="relative overflow-hidden aspect-[3/4] bg-gray-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 left-0 bg-[#39FF14] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            {product.category}
          </div>
        </div>
        <div className="p-4 bg-black">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-[#39FF14] transition-colors truncate">
            {product.name}
          </h3>
          <p className="text-[#39FF14] font-bold text-xl">{product.price}&euro;</p>
        </div>
      </div>
    </Link>
  )
}
