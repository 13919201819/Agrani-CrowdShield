import { create } from "zustand";

export interface Alert {
  location: string;
  risk: number;
  density: number;
}

interface AlertStore {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({
      alerts: [alert, ...state.alerts],
    })),
}));