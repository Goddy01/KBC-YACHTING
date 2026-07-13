import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function NotFound() {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${outfit.variable} font-sans antialiased bg-cream text-navy`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-6xl font-medium tracking-[0.12em]">
            KBC
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-brass">
            404
          </p>
          <p className="mt-8 max-w-sm text-navy/55">
            Cette page n&apos;existe pas · This page does not exist
          </p>
          <a
            href="/fr"
            className="mt-10 border border-brass/60 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-navy transition-colors hover:border-brass hover:bg-brass/10"
          >
            Accueil · Home
          </a>
        </main>
      </body>
    </html>
  );
}
