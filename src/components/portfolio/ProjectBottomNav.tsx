import Link from "next/link";
import styles from "./ProjectBottomNav.module.css";

export default function ProjectBottomNav() {
  return (
    <div className={styles.bottomNav}>
      <Link href="/portfolio" className={styles.bottomBack}>
        ← Back to Portfolio
      </Link>
      <Link href="/booking" className={styles.bookBtn}>
        Book Your Wedding
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
