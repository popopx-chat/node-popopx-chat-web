import { useEffect, useRef, useState } from "react";
import { ArrowDown, Check, Copy } from "lucide-react";
import { useI18n } from "../i18n/translations";
import {
  formatSize,
  lookupRelease,
  verifyCommands,
  RELEASES_PAGE_URL,
  type ReleaseLookup,
} from "../data/release";

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function DownloadPanel() {
  const { dict, locale } = useI18n();
  const [lookup, setLookup] = useState<ReleaseLookup | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    lookupRelease(controller.signal).then((result) => {
      if (!controller.signal.aborted) setLookup(result);
    });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const flash = (text: string) => {
    setCopied(text);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 2400);
  };

  const onCopy = async (text: string) => {
    if (await copy(text)) flash(text);
  };

  if (lookup === null) {
    return (
      <div
        className="glass-quiet flex items-center gap-3 rounded-panel px-5 py-6 text-sm text-ink-dim"
        role="status"
        aria-live="polite"
      >
        <span className="node-pulse inline-block h-2 w-2 rounded-full bg-brand-lift" />
        {dict.hero.statusFetching}
      </div>
    );
  }

  const { release, source, note } = lookup;
  const commands = verifyCommands(release);
  const size = formatSize(release.sizeBytes, locale);
  const digest = release.knownSha256;

  return (
    <div className="glass rounded-panel p-5 sm:p-6" id="download">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            {dict.hero.releaseLabel}
          </p>
          <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight text-ink">
            {release.tag}
          </p>
          {release.name === null ? null : (
            <p className="mt-1.5 max-w-full text-pretty text-[12.5px] text-ink-mute">
              {release.name}
            </p>
          )}
          {size === null ? null : (
            <p className="mt-2 text-sm text-ink-dim">
              <span className="text-ink-mute">{dict.hero.sizeLabel} </span>
              {size}
            </p>
          )}
        </div>
        <a
          href={release.dmgUrl}
          className="edge-brand inline-flex items-center gap-2 rounded-pill bg-brand/25 px-5 py-3 text-[15px] font-semibold text-ink shadow-brand transition-transform duration-200 hover:bg-brand/38"
        >
          <ArrowDown size={17} aria-hidden="true" />
          {dict.hero.ctaDownload}
        </a>
      </div>

      <p
        className="mt-4 flex items-center gap-2 text-[13px] text-ink-mute"
        role="status"
        aria-live="polite"
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            source === "live" ? "bg-brand-lift" : "bg-ink-mute"
          }`}
        />
        {source === "live" ? dict.hero.statusLive : dict.hero.statusFallback}
        {note === null ? null : <span className="font-mono text-[11px]">({note})</span>}
      </p>

      {digest === null ? null : (
        <div className="mt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            {dict.hero.digestLabel}
          </p>
          <div className="mt-2 flex items-start gap-3">
            <code className="scroll-shadow min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-[12px] bg-void/70 px-3 py-2 font-mono text-[12px] text-brand-haze">
              {digest}
            </code>
            <button
              type="button"
              onClick={() => void onCopy(digest)}
              aria-label={dict.hero.copyDigest}
              className="glass-quiet inline-flex h-9 shrink-0 items-center gap-1.5 rounded-pill px-3 text-xs text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              {copied === digest ? (
                <>
                  <Check size={14} aria-hidden="true" />
                  {dict.hero.digestCopied}
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  {dict.hero.copyDigest}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-edge pt-5">
        <p className="text-sm font-medium text-ink">{dict.hero.verifyTitle}</p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-dim">
          {dict.hero.verifyBody}
        </p>
        <ol className="mt-3 flex list-none flex-col gap-1.5">
          {commands.map((command) => (
            <li key={command}>
              <div className="flex items-stretch gap-2">
                <code className="scroll-shadow min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-[10px] bg-void/60 px-3 py-2 font-mono text-[12px] text-ink-dim">
                  {command}
                </code>
                <button
                  type="button"
                  onClick={() => void onCopy(command)}
                  aria-label={dict.install.copyCommand}
                  className="glass-quiet inline-flex w-11 shrink-0 items-center justify-center rounded-[10px] text-ink-mute transition-colors duration-200 hover:text-ink"
                >
                  {copied === command ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <Copy size={14} aria-hidden="true" />
                  )}
                </button>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={RELEASES_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[13px] text-ink-dim underline decoration-edge-strong underline-offset-4 hover:text-ink"
        >
          {RELEASES_PAGE_URL}
        </a>
      </div>
    </div>
  );
}
