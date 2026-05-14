// // "use client";

// // import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
// // import { useAlertStore } from "@/store/alertStore";

// // export default function Dashboard() {
// //   useRealtimeSimulation();
// //   const alerts = useAlertStore((s) => s.alerts);

// //   return (
// //     <div>
// //       <h1 className="text-2xl mb-6">Live Alerts</h1>

// //       <div className="space-y-4">
// //         {alerts.map((a, i) => (
// //           <div key={i} className="p-4 bg-gray-900 rounded">
// //             <p>{a.location}</p>
// //             <p>Risk: {a.risk.toFixed(2)}</p>
// //             <p>Density: {a.density}%</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";

// // import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
// // import { useAlertStore } from "@/store/alertStore";

// // export default function Dashboard() {
// //   useRealtimeSimulation();
// //   const alerts = useAlertStore((s) => s.alerts);

// //   return (
// //     <div className="p-10 min-h-screen bg-black font-mono text-white">
// //       {/* Header Section */}
// //       <header className="mb-12 border-b border-[#1a1a1a] pb-8">
// //         <h1 className="text-4xl font-extrabold tracking-tighter uppercase mb-2">
// //           Operations <span className="text-blue-500">Dashboard</span>
// //         </h1>
// //         <div className="flex items-center gap-3">
// //           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
// //           <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-bold">
// //             Real-time surveillance overview // SECURED_CONNECTION: ACTIVE
// //           </p>
// //         </div>
// //       </header>

// //       {/* Alerts Grid/List */}
// //       <div className="space-y-4 max-w-4xl">
// //         <h2 className="text-xs text-blue-500 font-bold mb-4 tracking-widest uppercase">
// //           Incoming Neural Telemetry
// //         </h2>
        
// //         {alerts.length === 0 ? (
// //           <p className="text-gray-600 italic text-sm">Scanning for anomalies...</p>
// //         ) : (
// //           alerts.map((a, i) => (
// //             <div 
// //               key={i} 
// //               className="group relative p-5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg hover:border-blue-500/50 transition-all duration-300"
// //             >
// //               {/* Subtle accent line on hover */}
// //               <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-lg" />
              
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <p className="text-xs text-gray-500 uppercase font-bold mb-1">Location Context</p>
// //                   <h3 className="text-xl font-bold tracking-tight text-white uppercase">{a.location}</h3>
// //                 </div>
// //                 <div className="text-right">
// //                   <span className={`text-[10px] px-2 py-1 rounded border ${
// //                     a.risk > 0.7 ? "border-red-500/50 text-red-500 bg-red-500/5" : "border-blue-500/50 text-blue-500 bg-blue-500/5"
// //                   }`}>
// //                     RISK_LEVEL: {a.risk > 0.7 ? "CRITICAL" : "STABLE"}
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-8 mt-6 border-t border-white/5 pt-4">
// //                 <div>
// //                   <p className="text-[9px] text-blue-400 font-bold uppercase mb-1">Threat Index</p>
// //                   <p className="text-lg font-bold">{a.risk.toFixed(2)}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-[9px] text-blue-400 font-bold uppercase mb-1">Crowd Density</p>
// //                   <p className="text-lg font-bold">{a.density}%</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
// import { useAlertStore } from "@/store/alertStore";
// import { 
//   Cpu, 
//   Calendar, 
//   Bell, 
//   Target, 
//   Flame, 
//   Wind, 
//   Users, 
//   ShieldAlert, 
//   ScanEye,
//   User,
//   Car
// } from "lucide-react";

// export default function Dashboard() {
//   useRealtimeSimulation();
//   const alerts = useAlertStore((s) => s.alerts);

//   const stats = [
//     { label: "Active Drones", value: "0", sub: "of 0 registered", icon: Cpu, color: "text-blue-500", bg: "bg-blue-500/10" },
//     { label: "Active Events", value: "0", sub: "0 total", icon: Calendar, color: "text-green-500", bg: "bg-green-500/10" },
//     { label: "Unresolved Alerts", value: alerts.length, sub: "0 critical", icon: Bell, color: "text-red-500", bg: "bg-red-500/10" },
//     { label: "Detections Today", value: "0", sub: "0 total", icon: ScanEye, color: "text-purple-500", bg: "bg-purple-500/10" },
//   ];

//   const breakdown = [
//     { label: "Fire", count: 0, icon: Flame, color: "text-orange-500" },
//     { label: "Smoke", count: 0, icon: Wind, color: "text-gray-400" },
//     { label: "Crowd", count: 0, icon: Users, color: "text-blue-400" },
//     { label: "Weapon Knife", count: 0, icon: ShieldAlert, color: "text-red-500" },
//     { label: "Weapon Gun", count: 0, icon: ShieldAlert, color: "text-red-600" },
//     { label: "Riot", count: 0, icon: Target, color: "text-yellow-500" },
//     { label: "Person", count: 0, icon: User, color: "text-green-400" },
//     { label: "Vehicle", count: 0, icon: Car, color: "text-purple-400" },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-black font-mono text-white">
//       {/* 1. Header */}
//       <header className="mb-8">
//         <h1 className="text-2xl font-bold tracking-tight">Operations Dashboard</h1>
//         <p className="text-xs text-gray-500 tracking-wider">Real-time surveillance overview</p>
//       </header>

//       {/* 2. Stat Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         {stats.map((stat, i) => (
//           <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] p-5 rounded-lg flex items-start gap-4">
//             <div className={`p-3 rounded-lg ${stat.bg}`}>
//               <stat.icon size={20} className={stat.color} />
//             </div>
//             <div>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{stat.label}</div>
//               <div className="text-[9px] text-gray-600 uppercase">{stat.sub}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* 3. Main Alerts Feed (Left) */}
//         <div className="lg:col-span-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden flex flex-col">
//           <div className="p-4 border-b border-[#1a1a1a] flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <Bell size={14} className="text-gray-400" />
//               <span className="text-xs font-bold uppercase tracking-widest">Active Alerts</span>
//             </div>
//             <span className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded text-gray-400 uppercase">
//               {alerts.length} unresolved
//             </span>
//           </div>
          
//           <div className="p-8 flex-1 flex flex-col items-center justify-center text-center min-h-[300px]">
//             {alerts.length === 0 ? (
//               <div className="space-y-2">
//                 <p className="text-gray-500 text-sm italic">No active alerts — system nominal</p>
//                 <div className="w-32 h-1 bg-[#1a1a1a] mx-auto rounded-full overflow-hidden">
//                   <div className="bg-green-500 h-full w-full opacity-20" />
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full space-y-3">
//                 {alerts.map((a, i) => (
//                    <div key={i} className="text-left p-4 border border-[#1a1a1a] rounded bg-black/40">
//                      {/* Existing alert card UI */}
//                      <p className="text-blue-500 text-xs font-bold uppercase">{a.location}</p>
//                      <p className="text-sm text-white">Risk: {a.risk.toFixed(2)} | Density: {a.density}%</p>
//                    </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* 4. Detection Breakdown (Right) */}
//         <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-5">
//           <div className="flex items-center gap-2 mb-6 border-b border-[#1a1a1a] pb-4">
//             <ScanEye size={16} className="text-blue-500" />
//             <h2 className="text-xs font-bold uppercase tracking-widest">Detection Breakdown</h2>
//           </div>
          
//           <div className="space-y-1">
//             {breakdown.map((item, i) => (
//               <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 hover:bg-white/5 px-2 rounded transition-colors group">
//                 <div className="flex items-center gap-3">
//                   <item.icon size={14} className={`${item.color} opacity-80 group-hover:opacity-100`} />
//                   <span className="text-xs text-gray-400 group-hover:text-gray-200">{item.label}</span>
//                 </div>
//                 <span className="text-xs font-bold text-gray-600">0</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 pt-4 border-t border-[#1a1a1a] flex justify-between items-center text-gray-500">
//             <span className="text-[10px] uppercase font-bold tracking-tighter">Total detections</span>
//             <span className="text-xs font-bold text-blue-500">0</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
// import { useAlertStore } from "@/store/alertStore";
// import { 
//   Radio, Cpu, Bell, Calendar, Map, Video, 
//   VideoOff, Flame, Wind, Users, ShieldAlert, 
//   Target, ChevronRight, User, Car
// } from "lucide-react";

// export default function OperationsDashboard() {
//   useRealtimeSimulation();
//   const alerts = useAlertStore((s) => s.alerts);

//   const stats = [
//     { label: "Active Drones", value: "2", sub: "from 3 registered", icon: Cpu, color: "text-blue-500" },
//     { label: "Active Alerts", value: "3", sub: "Critical Status", icon: Bell, color: "text-red-500" },
//     { label: "Events", value: "1", sub: "Running Now", icon: Calendar, color: "text-emerald-500" },
//     { label: "Drone Location", value: "Sector 7", sub: "Active Tracking", icon: Map, color: "text-purple-500" },
//   ];

//   const detections = [
//     { label: "Human", count: 42, icon: User, color: "text-blue-400" },
//     { label: "Fire", count: 0, icon: Flame, color: "text-orange-500" },
//     { label: "Smoke", count: 0, icon: Wind, color: "text-slate-400" },
//     { label: "Weapon Knife", count: 0, icon: ShieldAlert, color: "text-red-500" },
//     { label: "Weapon Gun", count: 0, icon: ShieldAlert, color: "text-red-600" },
//     { label: "Riots", count: 0, icon: Target, color: "text-yellow-500" },
//     { label: "Critical Crowd", count: 1, icon: Users, color: "text-emerald-400" },
//   ];

//   const streams = [
//     { id: "Drone A", zone: "North Zone", humans: 42, density: "High", status: "LIVE", latency: "120 ms" },
//     { id: "Drone B", zone: "Main Gate", humans: 28, density: "Medium", status: "LIVE", latency: "110 ms" },
//     { id: "Drone C", zone: "Parking Area", humans: 15, density: "Low", status: "LIVE", latency: "90 ms" },
//     { id: "Drone D", zone: "South Zone", status: "OFFLINE", lastSeen: "2 min ago" },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-slate-300 font-mono p-6 overflow-hidden">
      
//       {/* 1. Header Section */}
//       <header className="mb-8 text-left">
//         <h1 className="text-3xl font-bold text-white tracking-tighter">Operations Dashboard</h1>
//         <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-1">
//           Real-time surveillance overview
//         </p>
//       </header>

//       {/* 2. Horizontal Quick Stats (4 Cards) */}
//       <div className="grid grid-cols-4 gap-4 mb-8">
//         {stats.map((stat, i) => (
//           <div key={i} className="bg-[#080808] border border-white/5 p-4 rounded-lg flex items-center gap-4">
//             <div className={`p-2 rounded bg-white/5 ${stat.color}`}>
//               <stat.icon size={18} />
//             </div>
//             <div>
//               <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
//               <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{stat.label}</p>
//               <p className="text-[8px] text-slate-600 uppercase tracking-tighter">{stat.sub}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 3. Main Operational View */}
//       <div className="flex gap-6 flex-1 min-h-0">
        
//         {/* BIG GRID: Live Feeds (65%) */}
//         <div className="w-[65%] flex flex-col bg-[#080808] border border-white/5 rounded-xl p-4">
//           <div className="flex items-center justify-between mb-4 px-2">
//             <div className="flex items-center gap-2">
//               <h2 className="text-sm font-bold text-white uppercase">Live Feeds</h2>
//               <span className="flex items-center gap-1 text-[9px] text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded">
//                 <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" /> LIVE
//               </span>
//             </div>
//             <ChevronRight size={14} className="text-slate-600" />
//           </div>

//           <div className="grid grid-cols-2 gap-4 flex-1">
//             {streams.map((s, i) => (
//               <div key={i} className="relative bg-[#050505] border border-white/5 rounded-lg overflow-hidden group">
//                 {s.status === "LIVE" ? (
//                   <>
//                     {/* Stream Metadata Overlay (Top) */}
//                     <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
//                       <div className="bg-black/60 px-2 py-1 rounded text-[9px] font-bold text-white border border-white/10">
//                         {s.id} - {s.zone}
//                       </div>
//                       <span className="bg-emerald-600 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">LIVE</span>
//                     </div>

//                     {/* Stream Data Overlay (Middle) */}
//                     <div className="absolute top-12 left-3 z-10 space-y-1">
//                       <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded border border-white/5">
//                         <p className="text-[9px] text-slate-400">Humans: <span className="text-white">{s.humans}</span></p>
//                         <p className="text-[9px] text-slate-400">Density: <span className={s.density === 'High' ? 'text-red-500' : 'text-emerald-500'}>{s.density}</span></p>
//                       </div>
//                     </div>

//                     {/* Mock Stream Visuals */}
//                     <div className="w-full h-full bg-slate-900 flex items-center justify-center opacity-40">
//                       <Video size={40} className="text-slate-800" />
//                     </div>

//                     {/* Latency Footer */}
//                     <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-0.5 rounded flex items-center gap-1 text-[8px] font-bold text-emerald-500 border border-emerald-500/20">
//                       <Radio size={10} /> {s.latency}
//                     </div>
//                   </>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center h-full gap-2 text-slate-700">
//                     <VideoOff size={32} />
//                     <p className="text-[10px] font-bold uppercase">{s.id} - Offline</p>
//                     <p className="text-[8px] uppercase tracking-tighter">Last seen {s.lastSeen}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="w-full text-center py-3 text-blue-500 text-[10px] font-bold uppercase hover:bg-blue-500/5 transition-colors mt-4">
//             View All Streams →
//           </button>
//         </div>

//         {/* SIDEBARS: Detections (35%) */}
//         <div className="w-[35%] flex flex-col gap-6">
//           <section className="bg-[#080808] border border-white/5 rounded-xl p-5 flex-1">
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
//               <Target size={14} className="text-blue-500" />
//               Detection Breakdown
//             </h3>
            
//             <div className="space-y-1">
//               {detections.map((d, i) => (
//                 <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 group hover:bg-white/5 px-2 rounded transition-all">
//                   <div className="flex items-center gap-3">
//                     <d.icon size={14} className={`${d.color} opacity-80 group-hover:opacity-100`} />
//                     <span className="text-[11px] text-slate-400 group-hover:text-slate-200">{d.label}</span>
//                   </div>
//                   <span className="text-xs font-bold text-slate-600">{d.count}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
//               <span className="text-[10px] font-bold text-slate-500 uppercase">Total Detections</span>
//               <span className="text-lg font-bold text-white tabular-nums">43</span>
//             </div>
//           </section>
//         </div>

//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
import { useAlertStore } from "@/store/alertStore";
import { 
  Radio, Cpu, Bell, Calendar, Map, Video, 
  VideoOff, Flame, Wind, Users, ShieldAlert, 
  Target, ChevronRight, User, Car, ChevronDown, Activity,
  Search, Info
} from "lucide-react";

export default function OperationsDashboard() {
  useRealtimeSimulation();
  const alerts = useAlertStore((s) => s.alerts);
  const [selectedDrone, setSelectedDrone] = useState("Drone A");

  const stats = [
    { label: "Active Drones", value: "2", sub: "from 3 registered", icon: Cpu, color: "text-blue-500" },
    { label: "Active Alerts", value: "3", sub: "Critical Status", icon: Bell, color: "text-red-500" },
    { label: "Events", value: "1", sub: "Running Now", icon: Calendar, color: "text-emerald-500" },
    { label: "Drone Location", value: "Sector 7", sub: "Active Tracking", icon: Map, color: "text-purple-500" },
  ];

  const detections = [
    { label: "Human", count: 42, icon: User, color: "text-blue-400" },
    { label: "Fire", count: 0, icon: Flame, color: "text-orange-500" },
    { label: "Smoke", count: 0, icon: Wind, color: "text-slate-400" },
    { label: "Weapon Knife", count: 0, icon: ShieldAlert, color: "text-red-500" },
    { label: "Weapon Gun", count: 0, icon: ShieldAlert, color: "text-red-600" },
    { label: "Riots", count: 0, icon: Target, color: "text-yellow-500" },
    { label: "Critical Crowd", count: 1, icon: Users, color: "text-emerald-400" },
  ];

  const streams = [
    { id: "Drone A", zone: "North Zone", humans: 42, density: "High", status: "LIVE", latency: "120 ms" },
    { id: "Drone B", zone: "Main Gate", humans: 28, density: "Medium", status: "LIVE", latency: "110 ms" },
    { id: "Drone C", zone: "Parking Area", humans: 15, density: "Low", status: "LIVE", latency: "90 ms" },
    { id: "Drone D", zone: "South Zone", status: "OFFLINE", lastSeen: "2 min ago" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020202] text-slate-300 font-mono p-6 gap-6 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <header className="flex justify-between items-end border-b border-white/5 pb-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-white tracking-tighter uppercase">Operations Dashboard</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-1">
            Real-time surveillance overview // Status: All Systems Operational
          </p>
        </div>
        <div className="flex gap-3">
            <div className="bg-[#080808] border border-white/10 p-2 rounded cursor-pointer hover:bg-white/5"><Search size={16}/></div>
            <div className="bg-[#080808] border border-white/10 p-2 rounded cursor-pointer hover:bg-white/5"><Info size={16}/></div>
        </div>
      </header>

      {/* 2. HORIZONTAL QUICK STATS (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#080808] border border-white/5 p-4 rounded-lg flex items-center gap-4 hover:border-white/20 transition-all shadow-sm">
            <div className={`p-2.5 rounded bg-white/5 ${stat.color}`}>
              <stat.icon size={18} />
            </div>
            <div>
              <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase mt-1.5 tracking-wider">{stat.label}</p>
              <p className="text-[8px] text-slate-600 uppercase tracking-tighter">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. MAIN OPERATIONAL VIEW (65/35 Split) */}
      <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
        
        {/* BIG GRID: Live Feeds (65%) */}
        <div className="w-full lg:w-[65%] flex flex-col bg-[#080808] border border-white/5 rounded-xl p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">Live Feeds</h2>
              <span className="flex items-center gap-1.5 text-[9px] text-red-500 font-bold bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" /> LIVE
              </span>
            </div>
            <ChevronRight size={16} className="text-slate-600 cursor-pointer" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {streams.map((s, i) => (
              <div key={i} className="relative bg-[#050505] border border-white/5 rounded-lg overflow-hidden group aspect-video">
                {s.status === "LIVE" ? (
                  <>
                    {/* Header Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-bold text-white border border-white/10 uppercase tracking-tighter">
                        {s.id} - {s.zone}
                      </div>
                      <span className="bg-emerald-600 text-white text-[8px] px-2 py-0.5 rounded font-black">LIVE</span>
                    </div>

                    {/* Telemetry Overlay */}
                    <div className="absolute top-12 left-3 z-10 space-y-1">
                      <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded border border-white/5 space-y-1">
                        <p className="text-[10px] text-slate-400 font-bold">HUMANS: <span className="text-white tabular-nums">{s.humans}</span></p>
                        <p className="text-[10px] text-slate-400 font-bold">DENSITY: <span className={s.density === 'High' ? 'text-red-500' : s.density === 'Medium' ? 'text-yellow-500' : 'text-emerald-500'}>{s.density}</span></p>
                      </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className="w-full h-full bg-[#111] flex items-center justify-center opacity-30">
                      <Video size={48} className="text-slate-800" />
                    </div>

                    {/* Bottom Status Overlay */}
                    <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded flex items-center gap-2 text-[9px] font-bold text-emerald-500 border border-emerald-500/20 shadow-lg">
                      <Radio size={12} /> {s.latency}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-700 bg-[#050505]">
                    <VideoOff size={40} strokeWidth={1.5} />
                    <div className="text-center">
                      <p className="text-[10px] font-bold uppercase text-slate-500">{s.id} - Offline</p>
                      <p className="text-[8px] uppercase tracking-tighter mt-1">Last signal: {s.lastSeen}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="w-full text-center py-4 text-blue-500 text-[10px] font-bold uppercase hover:bg-blue-500/5 transition-all mt-4 border-t border-white/5 tracking-[0.2em]">
            View All Streams →
          </button>
        </div>

        {/* SIDEBAR: Detection Breakdown (35%) */}
        <div className="w-full lg:w-[35%] bg-[#080808] border border-white/5 rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
            <Target size={18} className="text-blue-500" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Detection Breakdown</h2>
          </div>
          
          <div className="space-y-1 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {detections.map((d, i) => (
              <div key={i} className="flex items-center justify-between py-3.5 border-b border-white/5 group hover:bg-white/5 px-3 rounded-lg transition-all cursor-default">
                <div className="flex items-center gap-4">
                  <div className={`${d.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    <d.icon size={16} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-tight">{d.label}</span>
                </div>
                <span className="text-xs font-black text-slate-600 group-hover:text-white transition-colors tabular-nums">{d.count}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center bg-black/20 p-4 rounded-lg">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Total Detections</span>
            <span className="text-2xl font-black text-white tabular-nums tracking-tighter">43</span>
          </div>
        </div>

      </div>

      {/* 4. FULL WIDTH ANALYTICS: Human Count Over Time */}
      <section className="w-full bg-[#080808] border border-white/5 rounded-xl p-8 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
                <Activity size={20} className="text-blue-500" />
            </div>
            <div>
                <h2 className="text-xl font-black text-white uppercase tracking-tighter">Human Count Over Time</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Historical Density Analysis</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            {/* Drone Selector */}
            <div className="relative flex-1 md:flex-none">
              <select 
                value={selectedDrone}
                onChange={(e) => setSelectedDrone(e.target.value)}
                className="w-full appearance-none bg-[#050505] border border-white/10 px-6 py-2.5 rounded text-[10px] font-black text-slate-300 hover:border-blue-500/50 transition-all cursor-pointer outline-none uppercase tracking-widest pr-12"
              >
                <option>Drone A</option>
                <option>Drone B</option>
                <option>Drone C</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            </div>
            
            {/* Interval Selector */}
            <div className="relative flex-1 md:flex-none">
              <select className="w-full appearance-none bg-[#050505] border border-white/10 px-6 py-2.5 rounded text-[10px] font-black text-slate-300 hover:border-blue-500/50 transition-all cursor-pointer outline-none uppercase tracking-widest pr-12">
                <option>1 Hour</option>
                <option>6 Hours</option>
                <option>24 Hours</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Tactical Chart Visualization */}
        <div className="relative h-72 w-full mt-4 pl-10 pr-4">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-slate-700 font-black tabular-nums py-0.5">
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span className="text-slate-500">0</span>
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0 pl-10 pr-4 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="border-t border-white/5 w-full h-px" />
            ))}
          </div>

          {/* SVG Chart - Visual recreation of image_ae4fb7.png */}
          <div className="relative w-full h-full">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                    <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Area Fill */}
                <path 
                    d="M0,100 Q100,50 200,80 T400,40 T600,90 T800,60 T1000,70 L1000,200 L0,200 Z" 
                    fill="url(#glowGradient)" 
                />
                {/* Main Stroke */}
                <path 
                    d="M0,100 Q100,50 200,80 T400,40 T600,90 T800,60 T1000,70" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
                {/* Animated End Marker */}
                <circle cx="1000" cy="70" r="5" fill="#3b82f6" className="animate-pulse" />
            </svg>

            {/* Current Value Marker (128) */}
            <div className="absolute right-0 top-[70px] -translate-y-1/2 translate-x-2 flex flex-col items-center">
                <div className="bg-blue-600 text-white text-[11px] font-black px-3 py-1.5 rounded-md shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400/30">
                    128
                </div>
                <div className="w-px h-4 bg-gradient-to-b from-blue-600 to-transparent" />
            </div>
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between mt-8 text-[10px] text-slate-700 font-black tracking-widest">
            <span>10:00 AM</span>
            <span>10:15 AM</span>
            <span>10:30 AM</span>
            <span>10:45 AM</span>
            <span className="text-slate-400">11:00 AM</span>
          </div>
        </div>
      </section>

      {/* Internal Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.5);
        }
      `}</style>
    </div>
  );
}