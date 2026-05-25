import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact — FUTURE",
  description: "Contactez la marque FUTURE. Questions, collaborations, presse.",
}

export default function ContactPage() {
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
          <p className="text-[#39FF14] text-xs uppercase tracking-[0.5em] mb-6">Nous contacter</p>
          <h1 className="font-display leading-none text-white" style={{ fontSize: "clamp(3rem, 12vw, 9rem)" }}>
            CONTACT
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="font-display text-4xl text-[#39FF14] mb-8">PARLONS-NOUS</h2>
            <p className="text-gray-400 leading-relaxed mb-12 text-sm">
              Collaboration, presse, wholesale ou juste envie de discuter ? On est la. Pas de chatbots, pas d&apos;IA. Des humains vrais qui repondent.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { label: "Email", value: "contact@future-brand.fr" },
                { label: "Instagram", value: "@futurebrand" },
                { label: "Showroom", value: "Paris, France" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#39FF14] pl-6">
                  <p className="text-[#39FF14] text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/10 p-6 mt-12">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Temps de reponse</p>
              <p className="text-white font-bold font-display text-3xl">24-48H</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
