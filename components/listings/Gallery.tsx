"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type GalleryProps = {
  images: string[];
  alt: string;
};

export function Gallery({ images, alt }: GalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/10 sm:aspect-[16/10]">
        <Image
          src={images[active]}
          alt={`${alt} — ${active + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
      </div>
      <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative h-14 w-20 shrink-0 overflow-hidden opacity-60 transition-opacity duration-300 hover:opacity-100 sm:h-16 sm:w-24",
              active === i && "opacity-100 ring-1 ring-brass"
            )}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="96px" />
          </button>
        ))}
      </div>
    </div>
  );
}
