"use client";

import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={`agrani-header${scrolled ? " scrolled" : ""}`}>

      <span className="header-glint" aria-hidden="true" />

      {/* Logo */}
      <a href="/" className="header-logo" aria-label="Agrani Home">
        <div className="logo-mark">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1" opacity=".3" />
            <circle cx="14" cy="14" r="7.5" stroke="currentColor" strokeWidth="1" opacity=".55" />
            <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1" />
            <circle cx="14" cy="14" r="1.5" fill="currentColor" />
            <line x1="14" y1="2" x2="14" y2="6" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" opacity=".4" />
            <line x1="14" y1="22" x2="14" y2="26" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" opacity=".4" />
            <line x1="2" y1="14" x2="6" y2="14" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" opacity=".4" />
            <line x1="22" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" opacity=".4" />
          </svg>
        </div>
        <span className="logo-text">
          Agrani<span className="logo-dot" aria-hidden="true" />
        </span>
      </a>

      {/* Nav */}
      <nav className="header-nav" aria-label="Main navigation">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/applications" className="nav-link">Applications</a>
        <a href="/drones" className="nav-link">Drones</a>
      </nav>

      {/* Actions */}
      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.3" />
              <line x1="10" y1="1.5" x2="10" y2="4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="10" y1="16" x2="10" y2="18.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="1.5" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="16" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="3.8" y1="3.8" x2="5.6" y2="5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="14.4" y1="14.4" x2="16.2" y2="16.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="14.4" y1="5.6" x2="16.2" y2="3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="3.8" y1="16.2" x2="5.6" y2="14.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z"
                stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <a href="/contact" className="cta-ghost">Contact</a>

        <a href="/get-started" className="cta-primary">
          Get Started
          <svg className="cta-arrow" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
              stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

    </header>
  );
}