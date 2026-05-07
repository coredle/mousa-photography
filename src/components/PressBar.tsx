import styles from "./PressBar.module.css";

export default function PressBar() {
  return (
    <section className={styles.pressBar}>
      <div className={`${styles.pressInner} container`}>
        <span className={styles.pressLabel}>As featured in</span>
        <div className={styles.pressLogos}>
          {["Vogue Weddings", "Junebug Weddings", "Style Me Pretty", "The Knot", "Martha Stewart Weddings"].map((pub) => (
            <span key={pub} className={styles.pressLogo}>{pub}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
