import { Project } from "@/lib/portfolioData";
import styles from "./ProjectDescription.module.css";

export default function ProjectDescription({ project }: { project: Project }) {
  return (
    <div className={styles.descSection}>
      <p className={styles.desc}>{project.description}</p>
    </div>
  );
}
