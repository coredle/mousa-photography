import Link from "next/link";
import styles from "./PricingPackages.module.css";

const packages = [
  {
    name: "Essentials",
    tagline: "For the intimate celebration",
    price: "$2,400",
    duration: "6 Hours Coverage",
    highlight: false,
    features: [
      "6 hours of coverage",
      "1 photographer",
      "350+ edited images",
      "Private online gallery",
      "High-resolution downloads",
      "25-day delivery",
    ],
    note: null,
  },
  {
    name: "Signature",
    tagline: "The most popular choice",
    price: "$3,900",
    duration: "Full Day Coverage",
    highlight: true,
    features: [
      "10 hours of coverage",
      "1 photographer",
      "600+ edited images",
      "Private online gallery",
      "High-resolution downloads",
      "Engagement session (2 hrs)",
      "25-day delivery",
      "1 printed album (30 pages)",
    ],
    note: "Most couples choose this",
  },
  {
    name: "Destination",
    tagline: "For the wedding without borders",
    price: "From $5,500",
    duration: "2 Days Coverage",
    highlight: false,
    features: [
      "2 full days of coverage",
      "2 photographers",
      "1,000+ edited images",
      "Private online gallery",
      "High-resolution downloads",
      "Engagement / pre-wedding session",
      "21-day delivery",
      "2 printed albums (40 pages each)",
      "Travel & accommodation included",
    ],
    note: null,
  },
];

export default function PricingPackages() {
  return (
    <section className={styles.packagesSection}>
      <div className="container">
        <div className={styles.packagesGrid}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`${styles.card} ${pkg.highlight ? styles.cardHighlight : ""}`}
            >
              {pkg.note && (
                <div className={styles.popularBadge}>{pkg.note}</div>
              )}
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>{pkg.duration}</span>
                <h2 className={`${styles.cardName} serif`}>{pkg.name}</h2>
                <p className={styles.cardTagline}>{pkg.tagline}</p>
              </div>
              <div className={styles.cardPrice}>
                <span className={styles.priceAmount}>{pkg.price}</span>
              </div>
              <ul className={styles.featureList}>
                {pkg.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.checkIcon}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className={`${styles.cardCta} ${pkg.highlight ? styles.cardCtaHighlight : ""}`}
              >
                Book This Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
