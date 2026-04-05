// "use client";

// import { useRouter } from "next/navigation";
// import "./hero.css";

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <section className="hero">

//       <p className="hero-kicker">Agrani · Crowd Shield</p>

//       <h1 className="hero-h1">
//         Real-time crowd<br />
//         <em>intelligence</em> &amp; security
//       </h1>

//       <span className="hero-divider" aria-hidden="true" />

//       <p className="hero-p">
//         AI-powered drone surveillance for crowd monitoring, riot detection,
//         and predictive security — built for critical infrastructure.
//       </p>

//       <div className="hero-actions">
//         <button
//           className="btn-fill"
//           onClick={() => router.push("/login")}
//         >
//           Get Started
//           <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
//             <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>

//         <button
//           className="btn-ghost"
//           onClick={() => router.push("/drones")}
//         >
//           Explore Drones
//           <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
//             <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>

//       <div className="hero-stats" aria-label="Platform statistics">
//         <div className="hero-stat">
//           <span className="stat-num">99.4%</span>
//           <span className="stat-lbl">Accuracy</span>
//         </div>
//         <div className="hero-stat">
//           <span className="stat-num">&lt;200ms</span>
//           <span className="stat-lbl">Latency</span>
//         </div>
//         <div className="hero-stat">
//           <span className="stat-num">24 / 7</span>
//           <span className="stat-lbl">Coverage</span>
//         </div>
//       </div>

//     </section>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import HeroBg from "./HeroBg";
import "./hero.css";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero">
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
          <button className="btn-fill" onClick={() => router.push("/login")}>
            Get Started
            <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="btn-ghost" onClick={() => router.push("/drones")}>
            Explore Drones
            <svg className="btn-ico" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="hero-stats" aria-label="Platform statistics">
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