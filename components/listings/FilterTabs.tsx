"use client";

import { cn } from "@/lib/cn";

type FilterTabsProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterTabs({ options, value, onChange }: FilterTabsProps) {
  return (
    <div className="-mx-4 flex flex-nowrap gap-1 overflow-x-auto border-b border-brass/20 px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "relative shrink-0 px-3 py-3 text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 ease-luxury sm:px-5 sm:py-3.5 sm:tracking-[0.22em]",
            value === opt.value
              ? "text-navy"
              : "text-navy/35 hover:text-navy/70"
          )}
        >
          {opt.label}
          {value === opt.value && (
            <span className="absolute inset-x-3 bottom-0 h-px bg-brass sm:inset-x-5" />
          )}
        </button>
      ))}
    </div>
  );
}
