/* ─── Shared Portfolio Data & Types ─── */

export interface ProjectPhoto {
  id: number;
  src: string;
  caption: string;
  orientation: "landscape" | "portrait";
}

export interface Project {
  slug: string;
  title: string;         // e.g. "Sarah & James"
  category: string;      // e.g. "Garden Ceremony"
  year: string;
  location: string;
  description: string;
  featuredSrc: string;   // shown on the portfolio listing
  photos: ProjectPhoto[]; // full gallery (~20 images)
}

/* ─── Helper: cycle through available images ─── */
const FALLBACK_IMGS = [
  "IMG_6147.JPG.jpeg", "IMG_6148.JPG.jpeg", "IMG_6155.JPG.jpeg", "IMG_6159.JPG.jpeg",
  "IMG_6342.JPG.jpeg", "IMG_6347.JPG.jpeg", "IMG_6368.JPG.jpeg", "IMG_6374.JPG.jpeg"
];

function getProjectPhotos(folder: string, filenames: string[], captions: string[]): ProjectPhoto[] {
  return filenames.map((filename, i) => {
    return {
      id: i + 1,
      src: folder ? `/images/${folder}/${filename}` : `/images/${filename}`,
      caption: captions[i] || "Wedding photography",
      orientation: i % 4 === 3 ? "landscape" : "portrait",
    };
  });
}

/* ─── Projects ─── */
export const PROJECTS: Project[] = [
  {
    slug: "sarah-and-james",
    title: "Sarah & James",
    category: "Garden Ceremony",
    year: "2026",
    location: "Santorini, Greece",
    description:
      "A golden-hour celebration overlooking the Aegean Sea. Sarah and James chose an intimate clifftop garden for their vows — blooms of white peonies, linen draping, and the scent of the Mediterranean in the air.",
    featuredSrc: "/images/sarah-and-james/IMG_6148.JPG.jpeg",
    photos: getProjectPhotos("sarah-and-james", [
      "IMG_6147.JPG.jpeg", "IMG_6148.JPG.jpeg", "IMG_6155.JPG.jpeg", "IMG_6159.JPG.jpeg"
    ], [
      "First look at the clifftop",
      "The bride in morning light",
      "Ring details on the stone balustrade",
      "Bouquet of white peonies",
      "Walking down the aisle",
      "Exchange of vows",
      "The first kiss",
      "Guests cheering",
      "Flower girl tossing petals",
      "Reception table arrangements",
      "First dance at golden hour",
      "Cutting the cake",
      "Sunset portraits together",
      "The bride's gown detail",
      "Groom's boutonnière",
      "Aerial of the clifftop venue",
      "Candid laughter at dinner",
      "The bouquet toss",
      "Sparkler send-off",
      "Last dance under the stars",
    ]),
  },
  {
    slug: "layla-and-omar",
    title: "Layla & Omar",
    category: "Luxury Ballroom",
    year: "2026",
    location: "Beirut, Lebanon",
    description:
      "An opulent evening in Beirut's most storied ballroom. Layla and Omar's wedding was a masterclass in luxury — crystal chandeliers, Lebanese florals, and a love story as vibrant as the city itself.",
    featuredSrc: "/images/layla-and-omar/IMG_6374.JPG.jpeg",
    photos: getProjectPhotos("layla-and-omar", [
      "IMG_6342.JPG.jpeg", "IMG_6347.JPG.jpeg", "IMG_6368.JPG.jpeg", "IMG_6374.JPG.jpeg", "IMG_6384.JPG.jpeg"
    ], [
      "Bridal portrait in the suite",
      "The groom preparing",
      "Henna ceremony details",
      "Bridal party portrait",
      "Ceremony entrance",
      "Zaffa procession",
      "Signing the marriage contract",
      "Emotional first look",
      "Family portrait in the foyer",
      "Ballroom decorated with orchids",
      "Couple portrait in the corridor",
      "First waltz",
      "Live oud performance",
      "Dessert table spread",
      "Wedding cake reveal",
      "Confetti moment",
      "Speeches and toasts",
      "Candid family moments",
      "Couple portrait on the grand staircase",
      "Night-time exit with sparklers",
    ]),
  },
  {
    slug: "emma-and-noah",
    title: "Emma & Noah",
    category: "Destination Elopement",
    year: "2025",
    location: "Dolomites, Italy",
    description:
      "Just the two of them, a mountain meadow, and an officiant. Emma and Noah stripped their day back to its purest form — no crowd, no noise. Only vows, wildflowers, and a horizon that felt infinite.",
    featuredSrc: "/images/emma-and-noah/IMG_6433.JPG.jpeg",
    photos: getProjectPhotos("emma-and-noah", [
      "IMG_6433.JPG.jpeg", "IMG_6438.JPG.jpeg", "IMG_6457.JPG.jpeg", "IMG_6461.JPG.jpeg", "IMG_6468.JPG.jpeg", "IMG_6481.JPG.jpeg"
    ], [
      "Morning mist over the valley",
      "Emma in her silk slip dress",
      "Noah's hand-written vows",
      "Wildflower bouquet close-up",
      "Walking through the meadow",
      "Exchange of rings",
      "The kiss with mountains behind",
      "Portrait against the ridgeline",
      "Champagne toast",
      "Running through the meadow",
      "Close-up of intertwined hands",
      "Golden light portrait",
      "Drone aerial of the meadow",
      "Detail of the ring on her hand",
      "Laughing together on the rocks",
      "Couple silhouette at sunset",
      "Picnic celebration",
      "Walking into the forest",
      "Wildflowers in her hair",
      "Last light portrait",
    ]),
  },
  {
    slug: "nina-and-carlos",
    title: "Nina & Carlos",
    category: "Coastal Wedding",
    year: "2025",
    location: "Azores, Portugal",
    description:
      "A windswept ceremony on the edge of the Atlantic. Nina and Carlos celebrated surrounded by black volcanic rock, turquoise water, and the roar of the ocean — a wedding as untamed and beautiful as their love.",
    featuredSrc: "/images/IMG_6384.JPG.jpeg",
    photos: getProjectPhotos("", FALLBACK_IMGS, [
      "Ceremony arch with driftwood",
      "Bride and bridesmaids on the cliff",
      "Groom's reaction at first look",
      "Bouquet of sea lavender",
      "Couple portrait on the rocks",
      "Vows by the ocean",
      "Wave crashing behind the couple",
      "Ring on the volcanic stone",
      "Reception on the terrace",
      "Family dinner with ocean view",
      "First dance under fairy lights",
      "Couple walking the shoreline",
      "Aerial of the ceremony site",
      "Sunset silhouette portrait",
      "The wedding party at the cliff edge",
      "Toasting with local wine",
      "Candid reception moment",
      "Bride's shoe on the black sand",
      "Releasing lanterns at night",
      "Couple silhouette under the stars",
    ]),
  },
  {
    slug: "aisha-and-khalid",
    title: "Aisha & Khalid",
    category: "Desert Ceremony",
    year: "2024",
    location: "AlUla, Saudi Arabia",
    description:
      "Vows exchanged beneath ancient sandstone cliffs at sunset. Aisha and Khalid's ceremony was held in one of the world's most breathtaking landscapes — a setting as timeless and enduring as their commitment.",
    featuredSrc: "/images/aisha-and-khalid/IMG_6774.JPG.jpeg",
    photos: getProjectPhotos("aisha-and-khalid", [
      "IMG_6774.JPG.jpeg", "IMG_6812.JPG.jpeg", "IMG_6825.JPG.jpeg", "IMG_6833.JPG.jpeg", "IMG_6843.JPG.jpeg", "IMG_6852.JPG.jpeg", "IMG_6877.JPG.jpeg", "IMG_6885.JPG.jpeg"
    ], [
      "Sunrise over the canyon",
      "Aisha in her embroidered gown",
      "Khalid's kandura detail",
      "Rose and incense ceremony preparation",
      "Walking through the canyon",
      "Ceremony under the rock arch",
      "Traditional readings",
      "Exchange of rings in the golden light",
      "First kiss in the canyon",
      "Couple portrait against the dunes",
      "Camel train in the background",
      "Aerial of the ceremony site",
      "Reception under the stars",
      "Traditional oud and tabla performance",
      "Date and rosewater centerpiece detail",
      "Family portrait at dusk",
      "First dance under the open sky",
      "Firework display",
      "Candid guest moments",
      "Final portrait at moonrise",
    ]),
  },
  {
    slug: "sofia-and-luca",
    title: "Sofia & Luca",
    category: "Villa Reception",
    year: "2024",
    location: "Tuscany, Italy",
    description:
      "A long summer lunch under the pergola of a centuries-old Tuscan villa. Sofia and Luca's wedding was warm, unhurried, and full of family — the kind of day that lingers in the memory like the taste of good wine.",
    featuredSrc: "/images/IMG_6159.JPG.jpeg",
    photos: getProjectPhotos("", FALLBACK_IMGS, [
      "Villa gates at sunrise",
      "Sofia at the vanity in soft light",
      "Luca with his father before the ceremony",
      "Flower-wreath headpiece detail",
      "Ceremony in the chapel",
      "Rice throwing exit",
      "Couple walking through the vineyard",
      "Portrait in the olive grove",
      "Aperitivo hour on the terrace",
      "Long table luncheon",
      "Children playing in the garden",
      "Handmade pasta centerpiece detail",
      "First dance under the fairy lights",
      "Tiramisu wedding cake",
      "Grandparents dancing",
      "Golden hour portraits in the vineyard",
      "Aerial of the villa grounds",
      "Night reception under the pergola",
      "Fireworks over the valley",
      "Last dance at midnight",
    ]),
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];
