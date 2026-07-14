"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type ListingCardProps = {
  href: string;
  image: string;
  title: string;
  meta: string;
  price: string;
  badge?: string;
  cta: string;
  className?: string;
};

export function ListingCard({
  href,
  image,
  title,
  meta,
  price,
  badge,
  cta,
  className,
}: ListingCardProps) {
  return (
    <Link href={href} className={cn("group block min-w-0", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/10">
        <Image
          src={image}
          alt={title}
          fill
          className="img-grade object-cover transition-transform duration-[1.1s] ease-luxury group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
        <div className="pointer-events-none absolute inset-3 border border-transparent transition-all duration-700 ease-luxury group-hover:border-brass/50" />
        {badge && (
          <span className="absolute left-3 top-3 bg-navy/50 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-brass-light backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5">
            {badge}
          </span>
        )}
      </div>
      <div className="pt-5 sm:pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="break-words font-display text-xl font-medium text-navy transition-colors duration-500 group-hover:text-brass-deep sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1.5 text-sm tracking-wide text-navy/45 sm:mt-2">
              {meta}
            </p>
          </div>
          <p className="shrink-0 font-sans text-sm tracking-wide text-navy/75 sm:pt-1">
            {price}
          </p>
        </div>
        <span className="mt-4 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-brass sm:mt-5">
          {cta}
          <span className="h-px w-5 bg-brass transition-all duration-700 ease-luxury group-hover:w-10" />
        </span>
      </div>
    </Link>
  );
}
