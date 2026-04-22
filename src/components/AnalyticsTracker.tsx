import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { installClickTracking, trackPageView } from "@/lib/analytics";

/**
 * Mount once inside <BrowserRouter>. Installs the global click listener
 * for affiliate / outbound / download tracking and fires a GA4 page_view
 * on every SPA route change.
 */
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    installClickTracking();
  }, []);

  useEffect(() => {
    // Defer slightly so document.title (set by SEOHead) is up to date.
    const id = window.setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
