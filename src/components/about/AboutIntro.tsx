import Image from "next/image";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.introSection}>
      <div className={`${styles.introGrid} container`}>
        <div className={styles.portraitWrap}>
          <Image
            src="/images/portrait_dramatic_1777395593882.png"
            alt="Mousa — Wedding Photographer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.portraitBadge}>
            <span className={styles.badgeNumber}>200+</span>
            <span className={styles.badgeLabel}>Weddings</span>
          </div>
        </div>

        <div className={styles.introText}>
          <span className={styles.eyebrowDark}>My Story</span>
          <h2 className={`${styles.introHeading} serif`}>
            I fell in love with love stories.
          </h2>
          <p>
            My name is Mousa. I picked up a camera at 19 in Beirut and never
            put it down. What started as a fascination with light became a
            lifelong devotion to capturing the most important day of people's
            lives — with honesty, artistry, and an almost obsessive attention
            to detail.
          </p>
          <p>
            Over twelve years and more than two hundred weddings, I've
            photographed intimate elopements in Italian mountain meadows and
            grand celebrations in golden-lit Saudi canyons. Every couple,
            every culture, every ceremony has taught me something new about
            what it means to witness love.
          </p>
          <p>
            My approach is quiet, unobtrusive, and cinematic. I believe the
            camera should disappear so that what remains is pure, undiluted
            truth. No forced smiles. No awkward poses. Just your day, as it
            actually happened.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>Weddings Captured</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>12+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>18</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
