"use client"

import { useState } from "react"

export default function ProductActions() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-white text-xs uppercase tracking-[0.3em] mb-3">Taille</p>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-11 h-11 border text-xs font-bold uppercase transition-all duration-200 ${
                selectedSize === size
                  ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10"
                  : "border-white/30 text-white hover:border-[#39FF14] hover:text-[#39FF14]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full font-bold text-sm uppercase tracking-widest py-5 transition-all duration-300 mb-3 ${
          added
            ? "bg-white text-black"
            : "bg-[#39FF14] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
        }`}
      >
        {added ? "AJOUTE AU PANIER ✓" : "AJOUTER AU PANIER"}
      </button>

      <button className="w-full border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest py-5 hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300">
        SAUVEGARDER
      </button>
    </div>
  )
}
