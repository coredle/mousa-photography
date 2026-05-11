"use client";

import { useState, useEffect, useRef } from "react";
import SafeImage from "./SafeImage";
import Link from "next/link";
import styles from "./SelectedWorks.module.css";

import { PROJECTS } from "@/lib/portfolioData";

const WORKS = PROJECTS.slice(0, 4).map((p, i) => ({
  id: i + 1,
  src: p.featuredSrc,
  title: p.title,
  category: p.category,
  year: p.year,
  location: p.location,
  description: p.description,
  slug: p.slug,
  size: i === 0 || i === 3 ? "large" : "small",
}));

const CATEGORIES = ["All", ...Array.from(new Set(WORKS.map((w) => w.category)))];

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const filtered = WORKS.filter(
    (w) => activeFilter === "All" || w.category === activeFilter
  );

  // Scroll-in reveal for grid items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [filtered]);

  // Scroll-in reveal for header
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add(styles.headerVisible);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close overlay when tapping outside any card
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const clickedCard = itemRefs.current.some((ref) => ref?.contains(target));
      if (!clickedCard) setHoveredIndex(null);
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  // Handle card tap (mobile) — first tap reveals overlay, tap again dismisses
  const handleCardClick = (e: React.MouseEvent, i: number) => {
    // If overlay not yet showing, reveal it and stop event so the
    // outside-click handler doesn't immediately close it
    if (hoveredIndex !== i) {
      e.stopPropagation();
      setHoveredIndex(i);
    }
    // If overlay already showing, let the click fall through
    // (e.g. tapping the card body again dismisses via outside handler)
  };

  return (
    <section id="work" className={styles.section}>

      {/* ── Section Header ── */}
      <div ref={headerRef} className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionLabel}>Selected Works</span>
          <h2 className={`${styles.sectionTitle} serif`}>
            Love Stories<br />Through the Lens
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.sectionDesc}>
            Each frame is a chapter of a love story — told through stolen glances,
            happy tears, and the quiet moments only a camera notices.
          </p>
          <div className={styles.headerMeta}>
            <span className={styles.count}>
              {String(filtered.length).padStart(2, "0")}
              <span> / {String(WORKS.length).padStart(2, "0")} Works</span>
            </span>
            <Link href="/portfolio" className={styles.viewAll}>
              View all stories
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
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
        <span className={styles.filterCount}>{filtered.length} shown</span>
      </div>

      {/* ── Gallery Grid ── */}
      <div className={styles.grid}>
        {filtered.map((work, i) => (
          <div
            key={work.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`${styles.item} ${work.size === "large" ? styles.itemLarge : styles.itemSmall} ${styles.hidden}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => handleCardClick(e, i)}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Image */}
            <div className={styles.imageWrap}>
              <SafeImage
                src={work.src}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                style={{ objectFit: "cover" }}
                className={`${styles.img} ${hoveredIndex === i ? styles.imgZoom : ""}`}
              />
            </div>

            {/* Gradient veil */}
            <div className={`${styles.veil} ${hoveredIndex === i ? styles.veilActive : ""}`} />

            {/* Hover overlay — must come BEFORE strip so ~ sibling selector works */}
            <div className={`${styles.overlay} ${hoveredIndex === i ? styles.overlayActive : ""}`}>
              <div className={styles.overlayTop}>
                <span className={styles.cat}>{work.category}</span>
                <span className={styles.year}>{work.year}</span>
              </div>
              <div className={styles.overlayBottom}>
                <h3 className={`${styles.title} serif`}>{work.title}</h3>
                <p className={styles.desc}>{work.description}</p>
                <Link href={`/portfolio/${work.slug}`} className={styles.viewLink}>
                  <span>View Story</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Always-visible top strip for mobile — hidden on desktop, fades with overlay */}
            <div className={styles.stripTop}>
              <span className={styles.stripCat}>{work.category}</span>
            </div>

            {/* Always-visible bottom strip — after overlay so CSS ~ selector can hide it */}
            <div className={styles.strip}>
              <span className={styles.stripNum}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.stripCenter}>
                <span className={styles.stripTitle}>{work.title}</span>
                <span className={styles.stripLoc}>{work.location}</span>
              </div>
              <span className={`${styles.stripCat} ${styles.desktopOnly}`}>{work.category}</span>
            </div>

            {/* Ghost index watermark */}
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>

      {/* ── Footer CTA ── */}
      <div className={styles.cta}>
        <div className={styles.ctaLeft}>
          <p className={styles.ctaTagline}>Ready to tell your story?</p>
          <p className={styles.ctaNote}>
            Available worldwide for weddings, engagements &amp; destination elopements.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/portfolio" className={styles.ctaBtnSecondary}>
            Full Portfolio
          </Link>
          <Link href="/booking" className={styles.ctaBtn}>
            Book a Session
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.ctaIcon}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
