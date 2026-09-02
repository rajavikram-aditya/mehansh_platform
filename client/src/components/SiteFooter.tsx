/* Mehansh Platform style: navy footer as a quiet foundation, lime only for the primary contact cue, ruled vertical columns. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { contact, getService, verticals } from "../data/services";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-lead">
          <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Contact</span>
          <h2>Let the next journey<br /><em>start here.</em></h2>
          <a className="footer-action" href={`mailto:${contact.ownerEmail}`}>
            Begin a conversation <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <span className="footer-label">Direct</span>
            <a href={`mailto:${contact.ownerEmail}`}>{contact.ownerEmail}</a>
            <a href="tel:+91">{contact.ownerPhone}</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Saurabh Anand</span>
            <a href={`mailto:${contact.saurabhEmail}`}>{contact.saurabhEmail}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} strokeWidth={1.5} /></a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#owner">Owner</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-brand">Mehansh Platform</Link>
        <span>© {new Date().getFullYear()} Mehansh Platform</span>
        <span>A place for Genuine Soul to achieve Genuine Dreams.</span>
      </div>
      <div className="footer-service-strip" aria-label="Service verticals">
        {verticals.map((vertical) => {
          const firstService = getService(vertical.serviceSlugs[0]);
          return (
            <Link key={vertical.slug} href={vertical.slug === "distribution" ? "/services/distribution" : firstService ? `/services/${firstService.slug}` : "/#services"}>
              <span>{vertical.index}</span>{vertical.title}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
