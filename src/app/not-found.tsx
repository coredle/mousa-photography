import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Error 404</span>
          <h1 className={`${styles.title} serif`}>Page Not Found</h1>
          <p className={styles.sub}>
            The story you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className={styles.homeBtn}>
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
