import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 pt-32 text-center">
      <p className="font-display text-5xl font-medium tracking-[0.12em] text-navy">
        KBC
      </p>
      <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-brass">
        404
      </p>
      <p className="mt-8 max-w-sm text-navy/55">
        Cette page n&apos;existe pas · This page does not exist
      </p>
      <Link
        href="/fr"
        className="mt-10 border border-brass/60 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-navy transition-colors hover:border-brass hover:bg-brass/10"
      >
        Accueil · Home
      </Link>
    </div>
  );
}
