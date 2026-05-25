export interface Product {
  slug: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export const products: Product[] = [
  {
    slug: "veste-oversize-noire",
    name: "VESTE OVERSIZE NOIRE",
    price: 180,
    description: "Une veste oversize taillée pour les rebelles du bitume. Coupe ample, silhouette brutale, col montant. 100% coton lourd 400g/m². Fabriquée pour durer, conçue pour marquer.",
    image: "https://picsum.photos/seed/vest001/600/800",
    category: "VESTES",
  },
  {
    slug: "hoodie-future",
    name: "HOODIE FUTURE",
    price: 120,
    description: "Le hoodie emblématique de la marque FUTURE. Logo brodé en fil neon sur fond noir profond. Poche kangourou, cordon métallique. Fit oversized, confort maximal.",
    image: "https://picsum.photos/seed/hood001/600/800",
    category: "SWEATS",
  },
  {
    slug: "cargo-tactical",
    name: "CARGO TACTICAL",
    price: 150,
    description: "Pantalon cargo aux poches multiples en tissu technique résistant. Coupe slim-tapered, sangles ajustables. Style militaire urbain pour les opérations quotidiennes.",
    image: "https://picsum.photos/seed/cargo001/600/800",
    category: "PANTALONS",
  },
  {
    slug: "tee-glitch",
    name: "TEE GLITCH",
    price: 65,
    description: "T-shirt à l'imprimé glitch digital haute définition. Sérigraphie multi-couches. Coupe regular, col rond renforcé. Cotton bio ringspun 220g/m².",
    image: "https://picsum.photos/seed/tee001/600/800",
    category: "TEE-SHIRTS",
  },
  {
    slug: "cap-future",
    name: "CAP FUTURE",
    price: 45,
    description: "Casquette 6 panneaux structurée avec broderie FUTURE en neon. Bande de suer confort, fermeture snapback. Coloris noir mat, logo sous visière.",
    image: "https://picsum.photos/seed/cap001/600/800",
    category: "ACCESSOIRES",
  },
  {
    slug: "sneakers-underground",
    name: "SNEAKERS UNDERGROUND",
    price: 220,
    description: "Sneakers chunky à semelle épaisse triplement vulcanisée. Tige en matières mixtes, détails réfléchissants. Look industriel underground. Édition limitée 200 paires.",
    image: "https://picsum.photos/seed/shoe001/600/800",
    category: "CHAUSSURES",
  },
  {
    slug: "bomber-tactical",
    name: "BOMBER TACTICAL",
    price: 200,
    description: "Bomber reversible en nylon technique imperméable. Coupe oversized, fermeture YKK heavy duty. Face noire / face olive military. Poches intérieures multiples.",
    image: "https://picsum.photos/seed/bomb001/600/800",
    category: "VESTES",
  },
  {
    slug: "sweat-dystopie",
    name: "SWEAT DYSTOPIE",
    price: 130,
    description: "Sweatshirt avec texte dystopique imprimé full back. Intérieur molletonné, col ras du cou. Fit relaxed pour une allure urbaine décontractée.",
    image: "https://picsum.photos/seed/sweat001/600/800",
    category: "SWEATS",
  },
]
