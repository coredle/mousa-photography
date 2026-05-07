"use client";

import React, { useState } from "react";
import styles from "./BookingForm.module.css";

const conditions = [
  {
    title: "Timeline",
    text: "Delivery within 25-30 days after the event.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Booking Policy",
    text: "Deposits are not refundable.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Artistic Choice",
    text: "Photos from the session are carefully selected for publication in Instagram.",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
  },
  {
    title: "Deliverables",
    text: "After receiving the photos, 25 pictures are selected for the album and one picture for the tableau.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Finalization",
    text: "Final payment is due on the event day.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    eventPlace: "",
    eventDate: "",
    package: "",
    price: "",
    deposit: "",
    remainder: "",
    bridalPhones: "",
    groomPhones: "",
    venue: "",
    dress: "",
    suite: "",
    makeUp: "",
    hairstyles: "",
    bouquet: "",
    videographer: "",
    mediaCoverage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data Submitted:", formData);
    alert("Your wedding booking request has been sent. We will be in touch soon!");
  };

  return (
    <div className={styles.container}>
      <form className={styles.glassCard} onSubmit={handleSubmit}>

        {/* Group: The Couple */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Couple</h2>
          <p className={styles.sectionSub}>Bride, Groom & Contact Information</p>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Bride Name</label>
            <input type="text" name="brideName" value={formData.brideName} onChange={handleChange} className={styles.input} placeholder="Full Name" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Groom Name</label>
            <input type="text" name="groomName" value={formData.groomName} onChange={handleChange} className={styles.input} placeholder="Full Name" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Bridal Phone(s)</label>
            <input type="tel" name="bridalPhones" value={formData.bridalPhones} onChange={handleChange} className={styles.input} placeholder="+XXX XX XXX XXXX" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Groom Phone(s)</label>
            <input type="tel" name="groomPhones" value={formData.groomPhones} onChange={handleChange} className={styles.input} placeholder="+XXX XX XXX XXXX" required />
          </div>
        </div>

        {/* Group: The Celebration */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Wedding Day</h2>
          <p className={styles.sectionSub}>Ceremony Date & Venue Details</p>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Event Date</label>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className={styles.input} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Event Place / City</label>
            <input type="text" name="eventPlace" value={formData.eventPlace} onChange={handleChange} className={styles.input} placeholder="e.g. Cairo, Egypt" required />
          </div>
          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Venue Name</label>
            <input type="text" name="venue" value={formData.venue} onChange={handleChange} className={styles.input} placeholder="Hotel, Resort or Estate Name" required />
          </div>
        </div>

        {/* Group: Details & Vendors */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Vision</h2>
          <p className={styles.sectionSub}>Vendors, Style & Aesthetic Partners</p>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Dress Designer</label>
            <input type="text" name="dress" value={formData.dress} onChange={handleChange} className={styles.input} placeholder="Designer Name" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Suite / Tuxedo</label>
            <input type="text" name="suite" value={formData.suite} onChange={handleChange} className={styles.input} placeholder="Brand or Tailor" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Make-Up Artist</label>
            <input type="text" name="makeUp" value={formData.makeUp} onChange={handleChange} className={styles.input} placeholder="Artist Name" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Hairstyles</label>
            <input type="text" name="hairstyles" value={formData.hairstyles} onChange={handleChange} className={styles.input} placeholder="Stylist Name" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Bouquet / Florals</label>
            <input type="text" name="bouquet" value={formData.bouquet} onChange={handleChange} className={styles.input} placeholder="Florist Name" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Videographer</label>
            <input type="text" name="videographer" value={formData.videographer} onChange={handleChange} className={styles.input} placeholder="Company or Individual" />
          </div>
          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Media Coverage / Requests</label>
            <input type="text" name="mediaCoverage" value={formData.mediaCoverage} onChange={handleChange} className={styles.input} placeholder="Specific shots or social media coverage needs" />
          </div>
        </div>

        {/* Conditions Section */}
        <div className={styles.conditionsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Agreement</h2>
            <p className={styles.sectionSub}>Terms & Conditions</p>
          </div>
          <div className={styles.conditionsGrid}>
            {conditions.map((item, idx) => (
              <div key={idx} className={styles.conditionItem}>
                <div className={styles.conditionIcon}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className={styles.conditionText}>
                  <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.3rem', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{item.title}</strong>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.submitWrap}>
          <button type="submit" className={styles.submitBtn}>
            Submit Booking Request
          </button>
          <p className={styles.footerNote}>By submitting, you agree to the terms listed above. A deposit secures your date.</p>
        </div>

      </form>
    </div>
  );
}
