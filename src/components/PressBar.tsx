import styles from "./PressBar.module.css";

export default function PressBar() {
  const publications = [
    "Vogue Weddings",
    "Junebug Weddings",
    "Style Me Pretty",
    "The Knot",
    "Martha Stewart Weddings",
  ];

  return (
    <section className={styles.pressBar}>
      <div className={`${styles.pressInner} container`}>
        <div className={styles.pressLabelWrapper}>
          <span className={styles.pressLabel}>As featured in</span>
        </div>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* We duplicate the array 4 times for a seamless infinite scroll on wide screens */}
            {[...Array(4)].map((_, i) => (
              publications.map((pub, index) => (
                <span key={`${i}-${index}`} className={styles.pressLogo}>
                  {pub}
                </span>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
