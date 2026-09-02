/* Mehansh Platform style: four editorial verticals, factual project groupings, quiet pastel blocks, and direct next-step language. */
import type { LucideIcon } from "lucide-react";
import { Building2, CakeSlice, Compass, Factory, Utensils } from "lucide-react";

export type ServiceAccent = "aqua" | "lavender" | "olive" | "teal" | "lime" | "grey";

export type BrandCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

export type Service = {
  slug: string;
  index: string;
  label: string;
  title: string;
  verticalSlug: string;
  vertical: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  highlights: { title: string; text: string }[];
  accent: ServiceAccent;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  displayLabel?: string;
  pathwayIntro?: string;
  pathway?: { index: string; title: string; text: string }[];
  brandCards?: BrandCard[];
};

export type Vertical = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  accent: ServiceAccent;
  icon: LucideIcon;
  serviceSlugs: string[];
  brandCards?: BrandCard[];
};

export const distributionBrands: BrandCard[] = [
  {
    slug: "eco-tejas",
    title: "Eco Tejas",
    description: "One of the two brands named in the Mehansh Distribution note.",
    image: "/assets/eco-tejas-reference.jpg",
    imageAlt: "Editorial electric scooter visual for Eco Tejas",
    width: 440,
    height: 292,
  },
  {
    slug: "rowett",
    title: "ROWETT",
    description: "One of the two brands named in the Mehansh Distribution note.",
    image: "/assets/rowett-reference.jpg",
    imageAlt: "Editorial electric three-wheeler visual for ROWETT",
    width: 1600,
    height: 800,
  },
];

export const services: Service[] = [
  {
    slug: "ber",
    index: "01",
    label: "Mehansh Celebration",
    title: "Ber — Goa",
    displayLabel: "Ber — Goa",
    verticalSlug: "celebration",
    vertical: "Cocktail experience & dining",
    tagline: "Where the essence of Goa meets the art of mixology.",
    shortDescription:
      "A cocktail experience that is vibrant and diverse, balancing heritage and innovation with India's rich culture and modern creativity.",
    description: [
      "At Ber, we blend the essence of Goa with the art of mixology, creating a cocktail experience that is as vibrant and diverse as the land itself. Our menu celebrates the perfect balance of heritage and innovation, where each drink is a tribute to India's rich culture, infused with modern creativity.",
      "Embark on a journey through our thoughtfully crafted sections. At Ber, every dish tells a story. Join us for a culinary adventure where tradition meets the future of dining.",
    ],
    highlights: [
      { title: "Indian Fusion", text: "Classic Indian recipes, lovingly prepared with bold spices and fresh ingredients." },
      { title: "Fusion Delights", text: "A modern twist on timeless flavours, merging global cuisines with local influences." },
      { title: "Small Plates", text: "Perfectly portioned creations designed for sharing, with vibrant seasonal ingredients." },
      { title: "Signature Mains", text: "Slow cooking and masterful seasoning, crafted to delight the senses." },
      { title: "Sweet Endings", text: "Decadent desserts blending the richness of tradition with modern gastronomy." },
    ],
    pathwayIntro: "A menu that moves through spice, comfort, shareable plates, and sweet endings — each part carrying Ber's balance of Goan spirit and modern craft.",
    pathway: [
      { index: "01", title: "Starters & Comfort Bites", text: "Delight in a range of vibrant Indian-inspired appetizers and comforting small plates." },
      { index: "02", title: "Vegetarian delights", text: "Carefully curated vegetarian dishes celebrating bold flavours and traditional techniques." },
      { index: "03", title: "Non vegetarian delights", text: "Rich, non-vegetarian dishes crafted with bold spices, marinades, and authentic techniques." },
      { index: "04", title: "Flavors from the tawa & beyond", text: "Bold aromas, aromatic rice dishes, frontier-style plates, seafood, and fragrant biryanis." },
      { index: "05", title: "Cool companions & crunchy sides", text: "Refreshing yoghurts, creamy raitas, crisp masala papads, and sides that balance bold dishes." },
      { index: "06", title: "Sweet indulgences", text: "From Double Ka Meetha to Biscoff Tres Leches, rich chocolate pudding, and gelato." },
    ],
    accent: "olive",
    icon: CakeSlice,
    image: "/assets/ber-editorial.jpg",
    imageAlt: "Editorial Goa dining table with cocktail and shared plates",
  },
  {
    slug: "beyond-silli-chilli",
    index: "02",
    label: "Mehansh Celebration",
    title: "Beyond Silli Chilli",
    displayLabel: "Beyond Silli Chilli",
    verticalSlug: "celebration",
    vertical: "Delivery-only cloud kitchen · Pune",
    tagline: "Your go-to destination for delicious, freshly prepared food delivered straight to your doorstep in Pune.",
    shortDescription:
      "Fresh ingredients, authentic flavours, hygienic preparation, and a whole lot of love — prepared fresh to order and packed with care.",
    description: [
      "We believe great food is all about fresh ingredients, authentic flavours, hygienic preparation, and a whole lot of love. Our kitchen brings a carefully curated selection of mouth-watering dishes, prepared fresh to order and packed with care.",
      "Whether it's a comforting meal after a long day, something special for family, or food for a get-together — built to make every meal memorable.",
    ],
    highlights: [
      { title: "Freshly prepared", text: "Every order is cooked fresh with quality ingredients." },
      { title: "Quality ingredients", text: "Chosen with care to deliver great taste." },
      { title: "Homestyle taste", text: "Comforting, familiar, and satisfying." },
      { title: "Hygienic kitchen", text: "Clean and careful food preparation is our priority." },
      { title: "Fresh & secure packaging", text: "Food reaches you fresh and ready to enjoy." },
      { title: "Made with love", text: "Because food tastes better when made with passion." },
    ],
    accent: "lavender",
    icon: Utensils,
    image: "/assets/beyond-silli-chilli.jpg",
    imageAlt: "Freshly prepared food being packed for delivery",
  },
  {
    slug: "viit",
    index: "03",
    label: "VIIT Pune",
    title: "Engineering College Canteen at VIIT Pune",
    displayLabel: "Engineering College Canteen at VIIT Pune",
    verticalSlug: "celebration",
    vertical: "Campus hospitality",
    tagline: "A refreshing space for food, friends & campus life.",
    shortDescription:
      "An integral part of campus life, serving students, faculty, and staff with everyday meals, snacks, and moments between lectures.",
    description: [
      "The canteen at Vishwakarma Institute of Information Technology (VIIT), Pune is an integral part of campus life, offering students, faculty, and staff a convenient and welcoming place to enjoy meals, snacks, and beverages during their busy academic schedules.",
      "The canteen provides a variety of snacks, beverages, and lunch at affordable rates. In addition to the main canteen, the campus offers several food outlets: a Nescafé shop, fruit stall, bakery outlet, and Kadhai outlet.",
      "Daily breakfast and meal facilities are available on campus.",
      "Beyond being a place to eat, the VIIT canteen serves as a lively social space where students relax between lectures, interact with friends, discuss projects, and create memorable moments of college life.",
    ],
    highlights: [
      { title: "Everyday access", text: "Daily breakfast and meal facilities available on campus." },
      { title: "Multiple outlets", text: "Main canteen, Nescafé shop, fruit stall, bakery outlet, and Kadhai outlet." },
      { title: "Campus rhythm", text: "A welcoming place to pause, meet, discuss, and return to the day." },
    ],
    accent: "aqua",
    icon: Utensils,
    image: "/assets/mehansh-hero-anchor.webp",
    imageAlt: "College canteen counter with fresh breakfast service",
  },
  {
    slug: "hotel-lonavilla",
    index: "01",
    label: "Mehansh Hospitality",
    title: "Hotel Lonavilla",
    displayLabel: "Hotel Lonavilla, Lonavala",
    verticalSlug: "hospitality",
    vertical: "Turnkey hotel project · Lonavala",
    tagline: "A hospitality project in Lonavala, shaped for the work behind the welcome.",
    shortDescription: "One of the turnkey hotel projects listed under Mehansh Hospitality.",
    description: [
      "Hotel Lonavilla — Lonavala is one of the two turnkey hotel projects listed under Mehansh Hospitality.",
      "The project sits within Mehansh Platform's hospitality vertical, bringing the founder's corporate hospitality experience into a new venture.",
    ],
    highlights: [
      { title: "Location", text: "Lonavala." },
      { title: "Project type", text: "Turnkey hotel project." },
      { title: "Vertical", text: "Mehansh Hospitality." },
    ],
    accent: "teal",
    icon: Building2,
    image: "/assets/hotel-lonavilla.jpg",
    imageAlt: "Calm boutique hotel arrival space",
  },
  {
    slug: "hotel-lxa",
    index: "02",
    label: "Mehansh Hospitality",
    title: "Hotel LXA",
    displayLabel: "Hotel LXA, Hinjewadi",
    verticalSlug: "hospitality",
    vertical: "Turnkey hotel project · Hinjewadi",
    tagline: "A hospitality project in Hinjewadi, grounded in operational experience.",
    shortDescription: "One of the turnkey hotel projects listed under Mehansh Hospitality.",
    description: [
      "Hotel LXA — Hinjewadi is one of the two turnkey hotel projects listed under Mehansh Hospitality.",
      "The project sits within Mehansh Platform's hospitality vertical, bringing the founder's corporate hospitality experience into a new venture.",
    ],
    highlights: [
      { title: "Location", text: "Hinjewadi." },
      { title: "Project type", text: "Turnkey hotel project." },
      { title: "Vertical", text: "Mehansh Hospitality." },
    ],
    accent: "teal",
    icon: Building2,
    image: "/assets/hotel-lxa.jpg",
    imageAlt: "Quiet hotel interior with warm natural light",
  },
  {
    slug: "rahgir",
    index: "03",
    label: "Rahgir",
    title: "Educational trips, made more reachable",
    displayLabel: "Educational trips, made more reachable",
    verticalSlug: "rahgir",
    vertical: "Travel initiative",
    tagline: "Helping colleges plan educational trips in a cost-effective way.",
    shortDescription:
      "A new initiative so students can afford trips, travel with purpose, and gain knowledge beyond the classroom.",
    description: [
      "Rahgir is a new initiative helping colleges plan educational trips in a cost-effective way, so students can afford trips and gain knowledge.",
      "No project is listed yet. The direction is clear: make purposeful educational travel more reachable for colleges and students.",
    ],
    highlights: [
      { title: "College-first planning", text: "Built around the needs of educational groups and institutions." },
      { title: "Cost-effective", text: "Planned so more students can afford to participate." },
      { title: "Learning through travel", text: "Trips designed to help students gain knowledge beyond the classroom." },
    ],
    accent: "grey",
    icon: Compass,
  },
  {
    slug: "distribution",
    index: "04",
    label: "Mehansh Distribution",
    title: "Electric scooters & three-wheelers",
    displayLabel: "Electric scooters & three-wheelers",
    verticalSlug: "distribution",
    vertical: "Distribution for two brands",
    tagline: "A distribution vertical for two named brands.",
    shortDescription:
      "The current note names two brands: Eco Tejas and ROWETT. Explore each brand below.",
    description: [
      "Mehansh Distribution is positioned around the distribution of electric scooters and three-wheelers for two brands: Eco Tejas and ROWETT.",
      "The current website presents the two brand names and visual cards only. Destination links can be added once the official brand URLs are supplied.",
    ],
    highlights: [
      { title: "Two brands", text: "Eco Tejas and ROWETT." },
      { title: "Electric scooters", text: "Scooters are included in the distribution note." },
      { title: "Three-wheelers", text: "Three-wheelers are included in the distribution note." },
    ],
    accent: "lime",
    icon: Factory,
    brandCards: distributionBrands,
  },
];

export const verticals: Vertical[] = [
  {
    slug: "hospitality",
    index: "01",
    title: "Mehansh Hospitality",
    summary: "Hotel operations shaped before the doors open — from Lonavala to Hinjewadi.",
    description: "A hospitality vertical built around the work behind the welcome, with two hotel projects listed today.",
    accent: "teal",
    icon: Building2,
    serviceSlugs: ["hotel-lonavilla", "hotel-lxa"],
  },
  {
    slug: "celebration",
    index: "02",
    title: "Mehansh Celebration",
    summary: "Goan plates, Pune delivery, and a canteen built around daily campus rhythm.",
    description: "Three food-led services with different rhythms: Ber in Goa, Beyond Silli Chilli in Pune, and VIIT Pune's campus canteen.",
    accent: "olive",
    icon: CakeSlice,
    serviceSlugs: ["ber", "beyond-silli-chilli", "viit"],
  },
  {
    slug: "rahgir",
    index: "03",
    title: "Rahgir",
    summary: "Study trips that turn a classroom day into a road with a reason.",
    description: "A new educational-travel direction focused on cost-conscious planning for colleges. No project is listed yet.",
    accent: "grey",
    icon: Compass,
    serviceSlugs: ["rahgir"],
  },
  {
    slug: "distribution",
    index: "04",
    title: "Mehansh Distribution",
    summary: "Two mobility brands, one route to market: electric scooters and three-wheelers.",
    description: "A distribution direction for the two brands named in the current note: Eco Tejas and ROWETT. Explore their cards below.",
    accent: "lime",
    icon: Factory,
    serviceSlugs: [],
    brandCards: distributionBrands,
  },
];

export const orderedServices: Service[] = [
  "ber",
  "beyond-silli-chilli",
  "viit",
  "hotel-lonavilla",
  "hotel-lxa",
  "rahgir",
  "distribution",
].map((slug) => services.find((service) => service.slug === slug)!).filter(Boolean);

export function getService(slug: string) {
  if (slug === "canteen") return services.find((service) => service.slug === "viit");
  return services.find((service) => service.slug === slug);
}

const PLACEHOLDER_CONTACT = /^\\s*\\[[^\\]]+\\]\\s*$/;

export type Contact = {
  ownerEmail: string | null;
  ownerPhone: string | null;
  saurabhEmail: string | null;
  linkedin: string;
};

export const contact: Contact = {
  // Keep unavailable values null so placeholders can never become production hrefs.
  ownerEmail: null,
  ownerPhone: null,
  saurabhEmail: null,
  linkedin: "https://in.linkedin.com/in/chefsaurabh",
};

export function isContactValueReady(value: string | null | undefined): value is string {
  return Boolean(value && !PLACEHOLDER_CONTACT.test(value));
}

export function getContactHref(kind: "email" | "phone", value: string | null | undefined) {
  if (!isContactValueReady(value)) return undefined;
  return kind === "email" ? `mailto:${value}` : `tel:${value.replace(/[^\d+]/g, "")}`;
}
