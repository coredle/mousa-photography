"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`${styles.contactInner} container`}>
        {/* Left */}
        <div className={styles.contactLeft}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={`${styles.contactHeading} serif`}>
            Your date is waiting.
          </h2>
          <p className={styles.contactSub}>
            Dates fill fast — especially for peak seasons and destination
            weddings. Send a note and I&apos;ll personally reply within 24 hours.
          </p>
          <div className={styles.contactMeta}>
            <div className={styles.contactMetaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>hello@mousaphotography.com</span>
            </div>
            <div className={styles.contactMetaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Available worldwide</span>
            </div>
          </div>
          <Link href="/booking" className={styles.contactBookBtn}>
            Book Your Date
          </Link>
        </div>

        {/* Right — quick enquiry form */}
        <div className={styles.contactRight}>
          {submitted ? (
            <div className={styles.thankYou}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="serif">Message received.</h3>
              <p>I&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3 className={`${styles.formHeading} serif`}>Quick enquiry</h3>
              <div className={styles.inputGroup}>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Bride &amp; Groom names"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Wedding Details</label>
                <textarea
                  rows={4}
                  placeholder="Date, venue, and a little about your vision…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Enquiry
              </button>
              <p className={styles.formNote}>
                Replies within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
