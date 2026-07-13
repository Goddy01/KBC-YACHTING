"use client";

import { cn } from "@/lib/cn";

type FilterTabsProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterTabs({ options, value, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 border-b border-brass/20 pb-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "relative px-5 py-3.5 text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 ease-luxury",
            value === opt.value
              ? "text-navy"
              : "text-navy/35 hover:text-navy/70"
          )}
        >
          {opt.label}
          {value === opt.value && (
            <span className="absolute inset-x-5 bottom-0 h-px bg-brass" />
          )}
        </button>
      ))}
    </div>
  );
}
