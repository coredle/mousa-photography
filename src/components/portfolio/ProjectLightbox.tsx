"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { ProjectPhoto } from "@/lib/portfolioData";
import styles from "@/app/portfolio/[slug]/project.module.css";

interface ProjectLightboxProps {
  photo: ProjectPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectLightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: ProjectLightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      {/* Close */}
      <button className={styles.lbClose} onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className={`${styles.lbArrow} ${styles.lbPrev}`}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div className={styles.lbImageWrap} onClick={(e) => e.stopPropagation()}>
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
          priority
        />
        <div className={styles.lbMeta}>
          <p className={styles.lbCaption}>{photo.caption}</p>
          <span className={styles.lbCounter}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Next */}
      <button
        className={`${styles.lbArrow} ${styles.lbNext}`}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
