export function SectionHeading({
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
