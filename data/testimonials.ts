export type Testimonial = {
  id: string;
  quote: { fr: string; en: string };
  author: string;
  role: { fr: string; en: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: {
      fr: "Un accompagnement précis, sans ostentation. Nous avons trouvé notre bateau en toute confiance.",
      en: "Precise accompaniment, without ostentation. We found our boat with complete confidence.",
    },
    author: "M. & Mme Laurent",
    role: { fr: "Acquéreurs · Port-Grimaud", en: "Buyers · Port-Grimaud" },
  },
  {
    id: "2",
    quote: {
      fr: "Discrétion et connaissance du marché local — exactement ce que l'on attend sur le Golfe.",
      en: "Discretion and local market knowledge — exactly what one expects on the Gulf.",
    },
    author: "Claire D.",
    role: { fr: "Propriétaire · Saint-Tropez", en: "Owner · Saint-Tropez" },
  },
  {
    id: "3",
    quote: {
      fr: "De la visite à la signature, chaque détail a été anticipé. Une maison sérieuse.",
      en: "From viewing to signature, every detail was anticipated. A serious house.",
    },
    author: "James R.",
    role: { fr: "Charter · Méditerranée", en: "Charter · Mediterranean" },
  },
];
