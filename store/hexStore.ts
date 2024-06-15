import { create } from "zustand";

interface HexState {
  selectedHex: { q: number; r: number } | null;
  setSelectedHex: (hex: { q: number; r: number }) => void;
}

export const useHexStore = create<HexState>((set) => ({
  selectedHex: null,
  setSelectedHex: (hex) => set({ selectedHex: hex }),
}));
