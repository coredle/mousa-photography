"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioControls from "@/components/portfolio/PortfolioControls";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { PROJECTS } from "@/lib/portfolioData";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <>
      <Navbar />
      <PortfolioHero />
      <main className={styles.main}>
        <PortfolioControls filter={filter} setFilter={setFilter} />
        <PortfolioGrid projects={filtered} />
      </main>
      <Footer />
    </>
  );
}
