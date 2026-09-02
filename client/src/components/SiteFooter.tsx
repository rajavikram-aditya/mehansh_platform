/* Mehansh Platform style: navy footer as a quiet foundation, lime only for the primary contact cue, ruled vertical columns. */
import { Link } from "wouter";
import { ContactLink, ContactValue } from "./ContactValue";
import { contact, getService, verticals } from "../data/services";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-lead">
          <span className="eyebrow eyebrow-lime"><span className="eyebrow-dot" /> Contact</span>
          <h2>Let the next journey<br /><em>start here.</em></h2>
          <span className="footer-action footer-action-disabled">Contact details coming soon</span>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <span className="footer-label">Direct</span>
            <ContactValue label="Owner's email" value={contact.ownerEmail} kind="email" />
            <ContactValue label="Owner's phone" value={contact.ownerPhone} kind="phone" />
          </div>
          <div className="footer-column">
            <span className="footer-label">Saurabh Anand</span>
            <ContactValue label="Saurabh Anand's email" value={contact.saurabhEmail} kind="email" />
            <ContactLink label="Saurabh Anand's LinkedIn" href={contact.linkedin}>LinkedIn</ContactLink>
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
