// // "use client";

// // import { useRouter } from "next/navigation";

// // export default function Sidebar() {
// //   const router = useRouter();

// //   return (
// //     <div className="w-64 h-screen bg-black border-r border-gray-800 p-5">
// //       <h1 className="text-xl mb-8 font-bold">Agrani</h1>

// //       <div className="space-y-4">
// //         <p onClick={() => router.push("/dashboard")} className="cursor-pointer">Dashboard</p>
// //         <p onClick={() => router.push("/alerts")} className="cursor-pointer">Alerts</p>
// //         <p onClick={() => router.push("/live-feed")} className="cursor-pointer">Live Feed</p>
// //         <p onClick={() => router.push("/map")} className="cursor-pointer">Map</p>
// //       </div>
// //     </div>
// //   );
// // }










// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import { 
//   LayoutDashboard, 
//   Plane, 
//   Calendar, 
//   Bell, 
//   Terminal, 
//   CreditCard, 
//   Settings,
//   ShieldAlert
// } from "lucide-react";

// export default function Sidebar() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const menuItems = [
//     { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
//     { name: "Drones", path: "/drones", icon: Plane },
//     { name: "Events", path: "/events", icon: Calendar },
//     { name: "Alerts", path: "/alerts", icon: Bell },
//     { name: "Detection Logs", path: "/logs", icon: Terminal },
//     { name: "Subscription", path: "/subscription", icon: CreditCard },
//     { name: "Settings", path: "/settings", icon: Settings },
//   ];

//   return (
//     <div className="w-72 h-screen bg-[#050505] border-r border-[#1a1a1a] flex flex-col font-mono text-xs tracking-widest">
//       {/* Header / Brand */}
//       <div className="p-8 flex items-center gap-3">
//         <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
//           <ShieldAlert size={20} className="text-white" />
//         </div>
//         <div>
//           <h1 className="text-white font-bold text-lg tracking-tighter">AGRANI</h1>
//           <p className="text-[8px] text-blue-500 font-bold opacity-80">SYS_COMMAND_V1.0</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 space-y-1">
//         {menuItems.map((item) => {
//           const isActive = pathname === item.path;
//           const Icon = item.icon;

//           return (
//             <button
//               key={item.name}
//               onClick={() => router.push(item.path)}
//               className={`
//                 w-full flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-200 group
//                 ${isActive 
//                   ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
//                   : "text-gray-500 hover:text-gray-200 hover:bg-[#0a0a0a]"
//                 }
//               `}
//             >
//               <Icon 
//                 size={18} 
//                 className={isActive ? "text-blue-400" : "group-hover:text-gray-200"} 
//               />
//               <span className="uppercase font-medium">{item.name}</span>
//               {isActive && (
//                 <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Footer Info */}
//       <div className="p-6 border-t border-[#1a1a1a]">
//         <div className="bg-[#0a0a0a] rounded p-3 border border-[#1a1a1a]">
//           <div className="flex justify-between items-center mb-1">
//             <span className="text-[9px] text-gray-500 uppercase">System Status</span>
//             <span className="text-[9px] text-green-500 uppercase animate-pulse">Online</span>
//           </div>
//           <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
//             <div className="bg-blue-600 h-full w-[85%]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useRouter, usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Plane, 
  Calendar, 
  Bell, 
  Terminal, 
  CreditCard, 
  Settings,
  ShieldAlert,
  LogOut,
  Building2
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Mock organization name - in production, pull this from your Auth context/state
  const orgName = "Global Defense Corp"; 

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "Drones", path: "/drones", icon: Plane },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Alerts", path: "/alerts", icon: Bell },
    { name: "Detection Logs", path: "/logs", icon: Terminal },
    { name: "Subscription", path: "/subscription", icon: CreditCard },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const handleLogout = () => {
    // Add your logout logic here (clearing cookies/tokens)
    router.push("/login");
  };

  return (
    <div className="w-72 h-screen bg-[#050505] border-r border-[#1a1a1a] flex flex-col font-mono text-xs tracking-widest">
      {/* Header / Brand */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <ShieldAlert size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tighter uppercase">AGRANI</h1>
          <p className="text-[8px] text-blue-500 font-bold opacity-80">SYS_COMMAND_V1.0</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`
                w-full flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
                  : "text-gray-500 hover:text-gray-200 hover:bg-[#0a0a0a]"
                }
              `}
            >
              <Icon 
                size={18} 
                className={isActive ? "text-blue-400" : "group-hover:text-gray-200"} 
              />
              <span className="uppercase font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* NEW: Identity & Logout Block */}
      <div className="px-4 py-4 border-t border-[#1a1a1a]">
        <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] group">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <Building2 size={14} className="text-gray-400" />
            </div>
            <div className="truncate">
              <p className="text-[9px] text-gray-500 uppercase font-bold">Organization</p>
              <p className="text-white truncate pr-2 font-semibold">{orgName}</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            title="Log Out"
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 pt-0">
        <div className="bg-[#0a0a0a] rounded p-3 border border-[#1a1a1a]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] text-gray-500 uppercase">System Status</span>
            <span className="text-[9px] text-green-500 uppercase animate-pulse">Online</span>
          </div>
          <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[85%]" />
          </div>
        </div>
      </div>
    </div>
  );
}