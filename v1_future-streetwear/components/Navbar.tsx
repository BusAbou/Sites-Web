"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { label: "SHOP", href: "/shop" },
  { label: "A PROPOS", href: "/about" },
  { label: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-[#39FF14]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-3xl text-[#39FF14] tracking-widest hover:text-white transition-colors duration-200"
        >
          FUTURE
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white text-xs font-bold uppercase tracking-[0.3em] hover:text-[#39FF14] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="border-2 border-[#39FF14] text-[#39FF14] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#39FF14] hover:text-black transition-all duration-200"
          >
            ACHETER
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#39FF14] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#39FF14] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#39FF14] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#39FF14] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-white tracking-widest hover:text-[#39FF14] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
