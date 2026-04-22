import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

const SITE_URL = "https://bathurstaccommodation.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

const SEOHead = ({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  keywords,
  structuredData,
  breadcrumbs,
  noindex = false,
}: SEOHeadProps) => {
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

    const image = ogImage || DEFAULT_OG_IMAGE;

    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1");
    if (keywords) setMeta("keywords", keywords);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:site_name", "Bathurst Accommodation", "property");
    setMeta("og:locale", "en_AU", "property");
    setMeta("og:image", image, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    if (canonicalPath) {
      const fullUrl = `${SITE_URL}${canonicalPath}`;
      setMeta("og:url", fullUrl, "property");
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", fullUrl);
    }

    // Auto-generate BreadcrumbList schema if breadcrumbs provided
    const allSchemas: Record<string, unknown>[] = [];
    if (breadcrumbs && breadcrumbs.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      });
    }
    if (structuredData) {
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      allSchemas.push(...schemas);
    }

    document.querySelectorAll('script[data-seo="structured-data"]').forEach((s) => s.remove());
    allSchemas.forEach((schema) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo", "structured-data");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo="structured-data"]').forEach((s) => s.remove());
    };
  }, [title, description, canonicalPath, ogImage, ogType, keywords, structuredData, breadcrumbs, noindex]);

  return null;
};

export default SEOHead;
