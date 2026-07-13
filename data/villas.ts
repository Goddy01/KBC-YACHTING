export type VillaListing = {
  slug: string;
  name: { fr: string; en: string };
  listingType: "sale" | "rent";
  bedrooms: number;
  surface: number;
  location: { fr: string; en: string };
  price: number;
  priceLabel?: "month" | "week";
  featured: boolean;
  images: string[];
  description: { fr: string; en: string };
};

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${w}&q=80`;

export const villas: VillaListing[] = [
  {
    slug: "villa-vue-mer-ramatuelle",
    name: {
      fr: "Villa vue mer · Ramatuelle",
      en: "Sea-view villa · Ramatuelle",
    },
    listingType: "sale",
    bedrooms: 5,
    surface: 320,
    location: { fr: "Ramatuelle", en: "Ramatuelle" },
    price: 4500000,
    featured: true,
    images: [U("photo-1613490493576-7fde63acd811"), U("photo-1600596542815-ffad4c1539a9")],
    description: {
      fr: "Villa contemporaine dominant le golfe, jardins méditerranéens et terrasses au soleil couchant.",
      en: "Contemporary villa overlooking the gulf, Mediterranean gardens and terraces for golden hour.",
    },
  },
  {
    slug: "appartement-port-grimaud",
    name: {
      fr: "Appartement canal · Port-Grimaud",
      en: "Canal apartment · Port-Grimaud",
    },
    listingType: "sale",
    bedrooms: 3,
    surface: 110,
    location: { fr: "Port-Grimaud", en: "Port-Grimaud" },
    price: 890000,
    featured: true,
    images: [U("photo-1502672260266-1c1ef2d93688"), U("photo-1560448204-e02f11c3d0e2")],
    description: {
      fr: "Appartement avec amarrage privé, lumière du sud et accès immédiat au village lacustre.",
      en: "Apartment with private berth, southern light and immediate access to the lakeside village.",
    },
  },
  {
    slug: "villa-grimaud-colline",
    name: {
      fr: "Villa colline · Grimaud",
      en: "Hillside villa · Grimaud",
    },
    listingType: "sale",
    bedrooms: 4,
    surface: 240,
    location: { fr: "Grimaud", en: "Grimaud" },
    price: 2750000,
    featured: true,
    images: [U("photo-1512917774080-9991f1c4c750"), U("photo-1600607687939-ce8a6c25118c")],
    description: {
      fr: "Pierre et ombre portée, piscine à débordement et vue dégagée sur le massif des Maures.",
      en: "Stone and soft shade, infinity pool and open views toward the Massif des Maures.",
    },
  },
  {
    slug: "penthouse-saint-tropez",
    name: {
      fr: "Penthouse · Saint-Tropez",
      en: "Penthouse · Saint-Tropez",
    },
    listingType: "rent",
    bedrooms: 3,
    surface: 180,
    location: { fr: "Saint-Tropez", en: "Saint-Tropez" },
    price: 12000,
    priceLabel: "week",
    featured: true,
    images: [U("photo-1600585154340-be6161a56a0c"), U("photo-1600566753190-17f0baa2a6c3")],
    description: {
      fr: "Location saisonnière haut de gamme, terrasse panoramique et proximité du port.",
      en: "Premium seasonal rental, panoramic terrace and close to the harbour.",
    },
  },
  {
    slug: "bastide-sainte-maxime",
    name: {
      fr: "Bastide · Sainte-Maxime",
      en: "Bastide · Sainte-Maxime",
    },
    listingType: "sale",
    bedrooms: 6,
    surface: 380,
    location: { fr: "Sainte-Maxime", en: "Sainte-Maxime" },
    price: 3200000,
    featured: false,
    images: [U("photo-1600047509807-ba8f99d2cdde"), U("photo-1600573472592-401b489a3cdc")],
    description: {
      fr: "Bastide provençale restaurée, oliveraie et accès discret à la plage.",
      en: "Restored Provençal bastide, olive grove and discreet beach access.",
    },
  },
  {
    slug: "appartement-cogolin",
    name: {
      fr: "Appartement jardin · Cogolin",
      en: "Garden apartment · Cogolin",
    },
    listingType: "rent",
    bedrooms: 2,
    surface: 85,
    location: { fr: "Cogolin", en: "Cogolin" },
    price: 2800,
    priceLabel: "month",
    featured: false,
    images: [U("photo-1493809842364-78817add7ffb"), U("photo-1522708323590-d24dbb6b0267")],
    description: {
      fr: "Location longue durée, calme résidentiel et proximité des ports du Golfe.",
      en: "Long-term rental, residential calm and close to the Gulf harbours.",
    },
  },
  {
    slug: "villa-gigaro",
    name: {
      fr: "Villa bord de mer · Gigaro",
      en: "Seaside villa · Gigaro",
    },
    listingType: "sale",
    bedrooms: 4,
    surface: 210,
    location: { fr: "La Croix-Valmer", en: "La Croix-Valmer" },
    price: 5100000,
    featured: true,
    images: [U("photo-1613977257363-707ba9348227"), U("photo-1600210492486-724fe5c67fb0")],
    description: {
      fr: "Accès direct à la plage, architecture horizontale et matériaux naturels.",
      en: "Direct beach access, horizontal architecture and natural materials.",
    },
  },
  {
    slug: "maison-gassin",
    name: {
      fr: "Maison de village · Gassin",
      en: "Village house · Gassin",
    },
    listingType: "sale",
    bedrooms: 3,
    surface: 145,
    location: { fr: "Gassin", en: "Gassin" },
    price: 1250000,
    featured: false,
    images: [U("photo-1600585154526-990dced4db0d"), U("photo-1605276374104-dee2a0ed3cd6")],
    description: {
      fr: "Charme du village perché, terrasse ombragée et vue vers la mer.",
      en: "Hilltop village charm, shaded terrace and views toward the sea.",
    },
  },
];
