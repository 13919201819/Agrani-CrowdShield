// "use client";

// import { useState } from "react";
// import "./drones.css";

// const DRONE_DATA = [
//   {
//     id: "as-1",
//     name: "SkyGuardian-V1",
//     category: "High Altitude",
//     price: 12400,
//     features: ["4K Thermal Night Vision", "60min Flight Time", "AI Face Recognition"],
//     image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
//     delivery: "4-6 Days"
//   },
//   {
//     id: "as-2",
//     name: "Interceptor-X",
//     category: "Tactical Response",
//     price: 18900,
//     features: ["Weapon Detection", "Loudspeaker System", "Object Tracking"],
//     image: "https://images.unsplash.com/photo-1473960104372-7a4286726053?q=80&w=800",
//     delivery: "7-9 Days"
//   }
// ];

// export default function DroneList() {
//   const [selectedDrone, setSelectedDrone] = useState<any>(null);
//   const [location, setLocation] = useState("");

//   return (
//     <div className="drone-page">
//       <div className="drone-header">
//         <p className="drone-kicker">Deployment Catalog</p>
//         <h1 className="drone-title">Tactical <strong>Fleet</strong></h1>
//       </div>

//       <div className="drone-grid">
//         {DRONE_DATA.map((drone) => (
//           <div key={drone.id} className="drone-card">
//             <div className="drone-img-wrapper">
//               <img src={drone.image} alt={drone.name} />
//               <span className="drone-tag">{drone.category}</span>
//             </div>
//             <div className="drone-content">
//               <h3>{drone.name}</h3>
//               <ul className="drone-features">
//                 {drone.features.map(f => <li key={f}>{f}</li>)}
//               </ul>
//               <div className="drone-footer">
//                 <span className="drone-price">${drone.price.toLocaleString()}</span>
//                 <button className="btn-deploy" onClick={() => setSelectedDrone(drone)}>
//                   Procure Unit
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Buying Journey Modal */}
//       {selectedDrone && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Logistics Verification</h2>
//             <p>Unit: {selectedDrone.name}</p>
            
//             <div className="modal-field">
//               <label>Delivery Destination</label>
//               <input 
//                 type="text" 
//                 placeholder="Enter City / Sector" 
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>

//             {location && (
//               <div className="delivery-info">
//                 <p>Estimated Arrival: <strong>{selectedDrone.delivery}</strong></p>
//                 <p>Status: <span className="status-ready">Routes Clear</span></p>
//               </div>
//             )}

//             <div className="modal-actions">
//               <button className="btn-cancel" onClick={() => setSelectedDrone(null)}>Abort</button>
//               <button className="btn-confirm" disabled={!location}>Confirm Order</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import "./drones.css";

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

// export default function DroneList() {
//   const [selectedDrone, setSelectedDrone] = useState<any>(null);
//   const [journeyStep, setJourneyStep] = useState<"specs" | "auth" | "payment" | "tracking">("specs");
//   const [orderId, setOrderId] = useState("");

//   const resetJourney = () => {
//     setSelectedDrone(null);
//     setJourneyStep("specs");
//   };

//   const handlePayment = () => {
//     setOrderId(`ORD-${Math.floor(Math.random() * 1000000)}`);
//     setJourneyStep("tracking");
//   };

//   return (
//     <div className="drone-page">
//       <div className="drone-header">
//         <p className="drone-kicker">Department of Defense • Authorized Catalog</p>
//         <h1 className="drone-title">Tactical <strong>Fleet Deployment</strong></h1>
//       </div>

//       <div className="drone-grid">
//         {DRONE_DATA.map((drone) => (
//           <div key={drone.id} className="drone-card">
//             <div className="drone-img-wrapper">
//               <img src={drone.image} alt={drone.name} />
//               <div className="drone-overlay-info">
//                 <span>{drone.specs.sensor}</span>
//                 <span>{drone.specs.range} Range</span>
//               </div>
//               <span className="drone-tag">{drone.category}</span>
//             </div>
            
//             <div className="drone-content">
//               <h3>{drone.name}</h3>
              
//               <div className="spec-table">
//                 <div className="spec-item">
//                   <label>Encrypted Link</label>
//                   <span>{drone.specs.datalink}</span>
//                 </div>
//                 <div className="spec-item">
//                   <label>Wind Resistance</label>
//                   <span>{drone.specs.wind}</span>
//                 </div>
//               </div>

//               <ul className="drone-features">
//                 {drone.features.map(f => (
//                   <li key={f}>
//                     <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     {f}
//                   </li>
//                 ))}
//               </ul>

//               <div className="drone-footer">
//                 <div className="price-tag">
//                   <label>Unit Cost</label>
//                   <span className="drone-price">${drone.price.toLocaleString()}</span>
//                 </div>
//                 <button className="btn-deploy" onClick={() => setSelectedDrone(drone)}>
//                   Initialize Procurement
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- JOURNEY MODAL --- */}
//       {selectedDrone && (
//         <div className="modal-overlay">
//           <div className="modal-content journey-modal">
            
//             {/* 1. PRODUCT SPECIFICATIONS */}
//             {journeyStep === "specs" && (
//               <div className="step-container">
//                 <div className="modal-header">
//                   <h2>Product Specifications</h2>
//                   <p className="unit-id">Unit ID: {selectedDrone.id}</p>
//                 </div>
//                 <div className="spec-description">
//                   <p>Comprehensive technical breakdown for <strong>{selectedDrone.name}</strong>. Engineered for {selectedDrone.category} missions with {selectedDrone.specs.sensor} precision.</p>
//                   <div className="spec-summary-grid">
//                     <div><span>Operational Range</span><strong>{selectedDrone.specs.range}</strong></div>
//                     <div><span>Datalink Architecture</span><strong>{selectedDrone.specs.datalink}</strong></div>
//                   </div>
//                 </div>
//                 <div className="modal-actions">
//                   <button className="btn-cancel" onClick={resetJourney}>Abort</button>
//                   <button className="btn-confirm" onClick={() => setJourneyStep("auth")}>Verify Authority</button>
//                 </div>
//               </div>
//             )}

//             {/* 2. GOVERNMENT AUTHENTICATION */}
//             {journeyStep === "auth" && (
//               <div className="step-container">
//                 <div className="modal-header">
//                   <h2>Authentication</h2>
//                   <p>Upload proof of Government / Agency authorization.</p>
//                 </div>
//                 <div className="modal-form">
//                   <div className="form-group">
//                     <label>Agency Name</label>
//                     <input type="text" placeholder="e.g. Ministry of Interior" />
//                   </div>
//                   <div className="form-group">
//                     <label>Authorization Document (PDF)</label>
//                     <div className="upload-box">Click to Upload Documents</div>
//                   </div>
//                 </div>
//                 <div className="modal-actions">
//                   <button className="btn-cancel" onClick={() => setJourneyStep("specs")}>Back</button>
//                   <button className="btn-confirm" onClick={() => setJourneyStep("payment")}>Proceed to Payment</button>
//                 </div>
//               </div>
//             )}

//             {/* 3. PAYMENT GATEWAY */}
//             {journeyStep === "payment" && (
//               <div className="step-container">
//                 <div className="modal-header">
//                   <h2>Secure Payment</h2>
//                   <p>Amount Due: <strong>${selectedDrone.price.toLocaleString()}</strong></p>
//                 </div>
//                 <div className="payment-form">
//                   <input type="text" placeholder="Card Number" className="wide-input" />
//                   <div className="input-row">
//                     <input type="text" placeholder="MM/YY" />
//                     <input type="text" placeholder="CVV" />
//                   </div>
//                 </div>
//                 <div className="modal-actions">
//                   <button className="btn-cancel" onClick={() => setJourneyStep("auth")}>Back</button>
//                   <button className="btn-confirm payment-btn" onClick={handlePayment}>Finalize Purchase</button>
//                 </div>
//               </div>
//             )}

//             {/* 4. TRACKING & CANCEL */}
//             {journeyStep === "tracking" && (
//               <div className="step-container">
//                 <div className="modal-header success-header">
//                   <div className="success-icon">✓</div>
//                   <h2>Order Successful</h2>
//                   <p>Order ID: <strong>{orderId}</strong></p>
//                 </div>
//                 <div className="tracking-status">
//                   <div className="status-item active">Procured</div>
//                   <div className="status-line active"></div>
//                   <div className="status-item">In Transit</div>
//                   <div className="status-line"></div>
//                   <div className="status-item">Deployed</div>
//                 </div>
//                 <div className="modal-actions vertical">
//                   <button className="btn-confirm" onClick={resetJourney}>Track Live GPS</button>
//                   <button className="btn-cancel-red" onClick={resetJourney}>Cancel Shipment</button>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>
//       )}
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
    specs: {
      range: "15km",
      wind: "Up to 45km/h",
      sensor: "EO/IR QUAD-SENSOR",
      datalink: "AES-256 Encrypted"
    }
  },
  {
    id: "as-2",
    name: "Interceptor-X",
    category: "Tactical Riot Control",
    price: 18900,
    image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800", 
    features: ["Acoustic Hailer (Loudspeaker)", "Non-Lethal Deployment", "Object Tracking"],
    specs: {
      range: "8km",
      wind: "Up to 55km/h",
      sensor: "LIDAR + RGB-D",
      datalink: "Sat-Link Enabled"
    }
  },
  {
    id: "as-3",
    name: "Specter-M7",
    category: "Stealth Reconnaissance",
    price: 24500,
    image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["Silent Propulsion System", "Multi-Target Radar", "BVLOS Operations"],
    specs: {
      range: "25km",
      wind: "Up to 40km/h",
      sensor: "HYPERSPECTRAL",
      datalink: "Military Grade"
    }
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
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
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