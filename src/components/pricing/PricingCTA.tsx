import Link from "next/link";
import styles from "./PricingCTA.module.css";

export default function PricingCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBox}>
          <span className={styles.eyebrowDark}>Ready?</span>
          <h2 className="serif">Let&apos;s make it yours.</h2>
          <p>
            Not sure which package is right for you? Get in touch and we&apos;ll
            figure it out together.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/booking" className={styles.ctaPrimary}>
              Book Your Date
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              Meet Mousa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
