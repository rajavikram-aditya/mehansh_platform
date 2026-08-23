// Design reminder: Dopamine Hospitality Club — editorial asymmetry, navy weight and purposeful signal-color moments.
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Menu,
  Quote,
  Route,
  Send,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const crest = "/assets/MehnashPlatform.png";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62 } },
};

const servicePillars = [
  {
    number: "01",
    title: "Institutional Catering\n& Canteen Management",
    copy: "We make daily dining dependable: menus, service, staffing and standards that work at institutional scale.",
    proof: "In service at V.I.I.T. Pune",
    color: "bg-navy text-cream",
    accent: "bg-signal text-navy",
    icon: UtensilsCrossed,
  },
  {
    number: "02",
    title: "Restaurant & Property\nManagement Takeover",
    copy: "Bring the business under one operational wing, then build it forward with clarity around people, product and guest experience.",
    proof: "Portfolio signal: Ber Anjuna, Goa",
    color: "bg-teal text-navy",
    accent: "bg-purple text-cream",
    icon: Building2,
  },
  {
    number: "03",
    title: "Rahgir by\nMehansh Platform",
    copy: "Educational and industrial trips, made calm from first route plan to final headcount, for colleges that need a single accountable partner.",
    proof: "Trip logistics, end to end",
    color: "bg-teal text-navy",
    accent: "bg-signal text-navy",
    icon: Route,
  },
  {
    number: "04",
    title: "Beyond Silli\nChilli",
    copy: "A further managed property in development. The next operating story is being shaped with the same practical hospitality lens.",
    proof: "[REPLACE: confirm property details]",
    color: "bg-purple text-cream",
    accent: "bg-signal text-navy",
    icon: ClipboardCheck,
  },
];

const portfolioItems = [
  {
    number: "01",
    badge: "Active operations",
    location: "PUNE / 01",
    eyebrow: "Institutional catering",
    title: <>V.I.I.T. Pune<br />Cafeteria</>,
    description: "Institutional dining managed with a steady service rhythm and accountable daily operations.",
    image: "/assets/mehansh-catering_35fb5a72.jpg",
    draft: "[REPLACE: confirm scope, logo and approved property imagery.]",
  },
  {
    number: "02",
    badge: "Management takeover",
    location: "GOA / 02",
    eyebrow: "Restaurant operations",
    title: <>Ber Anjuna,<br />Goa</>,
    description: "An existing restaurant brought under the Mehansh management wing.",
    image: "/assets/Ber.png",
    draft: "[REPLACE: confirm takeover scope and approved assets.]",
  },
  {
    number: "03",
    badge: "Trip operations",
    location: "RAHGIR / 03",
    eyebrow: "Student logistics",
    title: <>Rahgir by<br />Mehansh Platform</>,
    description: "Approved planning, travel coordination and hospitality accountability in one working route.",
    image: "/assets/Rahgir.png",
  },
  {
    number: "04",
    badge: "Property in development",
    location: "TBD / 04",
    eyebrow: "Managed property",
    title: <>Beyond Silli<br />Chilli</>,
    description: "A further managed property in development, shaped through the same practical operating lens.",
    draft: "[REPLACE: confirm property details and approved imagery.]",
  },
];

function Crest({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Mehansh Platform">
      <div className={`relative grid h-12 w-12 place-items-center overflow-hidden border ${inverted ? "border-cream/30 bg-cream" : "border-navy/15 bg-navy"}`}>
        <img src={crest} alt="Mehansh Platform crest" className="h-10 w-10 object-contain" />
      </div>
      <div className={`leading-[0.84] ${inverted ? "text-cream" : "text-navy"}`}>
        <p className="font-display text-[20px] font-bold tracking-[0.06em]">MEHANSH</p>
        <p className="font-body mt-1 text-[8px] font-bold tracking-[0.28em]">PLATFORM</p>
      </div>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-body text-[10px] font-bold uppercase tracking-[0.22em] ${light ? "text-signal" : "text-navy"}`}>
      <span className={`h-2 w-2 rotate-45 ${light ? "bg-signal" : "bg-teal"}`} />
      {children}
    </div>
  );
}

function ScrollStage({ children, className = "", drift = 38 }: { children: React.ReactNode; className?: string; drift?: number }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [drift, 0, -drift]);
  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.88, 1], [0.35, 1, 1, 0.55]);

  return <motion.div ref={stageRef} className={className} style={{ y, opacity, willChange: "transform, opacity" }}>{children}</motion.div>;
}

// ─── Hero animation helpers ──────────────────────────────────────────────────

/** Split a sentence into words for staggered spring reveals. */
function SplitHeadline({ text, reducedMotion }: { text: string; reducedMotion: boolean | null }) {
  // Split on spaces but preserve line-break marker "\n"
  const words = text.split(" ");
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.055, delayChildren: reducedMotion ? 0 : 0.18 } },
  };
  const wordVariants = (isBold: boolean) => ({
    hidden: reducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: reducedMotion
        ? { duration: 0.4 }
        : { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  });

  return (
    <motion.span
      className="block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => {
        const isBold = word.toLowerCase() === "managed";
        return (
          <motion.span
            key={i}
            className="inline-block mr-[0.22em]"
            variants={wordVariants(isBold)}
          >
            {isBold ? (
              <HeroManagedWord reducedMotion={reducedMotion} />
            ) : (
              <em className={`not-italic ${isBold ? "text-signal" : ""}`}>{word}</em>
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

/** "managed" gets acid color flash + scale bounce on entrance. */
function HeroManagedWord({ reducedMotion }: { reducedMotion: boolean | null }) {
  const [flashed, setFlashed] = useState(false);
  return (
    <motion.em
      className="not-italic"
      style={{ color: flashed ? "#D6FF3B" : "#D6FF3B", display: "inline-block" }}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 40 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: [1, 1.18, 0.95, 1.06, 1], y: 0 }}
      transition={reducedMotion ? { duration: 0.4 } : { type: "spring", stiffness: 320, damping: 10, delay: 0.72 }}
      onAnimationComplete={() => setFlashed(true)}
    >
      managed
    </motion.em>
  );
}


/** Accent shapes (diamond, crosshair ring, vertical bar) spring-bounce in. */
function HeroAccents({ reducedMotion }: { reducedMotion: boolean | null }) {
  const spring = (delay: number) =>
    reducedMotion
      ? { duration: 0.4, delay }
      : { type: "spring" as const, stiffness: 280, damping: 10, delay };
  const hidden = reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -45 };
  const visible = { opacity: 1, scale: 1, rotate: 0 };

  return (
    <>
      {/* Pulsing ring (large right) */}
      <motion.div
        className="absolute -right-10 top-20 h-[30rem] w-[30rem] rounded-full border border-cream/30 sm:-right-20 sm:top-10 sm:h-[45rem] sm:w-[45rem] pointer-events-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reducedMotion ? { duration: 0.5 } : { type: "spring", stiffness: 120, damping: 14, delay: 0.4 }}
      />
      {/* Acid vertical bar */}
      <motion.div
        className="absolute bottom-0 right-[13%] w-1 bg-signal/80"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        style={{ height: "8rem", originY: 1 }}
        transition={reducedMotion ? { duration: 0.4, delay: 0.5 } : { type: "spring", stiffness: 160, damping: 18, delay: 0.9 }}
      />
      {/* Acid small square */}
      <motion.div
        className="absolute left-[12%] bottom-[18%] h-3 w-3 rotate-45 bg-signal/60"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring(1.0)}
      />
    </>
  );
}

/** Magnetic CTA — shifts slightly toward cursor, pulsing acid glow ring. */
function MagneticCTA({ reducedMotion }: { reducedMotion: boolean | null }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href="#services"
      className="group relative flex w-fit items-center gap-3 overflow-visible"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reducedMotion ? {} : { scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {/* Pulsing glow ring */}
      {!reducedMotion && (
        <motion.span
          className="pointer-events-none absolute -inset-4 rounded-sm"
          animate={{ boxShadow: ["0 0 0 0 rgba(214,255,59,0)", "0 0 0 6px rgba(214,255,59,0.15)", "0 0 0 0 rgba(214,255,59,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span className="text-[10px] font-extrabold uppercase leading-tight tracking-[0.2em] text-signal">
        Meet the<br />platform
      </span>
      <ArrowDownRight className="h-4 w-4 text-signal transition-transform duration-200 group-hover:translate-y-1 group-hover:translate-x-1" />
    </motion.a>
  );
}

/** Animated scroll indicator with bouncing chevron. */
function ScrollCue({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <div className="absolute bottom-9 right-5 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-cream/75 md:flex lg:right-12">
      <span className="relative flex h-7 w-7 items-center justify-center">
        {/* Double expanding ring */}
        {!reducedMotion && (
          <motion.span
            className="absolute h-7 w-7 rounded-full border border-signal/70"
            animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.span
          className="absolute h-5 w-5 rounded-full border border-signal/40"
          animate={reducedMotion ? {} : { scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        <motion.span
          animate={reducedMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-signal" />
        </motion.span>
      </span>
      Scroll to enter
    </div>
  );
}

/** Animated crest: rotates in, then subtle idle glow. */
function AnimatedCrest({ inverted = false }: { inverted?: boolean }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={shouldReduce ? { duration: 0.4 } : { type: "spring", stiffness: 180, damping: 14, delay: 0.05 }}
    >
      <motion.div
        className="flex items-center gap-3"
        aria-label="Mehansh Platform"
      >
        <motion.div
          className={`relative grid h-12 w-12 place-items-center overflow-hidden border ${inverted ? "border-cream/30 bg-cream" : "border-navy/15 bg-navy"}`}
          animate={shouldReduce ? {} : { boxShadow: ["0 0 0px 0px rgba(214,255,59,0)", "0 0 12px 3px rgba(214,255,59,0.30)", "0 0 0px 0px rgba(214,255,59,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <img src={crest} alt="Mehansh Platform crest" className="h-10 w-10 object-contain" />
        </motion.div>
        <div className={`leading-[0.84] ${inverted ? "text-cream" : "text-navy"}`}>
          <p className="font-display text-[20px] font-bold tracking-[0.06em]">MEHANSH</p>
          <p className="font-body mt-1 text-[8px] font-bold tracking-[0.28em]">PLATFORM</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroOffset = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.16], [0, 92]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.08]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.16], [0, -42]);

  // Mouse position for blob parallax (normalized -1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (shouldReduce) return;
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Only parallax while in hero bounds
      if (e.clientY > rect.bottom) return;
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduce]);

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast("Demo inquiry received", {
      description: "[REPLACE: connect this form to your email or CRM destination.]",
    });
    event.currentTarget.reset();
  };

  // Stagger variants for eyebrow + headline block + rule + CTA row
  const heroStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
  };
  const heroItemReveal = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1, y: 0,
      transition: shouldReduce
        ? { duration: 0.4 }
        : { type: "spring" as const, stiffness: 160, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-signal selection:text-navy">
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-signal" style={{ scaleX }} />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <AnimatedCrest inverted />
          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.16em] text-cream lg:flex">
            <a href="#services" className="magnetic-link">What we do</a>
            <a href="#wing" className="magnetic-link">Under our wing</a>
            <a href="#founder" className="magnetic-link">Founder</a>
          </nav>
          <a href="#contact" className="hidden bg-signal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-navy transition-transform duration-150 hover:bg-cream active:scale-[0.97] lg:block">
            Start a conversation <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
          </a>
          <button className="grid h-11 w-11 place-items-center border border-cream/30 bg-navy/40 text-cream backdrop-blur-sm transition hover:border-signal hover:text-signal active:scale-[0.97] lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation" aria-expanded={menuOpen}>
            <Menu size={20} />
          </button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.22 }} className="fixed inset-0 z-[70] overflow-y-auto bg-navy text-cream lg:hidden">
            <div className="noise-layer absolute inset-0 opacity-20 mix-blend-soft-light" />
            <div className="absolute -right-16 top-24 h-72 w-72 rounded-full border border-teal/35" />
            <div className="absolute bottom-[-5rem] left-[-6rem] font-display text-[20rem] font-semibold leading-none text-cream/[0.045]">M</div>
            <div className="relative flex min-h-[100dvh] flex-col px-5 pb-7 pt-5">
              <div className="flex items-center justify-between border-b border-cream/20 pb-5">
                <Crest inverted />
                <button onClick={closeMenu} className="flex h-12 items-center gap-2 border border-signal bg-navy px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-signal transition hover:bg-signal hover:text-navy active:scale-[0.97]" aria-label="Close navigation"><X size={18} /><span>Close</span></button>
              </div>
              <div className="flex flex-1 flex-col pt-10">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-teal"><span className="h-2 w-2 rotate-45 bg-signal" />Navigate Mehansh</div>
                <nav className="mt-6">
                  {[{ label: "What we do", href: "#services", number: "01" }, { label: "Under our wing", href: "#wing", number: "02" }, { label: "Founder", href: "#founder", number: "03" }].map((item) => (
                    <a key={item.href} onClick={closeMenu} href={item.href} className="group flex items-center justify-between border-b border-cream/20 py-5 font-display text-[clamp(2.45rem,11vw,3.5rem)] font-semibold leading-[0.86] tracking-[-0.035em] transition hover:pl-2 hover:text-signal"><span>{item.label}</span><span className="font-body text-[10px] font-bold tracking-[0.16em] text-teal transition group-hover:text-signal">{item.number}</span></a>
                  ))}
                </nav>
                <a onClick={closeMenu} href="#contact" className="mt-auto flex items-center justify-between bg-signal px-5 py-5 font-display text-3xl font-semibold leading-none text-navy transition hover:bg-cream active:scale-[0.97]"><span>Start a conversation</span><ArrowUpRight className="h-6 w-6" /></a>
                <div className="mt-6 flex items-center justify-between border-t border-cream/20 pt-5 text-[9px] font-bold uppercase tracking-[0.15em] text-cream/60"><span>Pune / Maharashtra</span><span className="text-signal">Est. 2026</span></div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} className="relative min-h-[680px] overflow-hidden bg-navy pt-28 sm:min-h-[760px] md:min-h-[820px]">
          {/* Hero bg photo (Split layout) */}
          <motion.div
            className="absolute inset-y-0 right-0 w-full lg:w-[65%] bg-cover bg-center opacity-40 lg:opacity-100 [mask-image:linear-gradient(to_right,transparent,black_25%)] lg:[mask-image:linear-gradient(to_right,transparent,black_20%)]"
            style={{ backgroundImage: "url('/assets/hero-image.png')", y: heroImageY, scale: heroImageScale, willChange: "transform" }}
          />

          {/* Additional dark vignette over the image to ensure text contrast */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#1F3A52_30%,transparent_60%)] pointer-events-none" />

          {/* Grain texture */}
          <div className="noise-layer absolute inset-0 opacity-30 mix-blend-soft-light" />

          {/* Accent shapes */}
          <HeroAccents reducedMotion={shouldReduce} />

          {/* Content */}
          <motion.div
            style={{ y: heroContentY, willChange: "transform" }}
            className="relative mx-auto flex min-h-[570px] max-w-[1440px] flex-col justify-end px-5 pb-14 sm:min-h-[650px] sm:px-8 md:min-h-[710px] md:pb-20 lg:px-12"
          >
            <motion.div
              className="max-w-4xl"
              variants={heroStagger}
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow */}
              <motion.div variants={heroItemReveal}>
                <Eyebrow light>Hospitality operations, Pune / Goa / beyond</Eyebrow>
              </motion.div>

              {/* Headline — kinetic split-text */}
              <motion.h1
                variants={heroItemReveal}
                className="mt-8 font-display text-[clamp(3.45rem,16vw,9.3rem)] font-semibold leading-[0.76] tracking-[-0.055em] text-cream"
              >
                <SplitHeadline text="Hospitality," reducedMotion={shouldReduce} />
                <SplitHeadline text="managed end" reducedMotion={shouldReduce} />
                <SplitHeadline text="to end." reducedMotion={shouldReduce} />
              </motion.h1>

              {/* Rule */}
              <motion.div
                variants={heroItemReveal}
                className="hero-rule mt-9 h-px w-full max-w-2xl bg-cream/40"
              />

              {/* Tagline + CTA row */}
              <motion.div
                variants={heroItemReveal}
                className="mt-6 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="max-w-sm px-4 py-3 text-sm leading-6 text-[#F2EDE3] sm:text-base font-medium">
                  We take the daily complexity out of hospitality—so a property, institution, or trip can work with purposeful calm.
                </p>
                <MagneticCTA reducedMotion={shouldReduce} />
              </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <ScrollCue reducedMotion={shouldReduce} />
          </motion.div>
        </section>

        <section id="services" className="relative overflow-hidden bg-cream px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-12 lg:pt-32">
          <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-navy/15 lg:block" />
          <div className="absolute left-[calc(7%-4px)] top-28 hidden h-2 w-2 rotate-45 bg-signal lg:block" />
          <div className="absolute right-[6%] top-12 hidden font-display text-[210px] font-semibold leading-none text-navy/[0.045] lg:block">01</div>
          <ScrollStage className="mx-auto max-w-[1344px]" drift={46}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.88] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Built for the work<br />behind the welcome.</h2>
              </div>
              <p className="max-w-md border-l-2 border-teal pl-5 text-sm leading-6 text-navy/75 sm:text-base">Operations look different by property. Our work begins with a simple question: what would it take to make yours run better, every day?</p>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {servicePillars.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article key={service.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.07 } } }} className={`service-card relative min-h-[370px] overflow-hidden p-7 sm:p-9 ${service.color}`}>
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span className={`grid h-10 w-10 place-items-center text-[11px] font-bold ${service.accent}`}>{service.number}</span>
                        <Icon className="h-6 w-6 opacity-80" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-auto whitespace-pre-line font-display text-4xl font-semibold leading-[0.88] tracking-[-0.035em] sm:text-5xl">{service.title}</h3>
                      <div className="mt-7 flex items-end justify-between gap-6 border-t border-current/25 pt-5">
                        <p className="max-w-sm text-sm leading-5 opacity-85">{service.copy}</p>
                        <ArrowUpRight className="h-5 w-5 shrink-0" />
                      </div>
                      <p className={`mt-5 w-fit px-2 py-1 text-[9px] font-bold uppercase tracking-[0.13em] ${service.proof.includes("[REPLACE:") ? "draft-marker draft-marker--on-light" : service.accent}`}>{service.proof.includes("[REPLACE:") ? `DRAFT · ${service.proof}` : service.proof}</p>
                    </div>
                    <span className="absolute -bottom-12 -right-3 font-display text-[200px] font-semibold leading-none opacity-[0.09]">{service.number}</span>
                  </motion.article>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-4 border-t-2 border-navy pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4"><img src={crest} alt="" className="h-9 w-9 bg-navy p-1" /><p className="text-[10px] font-bold uppercase tracking-[0.16em]">Mehansh operating system / four ways in</p></div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-navy/60"><span>Assess</span><span className="h-px w-8 bg-teal" /><span>Align</span><span className="h-px w-8 bg-teal" /><span>Operate</span></div>
            </div>
          </ScrollStage>
        </section>

        <section id="wing" className="relative overflow-hidden bg-cream pb-24 pt-12 lg:pb-32 lg:pt-16">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 z-0 hidden w-1 bg-teal lg:block" />
          <div className="pointer-events-none absolute left-4 top-20 z-0 hidden h-3 w-3 rotate-45 bg-signal lg:block" />
          <div className="noise-layer absolute inset-0 opacity-[0.05]" />
          <ScrollStage className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12" drift={16}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="flex flex-col justify-between gap-7 border-b border-navy/25 pb-10 md:flex-row md:items-end">
              <div>
                <Eyebrow>Under our wing</Eyebrow>
                <h2 className="mt-6 max-w-2xl font-display text-5xl font-semibold leading-[0.88] tracking-[-0.045em] sm:text-6xl">Operational proof,<br />not just promise.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-navy/75">A short record of work in action. Specific logos, details and imagery are intentionally marked where client approval is still pending.</p>
            </motion.div>
            <div className="mt-10 grid gap-px bg-navy/25 md:grid-cols-2">
              {portfolioItems.map((item, index) => (
                <motion.article key={item.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06 }} className="portfolio-card group relative min-h-[380px] overflow-hidden bg-navy p-7 text-cream sm:min-h-[430px] sm:p-10">
                  {item.image ? <img src={item.image} alt={`${item.eyebrow} at Mehansh Platform`} className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-60" /> : <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,191,199,.72),transparent_32%),linear-gradient(145deg,#1F3A52_20%,#0b5d69_58%,#1F3A52_100%)]" />}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,58,82,.22),rgba(31,58,82,.94))]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-5"><span className="bg-signal px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-navy">{item.badge}</span><span className="border border-cream/45 px-2 py-1 font-body text-[10px] font-bold tracking-[0.16em] text-signal">{item.location}</span></div>
                    <div><p className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-signal">{item.eyebrow}</p><h3 className="mt-3 font-display text-5xl font-semibold leading-[0.88] tracking-[-0.04em]">{item.title}</h3><p className="mt-5 max-w-md text-sm leading-6 text-cream/85">{item.description}</p>{item.draft && <span className="draft-marker mt-5">DRAFT · {item.draft}</span>}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </ScrollStage>
        </section>

        <section id="founder" className="relative overflow-hidden bg-navy px-5 py-24 text-cream sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute -left-20 top-16 h-80 w-80 rounded-full border border-teal/40" />
          <div className="absolute left-[9%] top-32 h-3 w-3 rotate-45 bg-signal [animation:float-token_4s_ease-in-out_infinite]" />
          <ScrollStage className="relative mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center" drift={44}>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-[410px] lg:mx-0">
              <div className="absolute -left-5 -top-5 h-full w-full border border-signal/60" />
              <div className="relative aspect-[3/4] overflow-hidden bg-teal"><img src="/assets/mehansh-founder-portrait_f8964a65.jpeg" alt="Saurabh Anand, founder of Mehansh Platform" className="h-full w-full object-cover object-[center_20%]" /><div className="absolute right-4 top-4 bg-cream p-1"><img src={crest} alt="Mehansh Platform crest" className="h-12 w-12" /></div></div>
              <div className="absolute -bottom-5 -right-5 bg-signal px-5 py-4 text-navy"><p className="font-display text-4xl font-semibold leading-none">25+</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em]">Years in hospitality</p></div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={{ visible: { transition: { staggerChildren: 0.09 } } }}>
              <motion.div variants={reveal}><Eyebrow light>Founder’s desk</Eyebrow></motion.div>
              <motion.h2 variants={reveal} className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.87] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Experience should<br />feel <em className="text-signal">easy.</em><br />Operations do not.</motion.h2>
              <motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-7 text-cream/80">Mehansh Platform is led by Saurabh Anand, a hospitality and culinary professional with more than 25 years of on-ground operating experience.</motion.p>
              <motion.div variants={reveal} className="mt-9 grid border-y border-cream/20 sm:grid-cols-2">
                {["Leela Kempinski, Mumbai", "Ramada Caravela, Goa", "GM — Ecomotel Hotel Pvt Ltd", "GGM — Hibis Hotels / Oakwood Residence"].map((credential, index) => <div key={credential} className={`flex gap-4 py-4 text-sm ${index % 2 === 0 ? "sm:border-r sm:border-cream/20 sm:pr-6" : "sm:pl-6"}`}><span className="text-signal">0{index + 1}</span><span className="text-cream/90">{credential}</span></div>)}
              </motion.div>
              <motion.div variants={reveal} className="mt-8 flex items-start gap-4"><Quote className="h-5 w-5 shrink-0 text-teal" /><p className="max-w-lg font-display text-2xl italic leading-tight text-cream">“The guest sees the welcome. Our job is to make everything behind it work.”</p></motion.div>
            </motion.div>
          </ScrollStage>
        </section>

        <section id="contact" className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute bottom-0 right-0 h-[65%] w-[46%] bg-teal/20 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
          <ScrollStage className="relative mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[.85fr_1.15fr]" drift={40}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
              <Eyebrow>Open a new chapter</Eyebrow>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.88] tracking-[-0.045em] sm:text-6xl">Looking to hand over your operations?</h2>
              <p className="mt-7 max-w-md text-base leading-7 text-navy/75">Tell us what needs to move: a canteen, a restaurant, a property, or a college trip. We’ll start with the operational picture.</p>
              <div className="mt-10 border-l-2 border-purple pl-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple">Based in</p><p className="mt-2 font-display text-2xl font-semibold">Pune, Maharashtra</p><p className="mt-3"><span className="draft-marker draft-marker--on-light">DRAFT · [REPLACE: official phone, email and office address.]</span></p></div>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} onSubmit={handleSubmit} className="relative bg-navy p-7 text-cream shadow-[14px_14px_0_#D6FF3B] sm:p-10">
              <div className="flex items-start justify-between"><p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-signal">Inquiry desk</p><img src={crest} alt="Mehansh Platform crest" className="h-12 w-12 bg-cream p-1" /></div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/65">Your name</span><input required name="name" placeholder="Name" className="mt-2 w-full border-b border-cream/30 bg-transparent pb-3 text-base outline-none placeholder:text-cream/35 focus:border-signal" /></label>
                <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/65">Organisation</span><input required name="organisation" placeholder="Organisation" className="mt-2 w-full border-b border-cream/30 bg-transparent pb-3 text-base outline-none placeholder:text-cream/35 focus:border-signal" /></label>
                <label className="block sm:col-span-2"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/65">Work email</span><input required type="email" name="email" placeholder="you@organisation.com" className="mt-2 w-full border-b border-cream/30 bg-transparent pb-3 text-base outline-none placeholder:text-cream/35 focus:border-signal" /></label>
                <label className="block sm:col-span-2"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cream/65">What are you looking to hand over?</span><textarea required name="message" rows={3} placeholder="A short outline is enough." className="mt-2 w-full resize-none border-b border-cream/30 bg-transparent pb-3 text-base outline-none placeholder:text-cream/35 focus:border-signal" /></label>
              </div>
              <button className="mt-8 inline-flex items-center gap-3 bg-signal px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-navy transition hover:bg-teal active:scale-[0.97]">Send the brief <Send className="h-4 w-4" /></button>
              <p className="mt-5"><span className="draft-marker">DRAFT · [REPLACE: connect to your preferred email or CRM destination.]</span></p>
            </motion.form>
          </ScrollStage>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-navy px-5 pt-14 text-cream sm:px-8 lg:px-12">
        <ScrollStage className="mx-auto max-w-[1344px]" drift={26}>
          <div className="flex flex-col justify-between gap-12 border-b border-cream/20 pb-12 md:flex-row md:items-end">
            <div><Crest inverted /><p className="mt-6 max-w-sm text-sm leading-6 text-cream/65">Hospitality operations that let a property move with confidence.</p></div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/80"><a className="magnetic-link" href="#services">Services</a><a className="magnetic-link" href="#wing">Portfolio</a><button className="magnetic-link" onClick={() => toast("Social links are awaiting confirmation", { description: "[REPLACE: link verified social profiles.]" })}>LinkedIn</button></div>
          </div>
          <div className="flex flex-col justify-between gap-3 py-6 text-[9px] font-bold uppercase tracking-[0.13em] text-cream/45 sm:flex-row"><span>© 2026 Mehansh Platform. All rights reserved.</span><span>Designed around the work behind the welcome.</span></div>
        </ScrollStage>
      </footer>
    </div>
  );
}
