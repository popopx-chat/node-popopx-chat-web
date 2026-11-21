import type { ReactNode } from "react";

export function GlassPanel({
  children,
  className = "",
  quiet = false,
}: {
  children: ReactNode;
  className?: string;
  quiet?: boolean;
}) {
  return (
    <div
      className={`${quiet ? "glass-quiet" : "glass"} rounded-panel ${className}`}
    >
      {children}
    </div>
  );
}
