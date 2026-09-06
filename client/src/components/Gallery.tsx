import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

export type GalleryItem = {
  src: string;
  alt: string;
};

interface GalleryProps {
  items?: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  if (!items || items.length === 0) return null;

  const openLightbox = (index: number, buttonElement: HTMLButtonElement) => {
    triggerRef.current = buttonElement;
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <ScrollReveal className="gallery-section section-pad" offset={24}>
      <div className="section-heading-row">
        <div>
          <span className="eyebrow"><span className="eyebrow-dot" /> Gallery</span>
          <h2>A glimpse into<br /><em>the experience.</em></h2>
        </div>
        <p className="section-side-note">A visual walkthrough of the atmosphere, dishes, and moments at Ber.</p>
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            key={item.src + index}
            type="button"
            className="gallery-thumbnail-button"
            onClick={(e) => openLightbox(index, e.currentTarget)}
            aria-label={`View photo: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="gallery-thumbnail" />
            <span className="gallery-overlay-hint">View photo</span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-content">
            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <img
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{items[selectedIndex].alt}</p>

            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </ScrollReveal>
  );
}
