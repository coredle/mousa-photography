"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface NavbarProps {
  /** Set to true on pages where the hero background is NOT a dark photo (e.g. Pricing) */
  forceDark?: boolean;
}

const NAV_LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/booking", label: "Book Your Date" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar({ forceDark = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isDark = scrolled || forceDark || menuOpen;

  return (
    <>
      <nav className={`${styles.nav} ${isDark ? styles.scrolled : ""}`}>
        <div className={`${styles.navInner} container`}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>MOUSA</Link>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href.startsWith("/#")
                ? false
                : pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger button — mobile only */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

        </div>
      </nav>

      {/* Full-screen mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Background image tint */}
        <div className={styles.drawerBg} />

        <nav className={styles.drawerNav}>
          {NAV_LINKS.map(({ href, label }, i) => {
            const isActive = href.startsWith("/#")
              ? false
              : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                style={{ transitionDelay: menuOpen ? `${i * 0.07 + 0.1}s` : "0s" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.drawerLinkNum}>0{i + 1}</span>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom contact info */}
        <div className={styles.drawerFooter}>
          <a href="mailto:hello@mousaphotography.com" className={styles.drawerEmail}>
            hello@mousaphotography.com
          </a>
          <div className={styles.drawerSocials}>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
    </>
  );
}
