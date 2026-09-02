/* Mehansh Platform style: service pages use a calm editorial hero, oversized index numerals, hairline rules, and one lime action accent. */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { getService, orderedServices } from "../data/services";

function accentClass(accent: string) {
  return `accent-${accent}`;
}

function showComingSoon(brand: string) {
  toast(`${brand} link coming soon — add the official destination URL when available.`);
}

export default function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!service) {
    return (
      <section className="not-found-page">
        <span className="eyebrow"><span className="eyebrow-dot" /> Service not found</span>
        <h1>That page has left<br /><em>the platform.</em></h1>
        <Link href="/" className="button button-lime">Back to home <ArrowUpRight size={16} /></Link>
      </section>
    );
  }

  const nextService = orderedServices[(orderedServices.findIndex((item) => item.slug === service.slug) + 1) % orderedServices.length];
  const ServiceIcon = service.icon;

  return (
    <div className={`service-page ${accentClass(service.accent)}`}>
      <section className="service-hero section-pad">
        <div className="service-hero-copy">
          <Link href="/#services" className="back-link"><ArrowLeft size={15} /> All services</Link>
          <span className="eyebrow"><span className="eyebrow-dot" /> {service.label}</span>
          <div className="service-index-large">{service.index}</div>
          <h1>{service.title}</h1>
          <p className="service-tagline">{service.tagline}</p>
          <div className="service-hero-meta">
            <span>{service.vertical}</span>
            <span className="meta-rule" />
            <span>Mehansh Platform</span>
          </div>
        </div>
        <div className="service-hero-media">
          {service.image ? (
            <img src={service.image} alt={service.imageAlt} />
          ) : (
            <div className="service-art-panel">
              <ServiceIcon size={72} strokeWidth={1} />
              <span className="art-caption">{service.label}</span>
              <span className="art-line" />
            </div>
          )}
          <span className="media-caption">Mehansh Platform / {service.index}</span>
        </div>
      </section>

      <section className="service-introduction section-pad section-cream">
        <div className="section-marker"><span className="eyebrow-dot" /> 01 / The work</div>
        <div className="service-intro-grid">
          <h2>Made for the moments<br /><em>that matter.</em></h2>
          <div className="service-body-copy">
            {service.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="service-highlights section-pad">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> 02 / In practice</span>
            <h2>What the service<br /><em>holds together.</em></h2>
          </div>
          <p className="section-side-note">A closer look at the details, places, and habits that shape this part of the platform.</p>
        </div>
        <div className="highlight-grid">
          {service.highlights.map((highlight, index) => (
            <article className="highlight-card" key={highlight.title}>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      {service.pathway && (
        <section className="pathway-section section-pad">
          <div className="pathway-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> 03 / Pathway</span>
            <h2>A menu that moves<br /><em>with intention.</em></h2>
            <p>From comfort bites to sweet indulgences, each part of the Ber experience carries the balance of tradition and modern creativity.</p>
          </div>
          <div className="pathway-grid">
            {service.pathway.map((item) => (
              <article className="pathway-card" key={item.index}>
                <span className="pathway-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {service.brandCards && (
        <section className="brand-showcase section-pad">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> 03 / The brands</span>
              <h2>Two names,<br /><em>one direction.</em></h2>
            </div>
            <p className="section-side-note">The brand cards below are ready for official destination links when they are supplied.</p>
          </div>
          <div className="brand-card-grid brand-card-grid-large">
            {service.brandCards.map((brand, index) => (
              <article className="brand-card" key={brand.slug}>
                <img src={brand.image} alt={brand.imageAlt} />
                <div className="brand-card-overlay" />
                <div className="brand-card-content">
                  <span className="brand-card-kicker">Brand {String(index + 1).padStart(2, "0")}</span>
                  <h4>{brand.title}</h4>
                  <p>{brand.description}</p>
                  <button type="button" className="brand-explore-button" onClick={() => showComingSoon(brand.title)}>
                    {brand.buttonLabel} <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="service-cta section-pad">
        <div className="cta-mark"><ServiceIcon size={26} strokeWidth={1.25} /></div>
        <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Next step</span>
        <h2>Have a question about<br /><em>{service.title}?</em></h2>
        <Link href="/#contact" className="button button-lime">Talk to the platform <ArrowUpRight size={16} /></Link>
      </section>

      <div className="next-service-bar">
        <span>Next service</span>
        <Link href={`/services/${nextService.slug}`}>{nextService.title} <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  );
}
