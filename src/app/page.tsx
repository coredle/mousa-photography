import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import PressBar from "@/components/PressBar";
import SelectedWorks from "@/components/SelectedWorks";
import AboutStrip from "@/components/AboutStrip";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HomeHero />
      <PressBar />
      <SelectedWorks />
      <AboutStrip />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}

