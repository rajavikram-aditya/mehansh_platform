/* Mehansh Platform style: asymmetric editorial landing page, cream paper canvas, navy trust layer, lime action cue, tactile vertical storytelling. */
import { ArrowDownRight, ArrowUpRight, Leaf, Sparkles } from "lucide-react";
import { Link } from "wouter";
import CountUp from "../components/CountUp";
import { ContactLink, ContactValue } from "../components/ContactValue";
import RouteMeta from "../components/RouteMeta";
import ScrollReveal from "../components/ScrollReveal";
import { contact, getService, verticals } from "../data/services";

export default function Home() {
  return (
    <div className="home-page">
      <RouteMeta />
      <section className="hero-section">
        <video
          className="hero-video-background"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/mehansh-hero-anchor.jpg"
          // [REPLACE: video asset]
        >
          {/* <source src="/assets/hero-video.mp4" type="video/mp4" /> */}
        </video>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <div className="hero-topline">
            <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Hospitality / Food / Places</span>
            <span className="hero-edition">EST. 2026 / PUNE + GOA</span>
          </div>
          <h1>Built from<br /><em>experience.</em></h1>
          <p className="hero-lede">Mehansh Platform is a place for Genuine Soul to achieve Genuine Dreams — shaped by hospitality, service, and the everyday work of making a place feel right.</p>
          <Link href="#services" className="button button-lime">Explore the platform <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <ScrollReveal className="manifesto-section section-pad" id="about">
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
      </ScrollReveal>

      <ScrollReveal className="services-section section-pad" id="services">
        <div className="services-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> 02 / The platform</span>
            <h2>Four directions,<br /><em>one platform.</em></h2>
          </div>
          <p>Mehansh Platform brings hospitality, food, travel, and distribution into one founder-led ecosystem. Each vertical has its own rhythm and a clear place to begin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {["celebration", "hospitality", "rahgir", "distribution"].map((slug, index) => {
            const vertical = verticals.find(v => v.slug === slug)!;
            const VerticalIcon = vertical.icon;
            
            let colSpanClass = "md:col-span-4";
            if (vertical.slug === "celebration") colSpanClass = "md:col-span-12";

            return (
              <ScrollReveal delay={index * 0.08} className={`vertical-card ${colSpanClass} vertical-card-${vertical.accent}`} id={`vertical-${vertical.slug}`} key={vertical.slug}>
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
                        <span>{service.displayLabel ?? service.title}</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    );
                  })}
                </div>
                {vertical.brandCards && (
                  <div className="brand-card-grid">
                    {vertical.brandCards.map((brand) => (
                      <div className="brand-card" key={brand.slug}>
                        <img src={brand.image} alt={brand.imageAlt} width={brand.width} height={brand.height} loading="lazy" decoding="async" />
                        <div className="brand-card-overlay" />
                        <div className="brand-card-content">
                          <span className="brand-card-kicker">Brand {brand.slug === "eco-tejas" ? "01" : "02"}</span>
                          <h4>{brand.title}</h4>
                          <span className="brand-explore-button brand-explore-button-disabled" aria-label={`${brand.title}: official destination coming soon`}>
                            Official destination coming soon
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {vertical.slug === "rahgir" && (
                  <div className="vertical-note"><span className="note-pulse" /> Rahgir is in development, with educational travel planning being shaped for colleges.</div>
                )}
                <Link href={vertical.slug === "distribution" ? "/services/distribution" : `/services/${vertical.serviceSlugs[0]}`} className="vertical-footer-link">
                  Open vertical <ArrowUpRight size={14} />
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal className="owner-section section-pad" id="owner">
        <div className="owner-portrait">
          <div className="portrait-grid" />
          <img src="/assets/mehansh-mark-256.png" width="256" height="256" alt="Mehansh Platform hand-and-sprout mark" loading="lazy" decoding="async" />
          <span className="portrait-note">Founder-led<br />hospitality practice</span>
        </div>
        <div className="owner-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> 03 / The owner</span>
          <h2>Experience is<br /><em>the first ingredient.</em></h2>
          <p className="owner-lede">Mehansh Platform was started by a hospitality professional with 25+ years in corporate hospitality — and a clear understanding that good ideas move faster when someone has helped you find the way.</p>
          <div className="owner-facts">
            <div><CountUp className="fact-number" to={25} suffix="+" /><span>years in corporate<br />hospitality</span></div>
            <div><CountUp className="fact-number" to={1} prefix="0" /><span>founder-led<br />platform</span></div>
          </div>
          <Link href="#contact" className="text-link">Continue the conversation <ArrowUpRight size={15} /></Link>
        </div>
      </ScrollReveal>

      <ScrollReveal className="contact-section section-pad" aria-label="Contact details" id="contact">
        <div className="contact-intro">
          <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> 04 / Contact</span>
          <h2>Good work starts<br /><em>with a direct line.</em></h2>
          <p>No forms. No holding pattern. Use the details below to reach the platform directly.</p>
        </div>
        <div className="contact-details">
          <ContactValue label="Owner's email" value={contact.ownerEmail} kind="email" />
          <ContactValue label="Owner's phone" value={contact.ownerPhone} kind="phone" />
          <ContactValue label="Saurabh Anand's email" value={contact.saurabhEmail} kind="email" />
          <ContactLink label="Saurabh Anand's LinkedIn" href={contact.linkedin}>Open profile</ContactLink>
        </div>
      </ScrollReveal>

      <ScrollReveal className="closing-section">
        <div className="closing-symbol"><Leaf size={28} strokeWidth={1} /></div>
        <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Mehansh Platform</span>
        <h2>A place for Genuine Soul<br /><em>to achieve Genuine Dreams.</em></h2>
        <div className="closing-line"><Sparkles size={15} strokeWidth={1.25} /> The next chapter is already in motion.</div>
      </ScrollReveal>
    </div>
  );
}
