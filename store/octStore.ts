import { create } from "zustand";

interface OctState {
  selectedOct: { x: number; y: number } | null;
  setSelectedOct: (oct: { x: number; y: number }) => void;
}

export const useOctStore = create<OctState>((set) => ({
  selectedOct: null,
  setSelectedOct: (oct) => set({ selectedOct: oct }),
}));
