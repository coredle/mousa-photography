import styles from "./AboutTimeline.module.css";

const milestones = [
  { year: "2013", label: "First wedding shot in Beirut, Lebanon" },
  { year: "2016", label: "Expanded to destination weddings across Europe" },
  { year: "2019", label: "Featured in Vogue Weddings Middle East" },
  { year: "2021", label: "100th wedding captured — AlUla, Saudi Arabia" },
  { year: "2024", label: "Named Top 10 Wedding Photographers by Junebug" },
  { year: "2026", label: "200+ weddings across 18 countries & counting" },
];

export default function AboutTimeline() {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <div className={styles.timelineHeader}>
          <span className={styles.eyebrowDark}>The Journey</span>
          <h2 className="serif">A decade of milestones</h2>
        </div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{m.year}</div>
              <div className={styles.timelineDot} />
              <div className={styles.timelineLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
