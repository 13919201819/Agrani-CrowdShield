"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 h-screen bg-black border-r border-gray-800 p-5">
      <h1 className="text-xl mb-8 font-bold">Agrani</h1>

      <div className="space-y-4">
        <p onClick={() => router.push("/dashboard")} className="cursor-pointer">Dashboard</p>
        <p onClick={() => router.push("/alerts")} className="cursor-pointer">Alerts</p>
        <p onClick={() => router.push("/live-feed")} className="cursor-pointer">Live Feed</p>
        <p onClick={() => router.push("/map")} className="cursor-pointer">Map</p>
      </div>
    </div>
  );
}