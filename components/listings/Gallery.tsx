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
    <div>
      <div className="relative aspect-[16/10] overflow-hidden bg-navy/10">
        <Image
          src={images[active]}
          alt={`${alt} — ${active + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative h-16 w-24 shrink-0 overflow-hidden opacity-60 transition-opacity duration-300 hover:opacity-100",
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
