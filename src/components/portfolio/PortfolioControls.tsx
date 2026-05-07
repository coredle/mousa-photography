import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/portfolioData";
import styles from "./PortfolioControls.module.css";

interface PortfolioControlsProps {
  filter: string;
  setFilter: (val: string) => void;
}

export default function PortfolioControls({ filter, setFilter }: PortfolioControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.filters}>
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
            {cat !== "All" && (
              <span className={styles.filterCount}>
                {PROJECTS.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
