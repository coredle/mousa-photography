import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrap}>
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
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>The Photographer</span>
        <h1 className={styles.heroTitle}>Behind the Lens</h1>
      </div>
    </section>
  );
}
