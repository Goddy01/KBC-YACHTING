"use client";

import { Cormorant_Garamond, Outfit } from "next/font/google";

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

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${outfit.variable} font-sans antialiased`}
        style={{
          background: "#F4EFE6",
          color: "#060E18",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <p
            className={cormorant.className}
            style={{ fontSize: "3rem", letterSpacing: "0.12em", margin: 0 }}
          >
            KBC
          </p>
          <p style={{ marginTop: "1.5rem", opacity: 0.55 }}>
            Une erreur est survenue · Something went wrong
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.85rem 1.75rem",
              border: "1px solid #C9A86C",
              background: "transparent",
              cursor: "pointer",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "10px",
            }}
          >
            Réessayer · Retry
          </button>
        </main>
      </body>
    </html>
  );
}
