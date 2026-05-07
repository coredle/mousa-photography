import Link from "next/link";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBox}>
          <span className={styles.eyebrow}>Ready to begin?</span>
          <h2 className="serif">Your story deserves to be told beautifully.</h2>
          <p>Currently booking 2026 &amp; 2027 weddings worldwide.</p>
          <div className={styles.ctaBtns}>
            <Link href="/booking" className={styles.ctaBtnPrimary}>Reserve Your Date</Link>
            <Link href="/portfolio" className={styles.ctaBtnSecondary}>View the Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
