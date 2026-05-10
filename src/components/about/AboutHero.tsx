import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/portrait_dramatic_1777395593882.png"
          alt="Mousa — Wedding Photographer"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>The Photographer</span>
        <h1 className={`${styles.heroTitle} serif`}>Behind the Lens</h1>
        <p className={styles.heroSub}>
          12 years. 18 countries. Every frame a love story told in light.
        </p>
        <div className={styles.availBadge}>✦ Based in the Middle East — Available Worldwide</div>
      </div>
    </header>
  );
}
