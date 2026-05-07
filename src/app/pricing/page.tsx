import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPackages from "@/components/pricing/PricingPackages";
import PricingAddOns from "@/components/pricing/PricingAddOns";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Pricing | Mousa Wedding Photography — Investment & Packages",
  description:
    "Explore Mousa's wedding photography packages. Transparent pricing for intimate elopements, full-day coverage, and luxury destination weddings worldwide.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <PricingHero />
        <PricingPackages />
        <PricingAddOns />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
