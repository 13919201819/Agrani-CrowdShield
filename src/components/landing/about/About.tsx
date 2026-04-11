"use client";

import { useRouter } from "next/navigation";
import RadarBg from "./RadarBg";
import "./about.css";

export default function About() {
  const router = useRouter();

  return (
    <section className="about" id="about">
      <RadarBg />

      <div className="about-content">
        {/* <p className="about-kicker">About Agrani</p> */}

        {/* Added the 'about-p-xl' class here */}
        <p className="about-p about-p-xl">
          AI-powered drones.
          <br />
            <span>Real-time crowd intelligence.</span>
        </p>

        <span className="about-divider" aria-hidden="true" />

        {/* <button className="btn-fill" onClick={() => router.push("/about")}>
          Learn More
          <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button> */}
      </div>
    </section>
  );
}