/* This code snippet is a React component named `DroneCatalog` that displays a catalog of drones.
Here's a breakdown of what it does: */
// import Link from "next/link";
// // ... Import your DRONE_DATA ...

// const DRONE_DATA = [
//   {
//     id: "as-1",
//     name: "SkyGuardian-V1",
//     category: "High Altitude Surveillance",
//     price: 12400,
//     delivery: "4-6 Days",
//     image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
//     features: ["4K Thermal Night Vision", "60min Flight Time", "AI Face Recognition"],
//     specs: {
//       range: "15km",
//       wind: "Up to 45km/h",
//       sensor: "EO/IR Quad-Sensor",
//       datalink: "AES-256 Encrypted"
//     }
//   },
//   {
//     id: "as-2",
//     name: "Interceptor-X",
//     category: "Tactical Riot Control",
//     price: 18900,
//     delivery: "7-9 Days",
//     image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800", 
//     features: ["Acoustic Hailer (Loudspeaker)", "Non-Lethal Deployment", "Object Tracking"],
//     specs: {
//       range: "8km",
//       wind: "Up to 55km/h",
//       sensor: "Lidar + RGB-D",
//       datalink: "Sat-Link Enabled"
//     }
//   },
//   {
//     id: "as-3",
//     name: "Specter-M7",
//     category: "Stealth Reconnaissance",
//     price: 24500,
//     delivery: "10-12 Days",
//     image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800",
//     features: ["Silent Propulsion System", "Multi-Target Radar", "BVLOS Operations"],
//     specs: {
//       range: "25km",
//       wind: "Up to 40km/h",
//       sensor: "Hyperspectral",
//       datalink: "Military Grade"
//     }
//   }
// ];

// export default function DroneCatalog() {
//   return (
//     <div className="drone-page">
//       <h1 className="drone-title">Tactical <strong>Fleet</strong></h1>
//       <div className="drone-grid">
//         {DRONE_DATA.map((drone) => (
//           <div key={drone.id} className="drone-card">
//             <img src={drone.image} alt={drone.name} />
//             <div className="drone-content">
//               <h3>{drone.name}</h3>
//               <Link href={`/drones/${drone.id}`} className="btn-deploy">
//                 Procure Unit
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import "./drones.css";

const DRONE_DATA = [
  {
    id: "as-1",
    name: "SkyGuardian-V1",
    category: "High Altitude Surveillance",
    price: 12400,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
    features: ["4K Thermal Night Vision", "60min Flight Time", "AI Face Recognition"],
    specs: { range: "15km", wind: "Up to 45km/h", sensor: "EO/IR QUAD-SENSOR", datalink: "AES-256 Encrypted" }
  },
  {
    id: "as-2",
    name: "Interceptor-X",
    category: "Tactical Riot Control",
    price: 18900,
    image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800", 
    features: ["Acoustic Hailer (Loudspeaker)", "Non-Lethal Deployment", "Object Tracking"],
    specs: { range: "8km", wind: "Up to 55km/h", sensor: "LIDAR + RGB-D", datalink: "Sat-Link Enabled" }
  },
  {
    id: "as-3",
    name: "Specter-M7",
    category: "Stealth Reconnaissance",
    price: 24500,
    image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Silent Propulsion System", "Multi-Target Radar", "BVLOS Operations"],
    specs: { range: "25km", wind: "Up to 40km/h", sensor: "HYPERSPECTRAL", datalink: "Military Grade" }
  }
];

export default function DroneCatalog() {
  return (
    <main className="drone-page">
      <div className="drone-grid">
        {DRONE_DATA.map((drone) => (
          <div key={drone.id} className="drone-card">
            <div className="drone-img-wrapper">
              <img src={drone.image} alt={drone.name} />
              <span className="drone-tag">{drone.category}</span>
              <div className="drone-image-footer">
                <span>{drone.specs.sensor}</span>
                <span>{drone.specs.range} RANGE</span>
              </div>
            </div>
            
            <div className="drone-content">
              <h3 className="drone-name">{drone.name}</h3>
              <div className="spec-table">
                <div className="spec-item">
                  <label>ENCRYPTED LINK</label>
                  <span>{drone.specs.datalink}</span>
                </div>
                <div className="spec-item">
                  <label>WIND RESISTANCE</label>
                  <span>{drone.specs.wind}</span>
                </div>
              </div>

              <ul className="drone-features">
                {drone.features.map(f => (
                  <li key={f}>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor" width="14">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="drone-footer">
                <div className="price-tag">
                  <label>UNIT COST</label>
                  <span className="drone-price">${drone.price.toLocaleString()}</span>
                </div>
                {/* Dynamic Link to [id] folder */}
                <Link href={`/drones/${drone.id}`} className="btn-deploy">
                  Initialize Procurement
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}