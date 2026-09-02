/* Mehansh Platform style: cream/navy editorial navigation, lime active cue, hairline structure, direct interactions. */
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { getService, verticals } from "../data/services";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" onClick={closeMenu} aria-label="Mehansh Platform home">
          <img className="brand-mark" src="/assets/mehansh-mark-256.png" alt="" />
          <span className="brand-wordmark">
            <span>Mehansh</span>
            <span>Platform</span>
          </span>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        <nav id="primary-navigation" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href="/#about" className={location === "/" ? "nav-link active" : "nav-link"} onClick={closeMenu}>
            About
          </Link>
          <details className="nav-services">
            <summary className="nav-link nav-summary">
              Services <ChevronDown size={14} strokeWidth={1.5} />
            </summary>
            <div className="services-menu services-menu-grouped">
              {verticals.map((vertical) => (
                <div className="menu-group" key={vertical.slug}>
                  <Link href={`/#vertical-${vertical.slug}`} className="menu-group-heading" onClick={closeMenu}>
                    <span className="menu-index">{vertical.index}</span>
                    <span>{vertical.title}</span>
                  </Link>
                  <div className="menu-group-children">
                    {vertical.serviceSlugs.map((slug) => {
                      const service = getService(slug);
                      if (!service) return null;
                      return (
                        <Link key={slug} href={`/services/${slug}`} className="service-menu-link" onClick={closeMenu}>
                          {service.displayLabel ?? service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </details>
          <Link href="/#owner" className="nav-link" onClick={closeMenu}>
            Owner
          </Link>
          <Link href="/#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/#services" className="header-cta" onClick={closeMenu}>
            Explore services <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
