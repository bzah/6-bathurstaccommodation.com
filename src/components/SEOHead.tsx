import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOHead = ({ title, description, canonicalPath, ogImage, structuredData }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "article", "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    if (canonicalPath) {
      setMeta("og:url", `${window.location.origin}${canonicalPath}`, "property");
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `${window.location.origin}${canonicalPath}`);
    }

    // Structured data
    const existingScript = document.querySelector('script[data-seo="structured-data"]');
    if (existingScript) existingScript.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo", "structured-data");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector('script[data-seo="structured-data"]');
      if (script) script.remove();
    };
  }, [title, description, canonicalPath, ogImage, structuredData]);

  return null;
};

export default SEOHead;
