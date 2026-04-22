// Lightweight GA4 (gtag) helpers + global click tracking.
// gtag is loaded in index.html via the Google tag snippet.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type GAParams = Record<string, unknown>;

/** Send a custom GA4 event. Safe no-op if gtag isn't loaded yet. */
export const trackEvent = (eventName: string, params: GAParams = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", eventName, params);
  } catch {
    /* swallow */
  }
};

/** Track a virtual page_view (used on SPA route changes). */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "page_view", {
      page_path: path,
      page_location: window.location.origin + path,
      page_title: title ?? document.title,
    });
  } catch {
    /* swallow */
  }
};

const KNOWN_AFFILIATES: { match: RegExp; network: string }[] = [
  { match: /booking\.com/i, network: "booking_com" },
  { match: /getyourguide\.com/i, network: "getyourguide" },
  { match: /agoda\.com/i, network: "agoda" },
  { match: /expedia\.[a-z.]+/i, network: "expedia" },
  { match: /hotels\.com/i, network: "hotels_com" },
  { match: /airbnb\.[a-z.]+/i, network: "airbnb" },
  { match: /viator\.com/i, network: "viator" },
  { match: /tripadvisor\.[a-z.]+/i, network: "tripadvisor" },
  { match: /amazon\.[a-z.]+/i, network: "amazon" },
];

const DOWNLOAD_EXT = /\.(pdf|zip|rar|7z|tar|gz|csv|xlsx?|docx?|pptx?|mp3|mp4|mov|wav|dmg|exe|apk|epub)(\?.*)?$/i;

const detectAffiliate = (url: string, anchor: HTMLAnchorElement): string | null => {
  const rel = (anchor.getAttribute("rel") ?? "").toLowerCase();
  if (rel.includes("sponsored") || rel.includes("affiliate")) {
    const hit = KNOWN_AFFILIATES.find((k) => k.match.test(url));
    return hit?.network ?? "other";
  }
  const hit = KNOWN_AFFILIATES.find((k) => k.match.test(url));
  return hit ? hit.network : null;
};

const getInternalHosts = (): string[] => {
  if (typeof window === "undefined") return [];
  return [window.location.hostname];
};

/**
 * Install a single delegated click listener that tracks:
 *  - affiliate_click (Booking, GetYourGuide, etc. + rel="sponsored")
 *  - outbound_click (any external link)
 *  - file_download  (links to known file extensions)
 */
export const installClickTracking = () => {
  if (typeof window === "undefined") return;
  const w = window as Window & { __gaClickInstalled?: boolean };
  if (w.__gaClickInstalled) return;
  w.__gaClickInstalled = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      const href = anchor.href;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      // Ignore mailto / tel / javascript links
      if (!/^https?:$/.test(url.protocol)) return;

      const internalHosts = getInternalHosts();
      const isExternal = !internalHosts.includes(url.hostname);
      const linkText = (anchor.innerText || anchor.textContent || "").trim().slice(0, 100);
      const baseParams = {
        link_url: url.href,
        link_domain: url.hostname,
        link_text: linkText,
        link_path: url.pathname,
        outbound: isExternal,
      };

      // Downloads
      if (DOWNLOAD_EXT.test(url.pathname)) {
        const ext = url.pathname.split(".").pop()?.toLowerCase();
        trackEvent("file_download", { ...baseParams, file_extension: ext, file_name: url.pathname.split("/").pop() });
        return;
      }

      if (!isExternal) return;

      // Affiliates first (more specific), then generic outbound
      const network = detectAffiliate(url.href, anchor);
      if (network) {
        trackEvent("affiliate_click", { ...baseParams, affiliate_network: network });
      }
      trackEvent("outbound_click", baseParams);
    },
    { capture: true }
  );
};
