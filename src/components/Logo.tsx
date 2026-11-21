/**
 * The official POPOPX mark, served from /logo-popopx.svg — a verbatim copy of the
 * brand asset in the popopx-chat repository. Nothing here redraws it: the wrapper
 * only clips it to the app-icon radius and puts a violet halo behind it, so the
 * gradients keep their exact proportions at every size.
 */
export function Logo({
  size = 32,
  glow = true,
  alt,
  className = "",
}: {
  size?: number;
  glow?: boolean;
  alt?: string;
  className?: string;
}) {
  const decorative = alt === undefined;

  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      {glow ? (
        <span
          aria-hidden="true"
          className="absolute -inset-[22%] rounded-full bg-brand/25 blur-[14px]"
        />
      ) : null}
      <img
        src="/logo-popopx.svg"
        width={size}
        height={size}
        alt={decorative ? "" : alt}
        aria-hidden={decorative ? true : undefined}
        className="relative block rounded-[22%] object-cover ring-1 ring-edge-brand"
      />
    </span>
  );
}
