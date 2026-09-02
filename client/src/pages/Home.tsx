/* Mehansh Platform style: asymmetric editorial landing page, cream paper canvas, navy trust layer, lime action cue, tactile vertical storytelling. */
import { ArrowDownRight, ArrowUpRight, Leaf, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { contact, getService, verticals } from "../data/services";

function showComingSoon(brand: string) {
  toast(`${brand} link coming soon — add the official destination URL when available.`);
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-topline">
            <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Hospitality / Food / Places</span>
            <span className="hero-edition">EST. 2026 / PUNE + GOA</span>
          </div>
          <h1>Built from<br /><em>experience.</em></h1>
          <p className="hero-lede">Mehansh Platform is a place for Genuine Soul to achieve Genuine Dreams — shaped by hospitality, service, and the everyday work of making a place feel right.</p>
          <Link href="#services" className="button button-lime">Explore the platform <ArrowUpRight size={16} /></Link>
          <div className="hero-footnote">
            <span className="hero-footnote-line" />
            <span>Turn the page<br />to see what is in motion.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-image">
            <img src="/manus-storage/mehansh-hero-anchor_eb06e5e5.png" alt="Fresh breakfast service in a lively college canteen" />
          </div>
          <div className="hero-visual-caption">
            <span>01</span>
            <span>Everyday hospitality<br />in the details.</span>
          </div>
          <div className="hero-mark-disc">
            <img src="/manus-storage/mehansh-mark_4f27632a.png" alt="" />
          </div>
        </div>
      </section>

      <section className="manifesto-section section-pad" id="about">
        <div className="manifesto-aside">
          <span className="section-number">01</span>
          <span className="eyebrow"><span className="eyebrow-dot" /> What is Mehansh Platform</span>
        </div>
        <div className="manifesto-main">
          <p className="display-quote">“Mehansh” means <em>Genuine Soul.</em><br />A platform is where a journey begins.</p>
          <div className="manifesto-detail">
            <div className="manifesto-rule" />
            <p>After more than 25 years in corporate hospitality, the founder saw how difficult it can be to set up a business without a mentor. Mehansh Platform began from that insight: a place where experience can become momentum.</p>
            <Link href="#owner" className="text-link">Read the founder's note <ArrowDownRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="services-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> 02 / The platform</span>
            <h2>Four directions,<br /><em>one platform.</em></h2>
          </div>
          <p>Mehansh Platform brings hospitality, food, travel, and distribution into one founder-led ecosystem. Each vertical has its own rhythm and a clear place to begin.</p>
        </div>
        <div className="vertical-grid">
          {verticals.map((vertical) => {
            const VerticalIcon = vertical.icon;
            return (
              <article className={`vertical-card vertical-card-${vertical.accent}`} id={`vertical-${vertical.slug}`} key={vertical.slug}>
                <div className="vertical-card-topline">
                  <span className="card-index">{vertical.index}</span>
                  <VerticalIcon size={21} strokeWidth={1.25} />
                </div>
                <div className="vertical-card-copy">
                  <span className="service-card-label">Mehansh Platform / Vertical</span>
                  <h3>{vertical.title}</h3>
                  <p>{vertical.summary}</p>
                </div>
                <div className="vertical-service-list">
                  {vertical.serviceSlugs.map((slug) => {
                    const service = getService(slug);
                    if (!service) return null;
                    return (
                      <Link key={slug} href={`/services/${service.slug}`} className="vertical-service-row">
                        <span>{service.slug === "hotel-lonavilla" ? "Hotel Lonavilla, Lonavala" : service.slug === "hotel-lxa" ? "Hotel LXA, Hinjewadi" : service.title}</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    );
                  })}
                </div>
                {vertical.brandCards && (
                  <div className="brand-card-grid">
                    {vertical.brandCards.map((brand) => (
                      <div className="brand-card" key={brand.slug}>
                        <img src={brand.image} alt={brand.imageAlt} />
                        <div className="brand-card-overlay" />
                        <div className="brand-card-content">
                          <span className="brand-card-kicker">Brand {brand.slug === "eco-tejas" ? "01" : "02"}</span>
                          <h4>{brand.title}</h4>
                          <button type="button" className="brand-explore-button" onClick={() => showComingSoon(brand.title)}>
                            {brand.buttonLabel} <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {vertical.slug === "rahgir" && (
                  <div className="vertical-note"><span className="note-pulse" /> No project listed yet — the direction is clear.</div>
                )}
                <Link href={vertical.slug === "distribution" ? "/services/distribution" : `/services/${vertical.serviceSlugs[0]}`} className="vertical-footer-link">
                  Open vertical <ArrowUpRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="owner-section section-pad" id="owner">
        <div className="owner-portrait">
          <div className="portrait-grid" />
          <img src="/manus-storage/mehansh-mark_4f27632a.png" alt="Mehansh Platform hand-and-sprout mark" />
          <span className="portrait-note">Founder portrait<br />to be added</span>
        </div>
        <div className="owner-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> 03 / The owner</span>
          <h2>Experience is<br /><em>the first ingredient.</em></h2>
          <p className="owner-lede">Mehansh Platform was started by a hospitality professional with 25+ years in corporate hospitality — and a clear understanding that good ideas move faster when someone has helped you find the way.</p>
          <div className="owner-facts">
            <div><span className="fact-number">25+</span><span>years in corporate<br />hospitality</span></div>
            <div><span className="fact-number">01</span><span>founder-led<br />platform</span></div>
          </div>
          <Link href="#contact" className="text-link">Continue the conversation <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="contact-section section-pad" aria-label="Contact details">
        <div className="contact-intro">
          <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> 04 / Contact</span>
          <h2>Good work starts<br /><em>with a direct line.</em></h2>
          <p>No forms. No holding pattern. Use the details below to reach the platform directly.</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${contact.ownerEmail}`} className="contact-row">
            <span className="contact-label">Owner's email</span>
            <span>{contact.ownerEmail}</span><ArrowUpRight size={16} />
          </a>
          <a href="tel:+91" className="contact-row">
            <span className="contact-label">Owner's phone</span>
            <span>{contact.ownerPhone}</span><ArrowUpRight size={16} />
          </a>
          <a href={`mailto:${contact.saurabhEmail}`} className="contact-row">
            <span className="contact-label">Saurabh Anand's email</span>
            <span>{contact.saurabhEmail}</span><ArrowUpRight size={16} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-label">Saurabh Anand's LinkedIn</span>
            <span>Open profile</span><ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-symbol"><Leaf size={28} strokeWidth={1} /></div>
        <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Mehansh Platform</span>
        <h2>A place for Genuine Soul<br /><em>to achieve Genuine Dreams.</em></h2>
        <div className="closing-line"><Sparkles size={15} strokeWidth={1.25} /> The next chapter is already in motion.</div>
      </section>
    </div>
  );
}
