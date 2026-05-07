import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";
import styles from "./booking.module.css";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <BookingHero />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
