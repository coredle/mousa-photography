import Image from "next/image";
import Link from "next/link";
import styles from "./AboutOnTheRoad.module.css";

export default function AboutOnTheRoad() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.splitImage}>
        <Image
          src="/images/nature_ethereal_1777416415632.png"
          alt="Mousa capturing a ceremony in the mountains"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.splitText}>
        <span className={styles.eyebrow}>On the Road</span>
        <h2 className="serif">Wherever you say &ldquo;I do&rdquo;, I&apos;ll be there.</h2>
        <p>
          Destination weddings are where I feel most alive as a photographer.
          The travel, the unfamiliar light, the cultural rituals — every
          element layers into images that couldn&apos;t exist anywhere else.
        </p>
        <p>
          Whether it&apos;s a last-minute elopement in Santorini or a
          meticulously planned ceremony in the heart of Tuscany, I arrive
          early, stay present, and leave nothing to chance.
        </p>
        <Link href="/booking" className={styles.splitCta}>
          Book Your Date
        </Link>
      </div>
    </section>
  );
}
