import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-[#39FF14] mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <Link href="/" className="font-display text-7xl text-[#39FF14] block leading-none">
              FUTURE
            </Link>
            <p className="text-gray-600 text-xs uppercase tracking-[0.4em] mt-2">Le futur est maintenant</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-600 text-xs uppercase tracking-widest">Suivez-nous</p>
            {["INSTAGRAM", "TWITTER", "TIKTOK"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white text-xs font-bold uppercase tracking-[0.3em] hover:text-[#39FF14] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-600 text-xs uppercase tracking-widest">Navigation</p>
            {[
              { label: "Boutique", href: "/shop" },
              { label: "A Propos", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-400 text-xs uppercase tracking-widest hover:text-[#39FF14] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-900 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-gray-700 text-xs uppercase tracking-widest">
            &copy; 2024 FUTURE. Tous droits reserves.
          </p>
          <p className="text-gray-700 text-xs uppercase tracking-widest">Fait pour le futur.</p>
        </div>
      </div>
    </footer>
  )
}
