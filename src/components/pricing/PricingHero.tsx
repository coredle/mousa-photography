import Image from "next/image";
import styles from "./PricingHero.module.css";

export default function PricingHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/ocean_waves_1777418691359.png"
          alt="Pricing — Mousa Wedding Photography"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>Investment</span>
        <h1 className={`${styles.heroTitle} serif`}>Choose Your Package</h1>
        <p className={styles.heroSub}>
          Transparent, honest pricing. Every package is a complete experience &mdash;
          no hidden costs, no compromises.
        </p>
        <div className={styles.availBadge}>
          ✦ Currently booking 2026 &amp; 2027
        </div>
      </div>
    </header>
  );
}
