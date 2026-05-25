import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#39FF14",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        glitch: "glitch 0.3s steps(1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-3px, 2px)" },
          "20%": { transform: "translate(3px, -2px)" },
          "30%": { transform: "translate(-2px, 3px)" },
          "40%": { transform: "translate(2px, -3px)" },
          "50%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
