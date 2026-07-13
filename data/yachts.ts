export type ListingType = "sale" | "rent";
export type BoatCategory = "yacht" | "boat";

export type YachtListing = {
  slug: string;
  name: string;
  category: BoatCategory;
  listingType: ListingType;
  length: string;
  year: number;
  berths: number;
  location: { fr: string; en: string };
  price: number;
  priceLabel?: "day" | "week";
  currency: "EUR";
  featured: boolean;
  hasDetailPage: boolean;
  images: string[];
  description: { fr: string; en: string };
  specs: {
    key: string;
    fr: string;
    en: string;
    valueFr: string;
    valueEn: string;
  }[];
};

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${w}&q=80`;

export const yachts: YachtListing[] = [
  {
    slug: "cheoy-lee",
    name: "Cheoy Lee",
    category: "yacht",
    listingType: "sale",
    length: "18 m",
    year: 1998,
    berths: 6,
    location: { fr: "Port-Grimaud", en: "Port-Grimaud" },
    price: 295000,
    currency: "EUR",
    featured: true,
    hasDetailPage: true,
    images: [
      "/images/boats/cheoy-lee/1.webp",
      "/images/boats/cheoy-lee/2.webp",
      "/images/boats/cheoy-lee/3.webp",
      "/images/boats/cheoy-lee/4.webp",
      "/images/boats/cheoy-lee/5.webp",
      "/images/boats/cheoy-lee/6.webp",
      "/images/boats/cheoy-lee/7.webp",
      "/images/boats/cheoy-lee/8.webp",
      "/images/boats/cheoy-lee/9.webp",
      "/images/boats/cheoy-lee/10.webp",
    ],
    description: {
      fr: "Un yacht de caractère au chantier Cheoy Lee, reconnu pour sa construction robuste et son élégance classique. Aménagements soignés, pont spacieux et lignes intemporelles — idéal pour croiser le long de la Côte d'Azur avec distinction.",
      en: "A yacht of character from the Cheoy Lee yard, known for solid build and classic elegance. Refined interiors, a generous deck and timeless lines — suited to cruising the French Riviera with quiet distinction.",
    },
    specs: [
      { key: "builder", fr: "Chantier", en: "Builder", valueFr: "Cheoy Lee", valueEn: "Cheoy Lee" },
      { key: "type", fr: "Type", en: "Type", valueFr: "Yacht à moteur", valueEn: "Motor yacht" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "18 m", valueEn: "18 m" },
      { key: "year", fr: "Année", en: "Year", valueFr: "1998", valueEn: "1998" },
      { key: "berths", fr: "Couchages", en: "Berths", valueFr: "6", valueEn: "6" },
      { key: "location", fr: "Lieu", en: "Location", valueFr: "Port-Grimaud", valueEn: "Port-Grimaud" },
      { key: "condition", fr: "État", en: "Condition", valueFr: "Occasion soignée", valueEn: "Well maintained" },
    ],
  },
  {
    slug: "jeanneau-prestige-42s",
    name: "Jeanneau Prestige 42 S",
    category: "yacht",
    listingType: "sale",
    length: "13.36 m",
    year: 2009,
    berths: 6,
    location: { fr: "Golfe de Saint-Tropez", en: "Gulf of Saint-Tropez" },
    price: 189000,
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [
      "/images/boats/jeanneau-prestige-42s/boat.webp",
      "/images/boats/jeanneau-prestige-42s/2.webp",
      "/images/boats/jeanneau-prestige-42s/3.webp",
      "/images/boats/jeanneau-prestige-42s/4.webp",
      "/images/boats/jeanneau-prestige-42s/5.webp",
      "/images/boats/jeanneau-prestige-42s/6.webp",
    ],
    description: {
      fr: "Le Prestige 42 S allie performances et confort méditerranéen. Flybridge accueillant, carène vive et aménagements lumineux pour des croisières en famille ou entre amis sur le Golfe.",
      en: "The Prestige 42 S balances performance with Mediterranean comfort. Welcoming flybridge, lively hull and bright interiors for family and friends along the Gulf.",
    },
    specs: [
      { key: "builder", fr: "Chantier", en: "Builder", valueFr: "Jeanneau", valueEn: "Jeanneau" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "13.36 m", valueEn: "13.36 m" },
      { key: "year", fr: "Année", en: "Year", valueFr: "2009", valueEn: "2009" },
      { key: "berths", fr: "Couchages", en: "Berths", valueFr: "6", valueEn: "6" },
    ],
  },
  {
    slug: "whiteshark",
    name: "Whiteshark",
    category: "boat",
    listingType: "sale",
    length: "9.5 m",
    year: 2018,
    berths: 2,
    location: { fr: "Port-Grimaud", en: "Port-Grimaud" },
    price: 125000,
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [
      "/images/boats/whiteshark/1.webp",
      "/images/boats/whiteshark/2.webp",
      "/images/boats/whiteshark/3.webp",
      "/images/boats/whiteshark/4.webp",
      "/images/boats/whiteshark/5.webp",
      "/images/boats/whiteshark/6.webp",
    ],
    description: {
      fr: "Un dayboat sportif et élégant, pensé pour les journées en mer et les déplacements vers les criques. Finition soignée, conduite précise, esthétique contemporaine.",
      en: "A sporting yet elegant dayboat, made for days at sea and runs to hidden coves. Refined finish, precise handling, contemporary lines.",
    },
    specs: [
      { key: "type", fr: "Type", en: "Type", valueFr: "Dayboat", valueEn: "Dayboat" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "9.5 m", valueEn: "9.5 m" },
      { key: "year", fr: "Année", en: "Year", valueFr: "2018", valueEn: "2018" },
    ],
  },
  {
    slug: "princess-v58",
    name: "Princess V58",
    category: "yacht",
    listingType: "sale",
    length: "18.2 m",
    year: 2012,
    berths: 6,
    location: { fr: "Cannes", en: "Cannes" },
    price: 575000,
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [
      U("photo-1567899378494-47b22a2ae96a"),
      U("photo-1605281317010-fe5ffe798166"),
    ],
    description: {
      fr: "Sportbridge britannique au profil affirmé. Espaces de vie généreux, finitions Princess et performances adaptées à la Méditerranée.",
      en: "A British sportbridge with a confident profile. Generous living spaces, Princess finish and performance suited to the Mediterranean.",
    },
    specs: [
      { key: "builder", fr: "Chantier", en: "Builder", valueFr: "Princess", valueEn: "Princess" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "18.2 m", valueEn: "18.2 m" },
      { key: "year", fr: "Année", en: "Year", valueFr: "2012", valueEn: "2012" },
    ],
  },
  {
    slug: "azimut-55",
    name: "Azimut 55",
    category: "yacht",
    listingType: "sale",
    length: "17.2 m",
    year: 2016,
    berths: 6,
    location: { fr: "Antibes", en: "Antibes" },
    price: 890000,
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [
      U("photo-1544551763-46a013bb70d5"),
      U("photo-1559827260-dc66d52bef19"),
    ],
    description: {
      fr: "Lignes italiennes, flybridge panoramique et cabines raffinées. Un yacht contemporain pour une croisière exigeante.",
      en: "Italian lines, panoramic flybridge and refined cabins. A contemporary yacht for discerning cruising.",
    },
    specs: [
      { key: "builder", fr: "Chantier", en: "Builder", valueFr: "Azimut", valueEn: "Azimut" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "17.2 m", valueEn: "17.2 m" },
      { key: "year", fr: "Année", en: "Year", valueFr: "2016", valueEn: "2016" },
    ],
  },
  {
    slug: "beneteau-antares-9",
    name: "Bénéteau Antares 9",
    category: "boat",
    listingType: "rent",
    length: "8.9 m",
    year: 2021,
    berths: 4,
    location: { fr: "Port-Grimaud", en: "Port-Grimaud" },
    price: 450,
    priceLabel: "day",
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [
      U("photo-1569263979104-865ab7cd8d13"),
      U("photo-1505118380757-91f5f5632de0"),
    ],
    description: {
      fr: "Location à la journée pour explorer le Golfe. Confortable, maniable, idéal pour familles et sorties entre amis.",
      en: "Day charter to explore the Gulf. Comfortable, easy to handle, ideal for families and friends.",
    },
    specs: [
      { key: "type", fr: "Type", en: "Type", valueFr: "Location journée", valueEn: "Day charter" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "8.9 m", valueEn: "8.9 m" },
    ],
  },
  {
    slug: "capelli-tempest-38",
    name: "Capelli Tempest 38",
    category: "boat",
    listingType: "rent",
    length: "11.5 m",
    year: 2020,
    berths: 2,
    location: { fr: "Saint-Tropez", en: "Saint-Tropez" },
    price: 890,
    priceLabel: "day",
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [
      U("photo-1520250497591-112f2f40a3f4"),
      U("photo-1473116763249-2faaef81ccda"),
    ],
    description: {
      fr: "Semi-rigide haut de gamme pour des journées dynamiques entre plages et mouillages privés.",
      en: "A premium RIB for energetic days between beaches and private anchorages.",
    },
    specs: [
      { key: "type", fr: "Type", en: "Type", valueFr: "Semi-rigide", valueEn: "RIB" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "11.5 m", valueEn: "11.5 m" },
    ],
  },
  {
    slug: "sunseeker-manhattan-52",
    name: "Sunseeker Manhattan 52",
    category: "yacht",
    listingType: "rent",
    length: "16.5 m",
    year: 2015,
    berths: 6,
    location: { fr: "Sainte-Maxime", en: "Sainte-Maxime" },
    price: 8500,
    priceLabel: "week",
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [
      U("photo-1589197331516-4d84b72eb2ad"),
      U("photo-1540946485063-a40da27545f8"),
    ],
    description: {
      fr: "Charter hebdomadaire avec équipage sur demande. Confort Sunseeker pour une semaine en Méditerranée.",
      en: "Weekly charter with crew on request. Sunseeker comfort for a week on the Mediterranean.",
    },
    specs: [
      { key: "builder", fr: "Chantier", en: "Builder", valueFr: "Sunseeker", valueEn: "Sunseeker" },
      { key: "length", fr: "Longueur", en: "Length", valueFr: "16.5 m", valueEn: "16.5 m" },
    ],
  },
];

export function getYachtBySlug(slug: string) {
  return yachts.find((y) => y.slug === slug);
}

export function formatPrice(amount: number, locale: string) {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
