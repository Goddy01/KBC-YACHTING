export type TeamMember = {
  id: string;
  name: string;
  role: { fr: string; en: string };
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Karim Ben Cheikh",
    role: {
      fr: "Fondateur · Brokerage",
      en: "Founder · Brokerage",
    },
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=webp&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Sophie Moreau",
    role: {
      fr: "Conseillère · Flotte & location",
      en: "Advisor · Fleet & charter",
    },
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Antoine Vidal",
    role: {
      fr: "Conseiller · Immobilier",
      en: "Advisor · Real estate",
    },
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=webp&fit=crop&w=800&q=80",
  },
];
