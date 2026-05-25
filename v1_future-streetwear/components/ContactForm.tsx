"use client"

import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border-2 border-[#39FF14] p-12 text-center">
        <p className="font-display text-4xl text-[#39FF14] mb-4">MESSAGE ENVOYE</p>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Nous vous repondrons rapidement.</p>
      </div>
    )
  }

  const inputClass =
    "w-full bg-black border border-white/20 text-white px-4 py-4 focus:border-[#39FF14] focus:outline-none transition-colors placeholder-gray-700 font-medium text-sm"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-[#39FF14] text-xs uppercase tracking-[0.3em] mb-2">Nom</label>
        <input
          type="text"
          required
          placeholder="VOTRE NOM"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-[#39FF14] text-xs uppercase tracking-[0.3em] mb-2">Email</label>
        <input
          type="email"
          required
          placeholder="VOTRE@EMAIL.COM"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-[#39FF14] text-xs uppercase tracking-[0.3em] mb-2">Message</label>
        <textarea
          required
          rows={6}
          placeholder="VOTRE MESSAGE..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="bg-[#39FF14] text-black font-bold text-sm uppercase tracking-widest py-5 hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300"
      >
        ENVOYER &rarr;
      </button>
    </form>
  )
}
