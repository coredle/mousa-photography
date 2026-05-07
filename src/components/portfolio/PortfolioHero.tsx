import Image from "next/image";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/portfolioData";
import styles from "./PortfolioHero.module.css";

export default function PortfolioHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/landscape_cinematic_1777395024853.png"
          alt="Portfolio — Wedding Photography"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>2024 – 2026 Wedding Archive</span>
        <h1 className={styles.heroTitle}>Portfolio</h1>
        <p className={styles.heroSub}>
          {PROJECTS.length} weddings across {PROJECT_CATEGORIES.length - 1} settings
        </p>
      </div>
      <div className={styles.heroScroll}><span /></div>
    </header>
  );
}
