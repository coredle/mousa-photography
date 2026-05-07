import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutApproach from "@/components/about/AboutApproach";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutOnTheRoad from "@/components/about/AboutOnTheRoad";
import AboutCTA from "@/components/about/AboutCTA";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Mousa | Wedding Photographer — The Story Behind the Lens",
  description:
    "Meet Mousa, a luxury wedding photographer with 12+ years capturing love stories across 18 countries. Discover his philosophy, approach, and the artistry behind every frame.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <AboutHero />
        <AboutIntro />
        <AboutApproach />
        <AboutTimeline />
        <AboutOnTheRoad />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
