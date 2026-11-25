import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

/**
 * The seven destinations of the portal, in navigation order.
 *
 * `"/"` is the overview. Every other entry is also the path the reader sees, so a
 * new destination is one string here, one key in the route table, and one nav label
 * per locale — nothing else has to know about it.
 */
export const ROUTES = [
  "/",
  "/node",
  "/features",
  "/install",
  "/security",
  "/troubleshooting",
  "/releases",
] as const;

export type RoutePath = (typeof ROUTES)[number];

/**
 * Resolve any request path to a destination, defaulting to the overview.
 *
 * The default is load-bearing, not cosmetic. `node.popopx.chat/badge` is linked by
 * the POPOPX badge flow, and the deployed behaviour — measured 2026-11-25 with
 * `curl --noproxy '*'` — is that `/badge`, `/badge?app=desktop` and
 * `/badge?app=android` all answer 200 with the entry document. Nothing here may
 * turn one of those into an error screen or a redirect, so an unmatched path keeps
 * rendering a real page and the query string is never read or rewritten.
 */
export function resolveRoute(pathname: string): RoutePath {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return (ROUTES as readonly string[]).includes(trimmed) ? (trimmed as RoutePath) : "/";
}

interface RouterValue {
  path: RoutePath;
  navigate: (to: RoutePath) => void;
}

const RouterContext = createContext<RouterValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<RoutePath>(() =>
    resolveRoute(typeof window === "undefined" ? "/" : window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setPath(resolveRoute(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to: RoutePath) => {
    if (resolveRoute(window.location.pathname) === to) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    window.history.pushState(null, "", to);
    setPath(to);
    // Scrolling in the same tick as the state change measures the outgoing page,
    // which is the wrong height whenever the two pages differ in length.
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }, []);

  const value = useMemo<RouterValue>(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const value = useContext(RouterContext);
  if (!value) throw new Error("useRouter must be used inside RouterProvider");
  return value;
}

/**
 * An internal link that swaps the page without a document request.
 *
 * The `href` is a real path rather than a `javascript:` URL, so middle-click, "copy
 * link address" and a reader with JavaScript disabled all get the same destination
 * the router would — the vhost's `try_files … /index.html` answers it. In-page
 * anchors are left to the browser: they are not routes, and intercepting them would
 * break the smooth scroll the stylesheet declares.
 */
export function RouteLink({
  to,
  children,
  className,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const { path, navigate } = useRouter();
  const external = to.startsWith("#") || to.startsWith("mailto:");
  const route = resolveRoute(to);
  const active = !external && route === path;

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    rest.onClick?.(event);
    if (event.defaultPrevented || external) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    navigate(route);
  };

  return (
    <a
      href={external ? to : route}
      className={className}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  );
}
