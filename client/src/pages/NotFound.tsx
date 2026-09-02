/* Mehansh Platform style: a quiet editorial fallback with navy trust, cream paper, and one clear lime escape route. */
import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "wouter";
import RouteMeta from "../components/RouteMeta";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <RouteMeta />
      <div className="not-found-symbol"><Compass size={34} strokeWidth={1} /></div>
      <span className="eyebrow"><span className="eyebrow-dot" /> 404 / Page not found</span>
      <h1>That page has left<br /><em>the platform.</em></h1>
      <p>The address may have moved, but the work is still in motion. Return to the main platform and choose a new direction.</p>
      <Link href="/" className="button button-lime">Back to home <ArrowUpRight size={16} /></Link>
    </section>
  );
}
