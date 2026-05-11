import SafeImage from "../SafeImage";
import { Project, ProjectPhoto } from "@/lib/portfolioData";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  project: Project;
  onOpenLightbox: (photo: ProjectPhoto, idx: number) => void;
}

export default function ProjectGallery({ project, onOpenLightbox }: ProjectGalleryProps) {
  return (
    <div className={styles.gallery}>
      {project.photos.map((photo, i) => (
        <div
          key={photo.id}
          className={`${styles.galleryItem} ${photo.orientation === "landscape" ? styles.galleryLandscape : ""}`}
          onClick={() => onOpenLightbox(photo, i)}
        >
          <SafeImage
            src={photo.src}
            alt={photo.caption}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            className={styles.galleryImg}
          />
          <div className={styles.galleryOverlay}>
            <span className={styles.galleryNum}>{String(i + 1).padStart(2, "0")}</span>
            <p className={styles.galleryCaption}>{photo.caption}</p>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
