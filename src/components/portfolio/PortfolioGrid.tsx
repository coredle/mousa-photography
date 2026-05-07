import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioGrid.module.css";
import { Project } from "@/lib/portfolioData";

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className={styles.projectGrid}>
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/portfolio/${project.slug}`}
          className={`${styles.projectCard} ${i % 3 === 0 ? styles.projectCardWide : ""}`}
        >
          <div className={styles.projectImg}>
            <Image
              src={project.featuredSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className={styles.img}
            />
          </div>
          <div className={styles.projectOverlay}>
            <span className={styles.cardCat}>{project.category}</span>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardLoc}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {project.location} · {project.year}
            </p>
            <span className={styles.cardViewBtn}>
              View Gallery
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <span className={styles.photoCount}>{project.photos.length} photos</span>
        </Link>
      ))}
    </div>
  );
}
