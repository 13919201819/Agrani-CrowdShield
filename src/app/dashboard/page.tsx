"use client";

import { useRealtimeSimulation } from "@/hooks/useRealtimeSimulation";
import { useAlertStore } from "@/store/alertStore";

export default function Dashboard() {
  useRealtimeSimulation();
  const alerts = useAlertStore((s) => s.alerts);

  return (
    <div>
      <h1 className="text-2xl mb-6">Live Alerts</h1>

      <div className="space-y-4">
        {alerts.map((a, i) => (
          <div key={i} className="p-4 bg-gray-900 rounded">
            <p>{a.location}</p>
            <p>Risk: {a.risk.toFixed(2)}</p>
            <p>Density: {a.density}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}