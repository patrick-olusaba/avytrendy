import type { Product, Category } from "./types";

const CLOTH_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const WATCH_SIZES = ["38mm", "40mm", "42mm", "44mm"];
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

export const products: Product[] = [
  // ── WATCHES ────────────────────────────────────────────────────────
  {
    id: 1, name: "Aether Chronograph", price: 289, originalPrice: 340,
    category: "watches", color: "#1a1a2e", accent: "#c9a84c", badge: "Sale",
    image: IMG("1523275000638-d2cda7c99730"),
    sizes: WATCH_SIZES, rating: 4.8, reviews: 214,
    description: "Swiss-inspired precision timepiece with a sunray dial and tachymetre bezel.",
    details: ["Stainless steel case", "Sapphire crystal glass", "Water resistant 50m", "2-year warranty"],
  },
  {
    id: 2, name: "Ivory Minimalist", price: 195,
    category: "watches", color: "#f5f0e8", accent: "#8b6914",
    image: IMG("1551816230-ef5deaed4a26"),
    sizes: WATCH_SIZES, rating: 4.6, reviews: 189,
    description: "Clean-dial elegance for the modern minimalist, in rose gold.",
    details: ["Rose gold case", "Genuine leather strap", "Japanese quartz movement", "30m water resistant"],
  },
  {
    id: 3, name: "Noir Sport Pro", price: 320,
    category: "watches", color: "#0d0d0d", accent: "#e8e8e8", badge: "New",
    image: IMG("1526045431048-f857369baa9f"),
    sizes: WATCH_SIZES, rating: 4.9, reviews: 97,
    description: "Bold sport watch built for life's adventures with carbon fibre bezel.",
    details: ["Carbon fiber bezel", "Silicone strap", "Chronograph function", "200m water resistant"],
  },
  {
    id: 4, name: "Rose Precision", price: 245,
    category: "watches", color: "#f7ddd8", accent: "#b5605a",
    image: IMG("1612817159949-195c0e3bcd58"),
    sizes: WATCH_SIZES, rating: 4.7, reviews: 143,
    description: "Delicate rose gold precision watch with a diamond-cut index.",
    details: ["Rose gold PVD coating", "Milanese mesh strap", "Sapphire mineral crystal", "50m water resistant"],
  },
  {
    id: 5, name: "Cobalt Diver 200m", price: 380,
    category: "watches", color: "#1e3a5f", accent: "#7ab3d4", badge: "New",
    image: IMG("1622434641406-a158123450f9"),
    sizes: WATCH_SIZES, rating: 4.9, reviews: 62,
    description: "ISO 6425 certified diver's watch for serious underwater exploration.",
    details: ["Helium escape valve", "Unidirectional ceramic bezel", "Super-LumiNova hands", "200m water resistant"],
  },
  {
    id: 6, name: "Amber Heritage", price: 430,
    category: "watches", color: "#3a2a1a", accent: "#d4a843",
    image: IMG("1542496658-e33a6d0d56f6"),
    sizes: WATCH_SIZES, rating: 4.8, reviews: 78,
    description: "Heirloom-grade vintage-inspired automatic with skeleton exhibition caseback.",
    details: ["Swiss automatic movement", "Aged tan leather strap", "Exhibition caseback", "30m water resistant"],
  },
  {
    id: 7, name: "Steel Skeleton", price: 350,
    category: "watches", color: "#2a2a2a", accent: "#c0c0c0",
    image: IMG("1580480055273-228ff5388ef8"),
    sizes: WATCH_SIZES, rating: 4.6, reviews: 55,
    description: "Open-worked skeleton dial revealing the full mechanical movement inside.",
    details: ["Skeleton dial", "316L stainless steel", "Manual wind movement", "30m water resistant"],
  },
  {
    id: 8, name: "Blush Ceramic", price: 275, originalPrice: 310,
    category: "watches", color: "#f2ddd8", accent: "#9a6e6a", badge: "Sale",
    image: IMG("1548690312-8f4c5e3b2e6a"),
    sizes: WATCH_SIZES, rating: 4.5, reviews: 132,
    description: "Ultra-slim blush ceramic case with a mother-of-pearl dial.",
    details: ["High-tech ceramic case", "Mother-of-pearl dial", "Satin-finish bracelet", "30m water resistant"],
  },

  // ── DRESSES ────────────────────────────────────────────────────────
  {
    id: 9, name: "Silk Drape Midi", price: 185,
    category: "dresses", color: "#c4a882", accent: "#5c3d1e",
    image: IMG("1515886657613-9f3515b0c78f"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 201,
    description: "Fluid silk-touch midi dress with an effortless cowl drape.",
    details: ["95% Viscose blend", "Midi length", "V-neck silhouette", "Machine washable"],
  },
  {
    id: 10, name: "Garden Wrap", price: 145, originalPrice: 180,
    category: "dresses", color: "#8fad88", accent: "#2d5a27", badge: "Sale",
    image: IMG("1496747386009-20d6f6b89ac8"),
    sizes: CLOTH_SIZES, rating: 4.5, reviews: 318,
    description: "Floral wrap dress perfect for brunch, garden parties and beyond.",
    details: ["100% Cotton", "Adjustable tie waist", "Knee-length", "Available in 4 colors"],
  },
  {
    id: 11, name: "Obsidian Evening", price: 265,
    category: "dresses", color: "#1c1c1c", accent: "#d4af37", badge: "New",
    image: IMG("1566174053879-31528523f8ae"),
    sizes: CLOTH_SIZES, rating: 4.9, reviews: 89,
    description: "Statement floor-length evening dress with architectural seaming.",
    details: ["Scuba crepe fabric", "Hidden back zip", "Floor-length", "Dry clean only"],
  },
  {
    id: 12, name: "Linen Summer Shift", price: 125,
    category: "dresses", color: "#f5efe0", accent: "#a08060",
    image: IMG("1485518882345-15568b007407"),
    sizes: CLOTH_SIZES, rating: 4.4, reviews: 276,
    description: "Breezy linen shift dress — the easiest thing to throw on all summer.",
    details: ["100% Washed Linen", "A-line silhouette", "Side pockets", "Machine washable"],
  },
  {
    id: 13, name: "Asymmetric Velvet", price: 195,
    category: "dresses", color: "#2d1a4a", accent: "#9b6eca",
    image: IMG("1469334031218-e382a71b716b"),
    sizes: CLOTH_SIZES, rating: 4.8, reviews: 107,
    description: "Dramatic asymmetric hem velvet dress with off-shoulder neckline.",
    details: ["Stretch velvet", "Asymmetric hem", "Off-shoulder", "Dry clean recommended"],
  },
  {
    id: 14, name: "Printed Maxi", price: 165, originalPrice: 210,
    category: "dresses", color: "#5a7a6a", accent: "#e8c860", badge: "Sale",
    image: IMG("1595777216528-f7be0cc9db56"),
    sizes: CLOTH_SIZES, rating: 4.6, reviews: 194,
    description: "Flowing maxi dress in a bold botanical print, fully lined.",
    details: ["100% Crepe", "Fully lined", "Floor-length", "Hidden side zip"],
  },
  {
    id: 15, name: "Off-Shoulder Satin", price: 215,
    category: "dresses", color: "#e8d5b0", accent: "#7a5a2a",
    image: IMG("1590548784585-643d2b9f2925"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 148,
    description: "Champagne satin off-shoulder midi with a ruffle trim.",
    details: ["100% Polyester satin", "Boned bodice", "Off-shoulder", "Dry clean only"],
  },
  {
    id: 16, name: "Blazer Dress", price: 235,
    category: "dresses", color: "#2c2c3a", accent: "#a0a8c0", badge: "New",
    image: IMG("1588854337236-6889d631faa8"),
    sizes: CLOTH_SIZES, rating: 4.8, reviews: 73,
    description: "Power-dressing blazer dress cut from premium stretch suiting.",
    details: ["Stretch suiting fabric", "Double-breasted", "Knee-length", "Dry clean"],
  },

  // ── PANTS ──────────────────────────────────────────────────────────
  {
    id: 17, name: "Tailored Wide Leg", price: 138,
    category: "pants", color: "#4a4a6a", accent: "#b8b8d4",
    image: IMG("1617196034740-c3741d0f7454"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 224,
    description: "High-waist wide-leg trousers cut from a smooth polyester blend.",
    details: ["Polyester blend", "High-rise waist", "Side zip closure", "Dry clean recommended"],
  },
  {
    id: 18, name: "Linen Straight Cut", price: 112, originalPrice: 135,
    category: "pants", color: "#d4c5a9", accent: "#6b5a3e", badge: "Sale",
    image: IMG("1542272604-787c3835535d"),
    sizes: CLOTH_SIZES, rating: 4.5, reviews: 302,
    description: "Breathable linen trousers for effortless warm-weather dressing.",
    details: ["100% Linen", "Straight cut", "Elastic waistband", "Two side pockets"],
  },
  {
    id: 19, name: "Cargo Utility", price: 98,
    category: "pants", color: "#4a5240", accent: "#a8b89e",
    image: IMG("1473966968600-fa4cfeeb7cf0"),
    sizes: CLOTH_SIZES, rating: 4.4, reviews: 415,
    description: "Relaxed-fit cargo trousers with six clean utility pockets.",
    details: ["Cotton twill", "Slim cargo fit", "6 pockets", "Machine washable"],
  },
  {
    id: 20, name: "Cigarette Crop", price: 145,
    category: "pants", color: "#2a2a2a", accent: "#e0e0e0", badge: "New",
    image: IMG("1558618666-fcd25c85cd64"),
    sizes: CLOTH_SIZES, rating: 4.8, reviews: 156,
    description: "Ankle-grazing cigarette trousers with a slim tailored line.",
    details: ["Crepe suiting", "High-rise", "Ankle length", "Side pockets"],
  },
  {
    id: 21, name: "Silk Palazzo", price: 175,
    category: "pants", color: "#c8b0a8", accent: "#6a3a2a",
    image: IMG("1509631179647-0177331693ae"),
    sizes: CLOTH_SIZES, rating: 4.6, reviews: 98,
    description: "Fluid silk palazzo trousers that drape beautifully in motion.",
    details: ["100% Silk", "Wide leg", "Elasticated waist", "Dry clean"],
  },
  {
    id: 22, name: "Cropped Flare", price: 128, originalPrice: 155,
    category: "pants", color: "#6a5a7a", accent: "#c8b8d8", badge: "Sale",
    image: IMG("1604176354204-9268737828e4"),
    sizes: CLOTH_SIZES, rating: 4.5, reviews: 183,
    description: "70s-inspired cropped flare with a smooth fitted hip.",
    details: ["Stretch ponte", "Mid-rise", "Flared hem", "Machine washable"],
  },
  {
    id: 23, name: "Leather-Look Slim", price: 165,
    category: "pants", color: "#1a1a1a", accent: "#808080",
    image: IMG("1584370848010-d7fe6bc767ec"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 267,
    description: "Slim-cut faux leather trousers with a coated matte finish.",
    details: ["Faux leather", "Slim cut", "Elasticated back waist", "Wipe clean"],
  },

  // ── TOPS ───────────────────────────────────────────────────────────
  {
    id: 24, name: "Satin Tie Blouse", price: 95,
    category: "tops", color: "#f0e6d3", accent: "#8b5e3c",
    image: IMG("1521572163474-6864f9cf17ab"),
    sizes: CLOTH_SIZES, rating: 4.6, reviews: 341,
    description: "Fluid satin blouse with a billowing sleeve and neck-tie detail.",
    details: ["100% Polyester satin", "Relaxed fit", "Tie neck", "Hand wash cold"],
  },
  {
    id: 25, name: "Structured Crop", price: 88,
    category: "tops", color: "#2c2c3e", accent: "#9b8ec4", badge: "New",
    image: IMG("1581044777550-4cfa4b2efbfa"),
    sizes: CLOTH_SIZES, rating: 4.8, reviews: 178,
    description: "Architecturally seamed crop top with invisible zip and premium finish.",
    details: ["Ponte fabric", "Cropped silhouette", "Invisible zip", "Dry clean"],
  },
  {
    id: 26, name: "Broderie Anglaise", price: 105, originalPrice: 130,
    category: "tops", color: "#fafaf5", accent: "#c8a96e", badge: "Sale",
    image: IMG("1434389677669-e08b4cac3105"),
    sizes: CLOTH_SIZES, rating: 4.5, reviews: 229,
    description: "Romantic broderie anglaise blouse with flutter sleeves.",
    details: ["100% Cotton", "Flutter sleeves", "Button-back closure", "Machine washable"],
  },
  {
    id: 27, name: "Oversized Linen", price: 115,
    category: "tops", color: "#e8e0d0", accent: "#7a6850",
    image: IMG("1589992896912-5ce5da7c75b2"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 392,
    description: "Relaxed oversized linen shirt, the season's most versatile piece.",
    details: ["100% Linen", "Oversized fit", "Chest pocket", "Machine washable"],
  },
  {
    id: 28, name: "Smocked Peasant", price: 92,
    category: "tops", color: "#d8c0b0", accent: "#8a5040",
    image: IMG("1556905055-8f358a7a47b2"),
    sizes: CLOTH_SIZES, rating: 4.4, reviews: 167,
    description: "Bohemian smocked peasant blouse with elasticated neckline.",
    details: ["100% Cotton", "Smocked bust", "Puff sleeve", "Machine washable"],
  },
  {
    id: 29, name: "Ribbed Turtleneck", price: 78,
    category: "tops", color: "#1e1e28", accent: "#8090b0",
    image: IMG("1578587018452-892bacefd3f2"),
    sizes: CLOTH_SIZES, rating: 4.9, reviews: 512,
    description: "Fine-rib turtleneck in a luxe cotton-modal blend.",
    details: ["70% Cotton 30% Modal", "Slim fit", "High neck", "Machine washable"],
  },
  {
    id: 30, name: "Sequin Cami", price: 135,
    category: "tops", color: "#2a2030", accent: "#d0b870", badge: "New",
    image: IMG("1566174053879-31528523f8ae"),
    sizes: CLOTH_SIZES, rating: 4.7, reviews: 94,
    description: "All-over sequin cami that transitions seamlessly from desk to dinner.",
    details: ["Sequin embellishment", "Lined", "Adjustable straps", "Dry clean only"],
  },
];

export const categories: { key: Category; label: string; icon: string }[] = [
  { key: "all", label: "All Items", icon: "⬡" },
  { key: "watches", label: "Watches", icon: "◎" },
  { key: "dresses", label: "Dresses", icon: "◇" },
  { key: "pants", label: "Trousers", icon: "▱" },
  { key: "tops", label: "Blouses & Tops", icon: "△" },
];

export function categoryIcon(cat: string) {
  switch (cat) {
    case "watches": return "◎";
    case "dresses": return "◇";
    case "pants": return "▱";
    default: return "△";
  }
}
