import styles from "./AboutApproach.module.css";

const values = [
  {
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
    title: "Documentary Eye",
    text: "I don't direct — I observe. The real moments, the unscripted ones, are always the most beautiful.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Emotional Truth",
    text: "Every image I deliver should make you feel exactly what you felt in that moment — not just remind you of it.",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Global Presence",
    text: "From the Dolomites to the Arabian desert — I travel anywhere the love story takes me.",
  },
  {
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Cinematic Vision",
    text: "Trained in film and fine art photography, I approach every wedding like a visual story with a beginning, middle, and end.",
  },
];

export default function AboutApproach() {
  return (
    <section className={styles.valuesSection}>
      <div className="container">
        <div className={styles.valuesSectionHeader}>
          <span className={styles.eyebrow}>My Approach</span>
          <h2 className="serif">What I believe about photography</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                </svg>
              </div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueText}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
