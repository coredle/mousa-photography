import SafeImage from "./SafeImage";
import Link from "next/link";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      {/* Full-bleed background image */}
      <div className={styles.heroImage}>
        <SafeImage
          src="/images/IMG_6425.JPG.jpeg"
          alt="Mousa Wedding Photography — cinematic couple portrait"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className={styles.heroGradientBottom} />
      <div className={styles.heroGradientTop} />

      {/* Content */}
      <div className={styles.heroContent}>
        {/* Availability pill */}
        <div className={styles.heroPill}>
          <span className={styles.heroPillDot} />
          Currently booking 2026 &amp; 2027
        </div>

        <h1 className={styles.heroTitle}>
          Your wedding day,<br />
          <em>told beautifully.</em>
        </h1>

        <p className={styles.heroSub}>
          Luxury wedding photography across 18 countries —
          cinematic, honest, and made to last a lifetime.
        </p>

        {/* CTAs */}
        <div className={styles.heroCtas}>
          <Link href="/booking" className={styles.heroBtnPrimary}>
            Reserve Your Date
          </Link>
          <Link href="/portfolio" className={styles.heroBtnSecondary}>
            See the Work
          </Link>
        </div>


      </div>

      {/* Scroll cue */}
      <div className={styles.heroScroll}>
        <span className={styles.heroScrollLine} />
        <span className={styles.heroScrollText}>Scroll</span>
      </div>
    </section>
  );
}
