import styles from "./PricingFAQ.module.css";

const faqs = [
  {
    q: "Do you travel internationally?",
    a: "Yes. I've photographed weddings in 18 countries. Destination packages include all travel and accommodation costs — no hidden fees.",
  },
  {
    q: "How do we receive our photos?",
    a: "All images are delivered via a private, password-protected online gallery where you can download, share, and order prints directly.",
  },
  {
    q: "What is your booking process?",
    a: "A signed contract and 30% deposit secures your date. The remainder is due on your wedding day.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. I offer flexible payment plans for all packages. Reach out and we can work out a schedule that suits you.",
  },
  {
    q: "Can we customize a package?",
    a: "Absolutely. Every wedding is different. Contact me and we'll build a bespoke package around your specific day.",
  },
];

export default function PricingFAQ() {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqHeader}>
          <span className={styles.eyebrow}>Questions</span>
          <h2 className="serif">Before you reach out</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{item.q}</h3>
              <p className={styles.faqA}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
