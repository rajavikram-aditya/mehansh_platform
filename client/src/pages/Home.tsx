// Design reminder: Dopamine Hospitality Club — editorial asymmetry, navy weight and purposeful signal-color moments.
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
import { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

const crest = "/manus-storage/mehansh-crest_199225de.png";

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
    color: "bg-cream text-navy border border-navy/30",
    accent: "bg-signal text-navy",
    icon: Route,
  },
  {
    number: "04",
    title: "Beyond Silli\nChilli",
    copy: "A further managed property in development. The next operating story is being shaped with the same practical hospitality lens.",
    proof: "[REPLACE: confirm property details]",
    color: "bg-cream text-navy border border-navy/30",
    accent: "bg-purple text-cream",
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
    image: "/manus-storage/mehansh-catering_35fb5a72.jpg",
    draft: "[REPLACE: confirm scope, logo and approved property imagery.]",
  },
  {
    number: "02",
    badge: "Management takeover",
    location: "GOA / 02",
    eyebrow: "Restaurant operations",
    title: <>Ber Anjuna,<br />Goa</>,
    description: "An existing restaurant brought under the Mehansh management wing.",
    draft: "[REPLACE: confirm takeover scope and approved assets.]",
  },
  {
    number: "03",
    badge: "Trip operations",
    location: "RAHGIR / 03",
    eyebrow: "Student logistics",
    title: <>Rahgir by<br />Mehansh Platform</>,
    description: "Approved planning, travel coordination and hospitality accountability in one working route.",
    image: "/manus-storage/mehansh-rahgir_6e355fe7.jpg",
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroOffset = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.16], [0, 92]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.08]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.16], [0, -118]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.13, 0.2], [1, 0.82, 0]);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast("Demo inquiry received", {
      description: "[REPLACE: connect this form to your email or CRM destination.]",
    });
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-signal selection:text-navy">
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-signal" style={{ scaleX }} />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Crest inverted />
          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[0.16em] text-cream lg:flex">
            <a href="#services" className="magnetic-link">What we do</a>
            <a href="#wing" className="magnetic-link">Under our wing</a>
            <a href="#founder" className="magnetic-link">Founder</a>
          </nav>
          <a href="#contact" className="hidden bg-signal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-navy transition-transform duration-150 hover:bg-cream active:scale-[0.97] lg:block">
            Start a conversation <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
          </a>
          <button className="grid h-11 w-11 place-items-center border border-cream/30 text-cream lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-cream/20 bg-navy px-5 py-7 text-cream lg:hidden">
            <nav className="flex flex-col gap-5 font-display text-3xl font-semibold">
              <a onClick={closeMenu} href="#services">What we do</a>
              <a onClick={closeMenu} href="#wing">Under our wing</a>
              <a onClick={closeMenu} href="#founder">Founder</a>
              <a onClick={closeMenu} href="#contact" className="text-signal">Start a conversation</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative min-h-[680px] overflow-hidden bg-navy pt-28 sm:min-h-[760px] md:min-h-[820px]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,58,82,0.96)_0%,rgba(31,58,82,0.83)_44%,rgba(31,58,82,0.32)_75%,rgba(31,58,82,0.1)_100%)]" />
          <motion.div className="absolute -inset-y-24 inset-x-0 bg-cover bg-center opacity-85" style={{ backgroundImage: "url('/manus-storage/mehansh-hero_0f1c8e24.jpg')", y: heroImageY, scale: heroImageScale, willChange: "transform" }} />
          <div className="noise-layer absolute inset-0 opacity-30 mix-blend-soft-light" />
          <motion.div style={{ y: heroOffset }} className="absolute -right-28 top-40 h-72 w-72 rounded-full border border-signal/70 sm:-right-20 sm:h-[34rem] sm:w-[34rem]" />
          <div className="absolute -right-7 top-[25rem] h-5 w-5 rotate-45 bg-teal shadow-[0_0_0_12px_rgba(15,191,199,0.12)]" />
          <div className="absolute bottom-0 right-[13%] h-32 w-1 bg-signal/80" />

          <motion.div style={{ y: heroContentY, opacity: heroContentOpacity, willChange: "transform, opacity" }} className="relative mx-auto flex min-h-[570px] max-w-[1440px] flex-col justify-end px-5 pb-14 sm:min-h-[650px] sm:px-8 md:min-h-[710px] md:pb-20 lg:px-12">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="max-w-4xl">
              <motion.div variants={reveal}><Eyebrow light>Hospitality operations, Pune / Goa / beyond</Eyebrow></motion.div>
              <motion.h1 variants={reveal} className="mt-8 font-display text-[clamp(3.45rem,16vw,9.3rem)] font-semibold leading-[0.76] tracking-[-0.055em] text-cream">
                Hospitality,<br /><em className="text-signal">managed</em> end<br className="hidden sm:block" /> to end.
              </motion.h1>
              <motion.div variants={reveal} className="hero-rule mt-9 h-px w-full max-w-2xl bg-cream/40" />
              <motion.div variants={reveal} className="mt-6 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-cream/85 sm:text-base">We take the daily complexity out of hospitality—so a property, institution, or trip can work with purposeful calm.</p>
                <a href="#services" className="group flex w-fit items-center gap-3 border-b border-signal pb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-signal">
                  Meet the platform <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
                </a>
              </motion.div>
            </motion.div>
            <div className="absolute bottom-9 right-5 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-cream/75 md:flex lg:right-12">
              <span className="relative flex h-7 w-7 items-center justify-center"><span className="absolute h-7 w-7 rounded-full border border-signal/70 [animation:pulse-ring_2s_ease-in-out_infinite]" /><ChevronDown className="h-4 w-4 text-signal" /></span>
              Scroll to enter
            </div>
          </motion.div>
        </section>

        <section id="services" className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-navy/15 lg:block" />
          <div className="absolute left-[calc(7%-4px)] top-28 hidden h-2 w-2 rotate-45 bg-signal lg:block" />
          <div className="absolute right-[6%] top-12 font-display text-[210px] font-semibold leading-none text-navy/[0.045]">01</div>
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

        <section id="wing" className="relative overflow-hidden bg-cream py-24 lg:py-32">
          <div className="absolute bottom-0 left-[7%] top-0 hidden w-1 bg-teal lg:block" />
          <div className="absolute left-[calc(7%-6px)] top-20 hidden h-3 w-3 rotate-45 bg-signal lg:block" />
          <div className="noise-layer absolute inset-0 opacity-[0.05]" />
          <ScrollStage className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12" drift={52}>
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
              <div className="relative aspect-[3/4] overflow-hidden bg-teal"><img src="/manus-storage/mehansh-founder_49649d23.jpg" alt="Saurabh Anand, founder of Mehansh Platform" className="h-full w-full object-cover" /><div className="absolute right-4 top-4 bg-cream p-1"><img src={crest} alt="Mehansh Platform crest" className="h-12 w-12" /></div></div>
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
