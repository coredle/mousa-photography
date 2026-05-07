import Image from "next/image";
import Link from "next/link";
import styles from "./AboutStrip.module.css";

export default function AboutStrip() {
  return (
    <section className={styles.aboutStrip}>
      <div className={`${styles.aboutStripInner} container`}>
        <div className={styles.aboutStripImage}>
          <Image
            src="/images/portrait_dramatic_1777395593882.png"
            alt="Mousa — Wedding Photographer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.aboutStripText}>
          <span className={styles.eyebrow}>The Photographer</span>
          <h2 className={`${styles.aboutStripHeading} serif`}>
            Every love story deserves to be seen.
          </h2>
          <p>
            I&apos;m Mousa — a documentary wedding photographer with 12 years and
            200+ weddings across five continents. I don&apos;t direct. I observe.
            My camera disappears so your day unfolds exactly as it should.
          </p>
          <Link href="/about" className={styles.aboutStripLink}>
            My Story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
