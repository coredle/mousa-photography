import styles from "./PricingAddOns.module.css";

const addOns = [
  { label: "Second Shooter", price: "+ $600" },
  { label: "Engagement Session (standalone)", price: "$850" },
  { label: "Printed Album Upgrade (60 pages)", price: "+ $400" },
  { label: "Rush Delivery (10 days)", price: "+ $350" },
  { label: "Rehearsal Dinner Coverage", price: "+ $700" },
  { label: "Bridal Boudoir Session", price: "$950" },
];

export default function PricingAddOns() {
  return (
    <section className={styles.addOnsSection}>
      <div className="container">
        <div className={styles.addOnsHeader}>
          <span className={styles.eyebrowDark}>Enhance Your Day</span>
          <h2 className="serif">À la carte add-ons</h2>
        </div>
        <div className={styles.addOnsGrid}>
          {addOns.map((a, i) => (
            <div key={i} className={styles.addOnItem}>
              <span className={styles.addOnLabel}>{a.label}</span>
              <span className={styles.addOnPrice}>{a.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
