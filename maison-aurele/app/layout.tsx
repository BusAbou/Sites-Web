import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Aurèle — Restaurant Gastronomique Paris',
  description:
    "Maison Aurèle vous invite à une expérience culinaire d'exception au cœur de Paris. Cuisine française gastronomique étoilée.",
  keywords: 'restaurant gastronomique Paris, fine dining, cuisine française, Maison Aurèle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f0ebe0] antialiased">{children}</body>
    </html>
  )
}