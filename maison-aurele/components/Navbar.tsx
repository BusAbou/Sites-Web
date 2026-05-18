'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Carte', href: '#carte' },
  { label: 'Réservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c9a84c]/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="#"
          className="font-playfair text-xl tracking-widest text-[#c9a84c] uppercase"
        >
          Maison Aurèle
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-inter text-xs tracking-[0.2em] uppercase text-[#f0ebe0]/70 hover:text-[#c9a84c] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#reservation"
          className="hidden md:block font-inter text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
        >
          Réserver
        </Link>

        <button
          className="md:hidden text-[#f0ebe0]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-[#c9a84c]/20 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-inter text-xs tracking-[0.2em] uppercase text-[#f0ebe0]/70 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#reservation"
                onClick={() => setMenuOpen(false)}
                className="inline-block font-inter text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#c9a84c] text-[#c9a84c]"
              >
                Réserver
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}