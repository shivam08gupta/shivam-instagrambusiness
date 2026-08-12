import { cn } from "@/lib/utils";

export function MaterialIcon({
  name,
  className,
  filled = false,
  style,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined leading-none select-none", className)}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}`, ...style }}
    >
      {name}
    </span>
  );
}
