import { useEffect } from "react";
import { useAlertStore } from "@/store/alertStore";

export const useRealtimeSimulation = () => {
  const addAlert = useAlertStore((s) => s.addAlert);

  useEffect(() => {
    const interval = setInterval(() => {
      addAlert({
        id: Math.random().toString(),
        location: "Ahmedabad",
        risk: Math.random(),
        density: Math.floor(Math.random() * 100),
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);
};