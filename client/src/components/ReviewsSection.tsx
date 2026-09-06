import ScrollReveal from "./ScrollReveal";

export type Review = {
  author: string;
  role: "owner" | "customer";
  quote: string;
};

interface ReviewsSectionProps {
  reviews?: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <ScrollReveal className="reviews-section section-pad" offset={20}>
      <div className="section-heading-row">
        <div>
          <span className="eyebrow"><span className="eyebrow-dot" /> Voices</span>
          <h2>What people say<br /><em>about the space.</em></h2>
        </div>
        <p className="section-side-note">Thoughts from the founder behind the venue and guests who have visited.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => {
          const isOwner = review.role === "owner";
          return (
            <div
              key={index}
              className={`review-card ${isOwner ? "review-card-owner" : ""}`}
            >
              <div className="review-card-header">
                {isOwner ? (
                  <span className="review-badge review-badge-owner">From the owner</span>
                ) : (
                  <span className="review-badge review-badge-customer">Guest review</span>
                )}
              </div>
              <p className="review-quote">“{review.quote}”</p>
              <div className="review-author-meta">
                <span className="review-author">{review.author}</span>
                <span className="review-role-text">{isOwner ? "Founder & Host" : "Guest"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
