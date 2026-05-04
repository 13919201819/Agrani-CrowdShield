// "use client";

// import { useParams, useRouter } from "next/navigation";

// export default function TrackingPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const orderId = `CMD-${Math.floor(100000 + Math.random() * 900000)}`;

//   return (
//     <div className="auth-page-centered">
//       <div className="auth-card tracking-card">
//         <div className="success-badge-large">MISSION ACTIVE</div>
        
//         <h2>Fulfillment In Progress</h2>
//         <p className="kicker">Tracking ID: <strong>{orderId}</strong></p>

//         <div className="tracking-visual-container">
//           <div className="timeline-node done">
//             <span className="label">Procured</span>
//             <div className="dot"></div>
//           </div>
//           <div className="timeline-node done">
//             <span className="label">Authenticated</span>
//             <div className="dot"></div>
//           </div>
//           <div className="timeline-node active">
//             <span className="label">Transit</span>
//             <div className="dot"></div>
//           </div>
//           <div className="timeline-node">
//             <span className="label">Arrival</span>
//             <div className="dot"></div>
//           </div>
//         </div>

//         <div className="order-details-summary">
//           <p>Unit assigned for deployment to designated sector. Live satellite link will be established shortly.</p>
//         </div>

//         <div className="action-footer vertical">
//           <button className="btn-primary-full" onClick={() => router.push('/drones')}>
//             Return to Fleet Management
//           </button>
//           <button className="btn-danger-outline" onClick={() => router.push('/drones')}>
//             Cancel Mission & Refund
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }