/* Mehansh Platform style: contact rows stay editorial and direct, while unavailable details become calm, non-interactive states. */
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { getContactHref } from "../data/services";

type ContactValueProps = {
  label: string;
  value: string | null;
  kind: "email" | "phone";
};

export function ContactValue({ label, value, kind }: ContactValueProps) {
  const href = getContactHref(kind, value);
  const displayValue = href ? value : "Contact details coming soon";

  if (!href) {
    return (
      <div className="contact-row contact-row-disabled" role="status" aria-label={`${label}: contact details coming soon`}>
        <span className="contact-label">{label}</span>
        <span>{displayValue}</span>
        <span aria-hidden="true">—</span>
      </div>
    );
  }

  return (
    <a href={href} className="contact-row">
      <span className="contact-label">{label}</span>
      <span>{displayValue}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

export function ContactLink({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact-row">
      <span className="contact-label">{label}</span>
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </a>
  );
}
