"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SelectedWorks.module.css";

import { PROJECTS } from "@/lib/portfolioData";

// Show first 4 projects as featured works
const WORKS = PROJECTS.slice(0, 4).map((p, i) => ({
  id: i + 1,
  src: p.featuredSrc,
  title: p.title,
  category: p.category,
  year: p.year,
  description: p.description,
  slug: p.slug,
  size: i === 0 || i === 3 ? "large" : "small",
}));

const CATEGORIES = ["All", ...Array.from(new Set(WORKS.map((w) => w.category)))];

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = WORKS.filter(
    (w) => activeFilter === "All" || w.category === activeFilter
  );

  // Intersection Observer for scroll-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.12 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section id="work" className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionLabel}>Selected Works</span>
          <h2 className={styles.sectionTitle}>
            Love Stories<br />Through the Lens
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.sectionDesc}>
            Each frame is a chapter of a love story — told through stolen glances,
            happy tears, and the quiet moments only a camera notices.
          </p>
          <span className={styles.count}>
            {filtered.length} <span>/ {WORKS.length} Works</span>
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
        <div className={styles.filterLine} />
      </div>

      {/* Gallery Grid */}
      <div className={styles.grid}>
        {filtered.map((work, i) => (
          <div
            key={work.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`${styles.item} ${work.size === "large" ? styles.itemLarge : styles.itemSmall} ${styles.hidden}`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Image */}
            <div className={styles.imageWrap}>
              <Image
                src={work.src}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
                className={`${styles.img} ${activeIndex === i ? styles.imgZoom : ""}`}
              />
              <div className={`${styles.veil} ${activeIndex === i ? styles.veilActive : ""}`} />
            </div>

            {/* Overlay Text */}
            <div className={`${styles.overlay} ${activeIndex === i ? styles.overlayActive : ""}`}>
              <div className={styles.overlayTop}>
                <span className={styles.cat}>{work.category}</span>
                <span className={styles.year}>{work.year}</span>
              </div>
              <div className={styles.overlayBottom}>
                <h3 className={styles.title}>{work.title}</h3>
                <p className={styles.desc}>{work.description}</p>
                <Link href={`/portfolio/${work.slug}`} className={styles.viewLink}>
                  <span>View Story</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Index number */}
            <span className={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className={styles.cta}>
        <Link href="/booking" className={styles.ctaBtn}>
          Book a Session
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.ctaIcon}>
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className={styles.ctaDivider} />
        <p className={styles.ctaNote}>Available worldwide for weddings, engagements &amp; destination elopements.</p>
      </div>
    </section>
  );
}
