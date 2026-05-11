import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>

        {/* Top row */}
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>MOUSA</Link>
          <p className={styles.tagline}>Wedding Stories Told Through Light</p>
        </div>

        {/* Middle row — nav columns */}
        <div className={styles.nav}>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Explore</span>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Connect</span>
            <Link href="/booking">Book Your Date</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className={styles.navCol}>
            <span className={styles.navHeading}>Follow</span>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Mousa Wedding Photography. All rights reserved.
          </p>
          <p className={styles.avail}>✦ Currently booking 2026 &amp; 2027</p>
        </div>

      </div>
    </footer>
  );
}
