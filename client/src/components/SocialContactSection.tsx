import { PhoneCall } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface SocialContactProps {
  serviceTitle: string;
  instagramUrl?: string;
  contactPhone?: string;
}

export default function SocialContactSection({ serviceTitle, instagramUrl, contactPhone }: SocialContactProps) {
  const isInstagramReady = Boolean(instagramUrl && instagramUrl.trim().length > 0);
  const isPhoneReady = Boolean(contactPhone && contactPhone.trim().length > 0);

  return (
    <ScrollReveal className="social-contact-section section-pad" offset={18}>
      <div className="section-heading-row">
        <div>
          <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Direct Connect</span>
          <h2>Connect with<br /><em>{serviceTitle}.</em></h2>
        </div>
        <p className="section-side-note">Follow our journey on Instagram or reach out directly for reservations and inquiries.</p>
      </div>

      <div className="social-button-group">
        {isInstagramReady ? (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button social-button-instagram"
          >
            Follow on Instagram
          </a>
        ) : (
          <span className="social-button social-button-instagram social-button-disabled" aria-label="Instagram coming soon">
            Instagram coming soon
          </span>
        )}

        {isPhoneReady ? (
          <a
            href={`tel:${contactPhone!.replace(/[^\d+]/g, "")}`}
            className="social-button social-button-phone"
          >
            <PhoneCall size={16} /> Contact {serviceTitle} directly
          </a>
        ) : (
          <span className="social-button social-button-phone social-button-disabled" aria-label="Direct contact coming soon">
            <PhoneCall size={16} /> Direct contact coming soon
          </span>
        )}
      </div>
    </ScrollReveal>
  );
}
