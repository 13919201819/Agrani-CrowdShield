// "use client";

// import "./applications.css";

// const APPS = [
//   {
//     title: "Crowd Control",
//     desc: "Monitor density and movement patterns in real-time for large-scale events.",
//     size: "large", // spans 2 columns
//   },
//   {
//     title: "Perimeter Security",
//     desc: "Automated boundary patrols with thermal intrusion detection.",
//     size: "small",
//   },
//   {
//     title: "Search & Rescue",
//     desc: "Deploy AI vision to locate missing persons in difficult terrain.",
//     size: "small",
//   },
//   {
//     title: "Critical Infrastructure",
//     desc: "24/7 autonomous surveillance of power plants, refineries, and remote assets.",
//     size: "medium", // taller card
//   },
//   {
//     title: "Traffic Management",
//     desc: "Analyze vehicle flow and detect accidents before they cause gridlock.",
//     size: "small",
//   },
// ];

// export default function Applications() {
//   return (
//     <section className="apps-section" id="applications">
//       <div className="container">
//         <p className="apps-kicker">Use Cases</p>
//         <h2 className="apps-title">
//           Engineered for <strong>Extreme Reliability.</strong>
//         </h2>

//         <div className="apps-grid">
//           {APPS.map((app, index) => (
//             <div key={index} className={`app-card ${app.size}`}>
//               <div className="card-content">
//                 <div className="card-dot" />
//                 <h3 className="card-title">{app.title}</h3>
//                 <p className="card-desc">{app.desc}</p>
//               </div>
//               {/* Glass reflection effect */}
//               <div className="card-shine" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

// import "./applications.css";
import "./applications.css";

const THREATS = [
  {
    category: "Public Order",
    title: "Political Rallies & Marches",
    desc: "Real-time monitoring during elections and victory celebrations to prevent escalation and manage crowd flow.",
    size: "large",
  },
  {
    category: "Threat Detection",
    title: "Weapon & Ballistics Identification",
    desc: "AI-driven detection of knives, firearms, and stones. Instantly flags non-law enforcement carrying weapons.",
    size: "medium",
  },
  {
    category: "Critical Response",
    title: "Automated GPS Dispatch",
    desc: "Instant data relay to the nearest police station, fire department, and intelligence agencies with precise coordinates.",
    size: "small",
  },
  {
    category: "Emergency",
    title: "Early Fire & Smoke Detection",
    desc: "Thermal imaging sensors identify ignition points in dense crowds or remote festival locations before they spread.",
    size: "small",
  },
  {
    category: "Intelligence",
    title: "Criminal Recognition",
    desc: "Cross-referencing crowd feeds with intelligence databases to identify known criminals and high-risk individuals.",
    size: "small",
  },
  {
    category: "Civil Unrest",
    title: "Riots & Stone Pelting",
    desc: "Dynamic analysis of aggressive behavior patterns and projectile detection during opposition protests.",
    size: "large",
  },
];

export default function Applications() {
  return (
    <section className="apps-section" id="applications">
      <div className="container">
        <p className="apps-kicker">Operational Capability</p>
        <h2 className="apps-title">
          Deployment for <strong>Critical Infrastructure & Public Safety.</strong>
        </h2>

        <div className="apps-grid">
          {THREATS.map((item, index) => (
            <div key={index} className={`app-card ${item.size}`}>
              <div className="card-inner">
                <span className="card-category">{item.category}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
              <div className="card-scanline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}