import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#060E18",
          soft: "#0F1C2E",
          mid: "#152338",
        },
        cream: {
          DEFAULT: "#F4EFE6",
          muted: "#E6DDD0",
          ivory: "#FAF7F1",
        },
        brass: {
          DEFAULT: "#C9A86C",
          light: "#E4D0A0",
          deep: "#9A7B45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 13vw, 11rem)",
          { lineHeight: "0.85", letterSpacing: "0.06em" },
        ],
      },
      letterSpacing: {
        brand: "0.22em",
        royal: "0.35em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        royal: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      backgroundImage: {
        "royal-fade":
          "linear-gradient(180deg, rgba(6,14,24,0.55) 0%, rgba(6,14,24,0.25) 40%, rgba(6,14,24,0.85) 100%)",
        "gold-shine":
          "linear-gradient(105deg, transparent 40%, rgba(228,208,160,0.15) 50%, transparent 60%)",
      },
      boxShadow: {
        royal: "0 24px 80px rgba(6, 14, 24, 0.18)",
        "gold-glow": "0 0 40px rgba(201, 168, 108, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
