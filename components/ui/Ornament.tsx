import { cn } from "@/lib/cn";

type OrnamentProps = {
  className?: string;
  light?: boolean;
};

/** Centered gold hairline with diamond — royal editorial mark */
export function Ornament({ className, light }: OrnamentProps) {
  return (
    <div
      className={cn("ornament-line mx-auto", className)}
      aria-hidden
    >
      <span
        className={cn(
          "ornament-diamond",
          light ? "bg-brass-light" : "bg-brass"
        )}
      />
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-12 bg-gradient-to-r from-transparent via-brass to-transparent",
        className
      )}
    />
  );
}
