import Image from "next/image";
import styles from "./BookingHero.module.css";

export default function BookingHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/ocean_waves_1777418691359.png"
          alt="Book your wedding — Mousa Photography"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>Reserve Your Date</span>
        <h1 className={styles.heroTitle}>Book Your Wedding</h1>
        <p className={styles.heroSub}>Every love story deserves its perfect frame</p>
      </div>
    </header>
  );
}
