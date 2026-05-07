import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectHero.module.css";
import { Project } from "@/lib/portfolioData";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src={project.featuredSrc}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <Link href="/portfolio" className={styles.backLink}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Weddings
        </Link>
        <span className={styles.heroEyebrow}>{project.category} · {project.location}</span>
        <h1 className={styles.heroTitle}>{project.title}</h1>
        <p className={styles.heroSub}>{project.year} · {project.photos.length} photographs</p>
      </div>
    </header>
  );
}
