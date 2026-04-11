"use client";

import Link from "next/link";
import HeroBg from "./HeroBg";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background layer */}
      <HeroBg />

      <div className="hero-content">
        <p className="hero-kicker">Agrani · Crowd Shield</p>

        <h1 className="hero-h1">
          Real-time crowd<br />
          <em>intelligence</em> &amp; security
        </h1>

        <span className="hero-divider" aria-hidden="true" />

        <p className="hero-p">
          AI-powered drone surveillance for crowd monitoring, riot detection,
          and predictive security — built for critical infrastructure.
        </p>

        <div className="hero-actions">
          <Link href="/login" className="btn-fill">
            Get Started
            <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link href="/drones" className="btn-ghost">
            Explore Drones
            <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">99.4%</span>
            <span className="stat-lbl">Accuracy</span>
          </div>
          <div className="hero-stat">
            <span className="stat-num">&lt;200ms</span>
            <span className="stat-lbl">Latency</span>
          </div>
          <div className="hero-stat">
            <span className="stat-num">24 / 7</span>
            <span className="stat-lbl">Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}