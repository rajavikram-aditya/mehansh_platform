/* Mehansh Platform style: invisible infrastructure should stay quiet, useful, and grounded in the page's own editorial content. */
import { useEffect } from "react";
import type { Service } from "../data/services";

type RouteMetaProps = { service?: Service | null };

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export default function RouteMeta({ service }: RouteMetaProps) {
  useEffect(() => {
    const isHome = !service;
    const title = isHome ? "Mehansh Platform — Genuine Soul, Genuine Dreams" : `${service.title} — Mehansh Platform`;
    const description = isHome
      ? "Mehansh Platform is a founder-led hospitality, celebration, travel, and distribution platform shaped by experience."
      : service.shortDescription;
    const image = service?.image?.startsWith("/") ? `${window.location.origin}${service.image}` : `${window.location.origin}/assets/mehansh-hero-anchor.webp`;
    const url = `${window.location.origin}${window.location.pathname}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    const existingCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonical = existingCanonical ?? document.head.appendChild(document.createElement("link"));
    canonical.rel = "canonical";
    canonical.href = url;

    const existingJsonLd = document.getElementById("mehansh-jsonld");
    existingJsonLd?.remove();
    const jsonLd = document.createElement("script");
    jsonLd.id = "mehansh-jsonld";
    jsonLd.type = "application/ld+json";
    const schema = isHome
      ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mehansh Platform",
          url: window.location.origin,
          logo: `${window.location.origin}/assets/mehansh-mark-256.png`,
          sameAs: ["https://in.linkedin.com/in/chefsaurabh"],
        }
      : {
          "@context": "https://schema.org",
          "@type": service.slug === "ber" || service.slug === "beyond-silli-chilli" ? "Restaurant" : "LocalBusiness",
          name: service.title,
          description,
          url,
          image,
          brand: { "@type": "Brand", name: "Mehansh Platform" },
        };
    jsonLd.textContent = JSON.stringify(schema);
    document.head.appendChild(jsonLd);
  }, [service]);

  return null;
}
