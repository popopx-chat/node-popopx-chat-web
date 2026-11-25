/**
 * The page-level heading: a mono eyebrow, one balanced title, an optional standfirst.
 * `SubHeading` is the same shape a level down, for the blocks inside a route.
 */
function SectionHeading({
  titleId,
  index,
  title,
  sub,
}: {
  titleId?: string;
  index?: string;
  title: string;
  sub?: string;
}) {
  return (
    <header className="max-w-3xl">
      {index === undefined ? null : (
        <p className="mb-3 font-mono text-xs tracking-[0.28em] text-brand-haze">
          {index}
        </p>
      )}
      <h2
        id={titleId}
        className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {sub === undefined ? null : (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-dim">
          {sub}
        </p>
      )}
      <div className="rule-fade mt-8" />
    </header>
  );
}

function SubHeading({
  titleId,
  label,
  title,
  sub,
}: {
  titleId?: string;
  label?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      {label === undefined ? null : (
        <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-brand-haze">{label}</p>
      )}
      <h3
        id={titleId}
        className="text-balance text-[22px] font-semibold leading-snug tracking-tight text-ink sm:text-[25px]"
      >
        {title}
      </h3>
      {sub === undefined ? null : (
        <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-ink-dim">{sub}</p>
      )}
    </div>
  );
}

export { SectionHeading, SubHeading };
