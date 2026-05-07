import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Mousa captured our day in a way that still makes us cry every time we look at the album. Not a single forced moment — just pure, honest truth.",
    couple: "Sarah & James",
    location: "Santorini, Greece",
    category: "Garden Ceremony",
  },
  {
    quote:
      "We flew Mousa out to Beirut and it was the best decision we made for our wedding. Every photo looks like a film still. Absolutely breathtaking work.",
    couple: "Layla & Omar",
    location: "Beirut, Lebanon",
    category: "Luxury Ballroom",
  },
  {
    quote:
      "We eloped in the Dolomites with almost no planning. Mousa somehow knew exactly where to be and when. The results are otherworldly.",
    couple: "Emma & Noah",
    location: "Dolomites, Italy",
    category: "Destination Elopement",
  },
  {
    quote:
      "From the first enquiry to the final delivery, Mousa was professional, warm, and completely unobtrusive on the day. The photos speak for themselves.",
    couple: "Nina & Carlos",
    location: "Azores, Portugal",
    category: "Coastal Wedding",
  },
  {
    quote:
      "Our ceremony was at sunset in the AlUla canyon. Mousa treated it like a sacred scene — the light, the silence, the emotion. All of it is in those images.",
    couple: "Aisha & Khalid",
    location: "AlUla, Saudi Arabia",
    category: "Desert Ceremony",
  },
  {
    quote:
      "Every photographer we spoke to wanted to pose us. Mousa just said 'walk together and forget I'm here.' That was all we needed to hear.",
    couple: "Sofia & Luca",
    location: "Tuscany, Italy",
    category: "Villa Reception",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">

        <div className={styles.header}>
          <span className={styles.eyebrow}>What Couples Say</span>
          <h2 className="serif">Their words.</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.meta}>
                <span className={styles.couple}>{t.couple}</span>
                <span className={styles.location}>{t.location} · {t.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
