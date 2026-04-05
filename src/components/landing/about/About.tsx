"use client";

import { useRouter } from "next/navigation";
// import RadarBg from "./RadarBg";
import RadarBg from "./RadarBg";
// import "./about.css";
import "./about.css";

export default function About() {
  const router = useRouter();

  return (
    <section className="about" id="about">
      {/* Radar WebGL background */}
      <RadarBg />

      {/* Content */}
      <div className="about-content">
        {/* <p className="about-kicker">About Agrani</p> */}

        {/* <p className="about-p">
          We build the intelligence layer for the physical world. Agrani's{" "}
          <strong>autonomous drone fleet</strong> and{" "}
          <strong>AI surveillance platform</strong> give security teams
          unprecedented situational awareness — detecting crowd anomalies,
          predicting threats, and coordinating responses in real time, at
          scale, across any terrain.
        </p> */}

        {/* <span className="about-divider" aria-hidden="true" /> */}

        {/* <button
          className="btn-fill"
          onClick={() => router.push("/about")}
        >
          Learn More
          <svg
            className="btn-ico"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 6.5h9M8 3l3.5 3.5L8 10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
      </div>
    </section>
  );
}