import { MessageCircle, PhoneCall } from "lucide-react";
import RouteMeta from "../components/RouteMeta";
import ScrollReveal from "../components/ScrollReveal";
import { contact, getContactHref } from "../data/services";

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <RouteMeta title="Contact - Mehansh Platform" description="Get in touch with Mehansh Platform to handle your services." />
      
      <ScrollReveal className="section-pad" style={{ width: "100%" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow eyebrow-lime" style={{ justifyContent: "center", marginBottom: "24px" }}>
            <span className="eyebrow-dot" /> Contact Us
          </span>
          
          <h1 style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.95, marginBottom: "32px", fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, letterSpacing: "-0.04em" }}>
            Want us to handle your <em>services?</em>
          </h1>
          
          <p style={{ color: "var(--slate)", fontSize: "18px", lineHeight: 1.6, maxWidth: "540px", margin: "0 auto 48px" }}>
            Whether it's hospitality, catering, or operational consulting, reach out directly. No forms, just a direct line to the owner.
          </p>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${contact.ownerPhone?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="button button-lime" style={{ minWidth: "200px", minHeight: "54px", fontSize: "13px" }}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            
            <a href={getContactHref("phone", contact.ownerPhone)} className="button" style={{ minWidth: "200px", minHeight: "54px", fontSize: "13px", color: "var(--cream)", borderColor: "var(--line)" }}>
              <PhoneCall size={18} /> Direct Call
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
