import create from "zustand";

interface NexusState {
  wallet?: string;
  nexusBalance: number;
  activeLayer: "cognitive" | "consensus" | "value";
  nyraOpen: boolean;
  set: <K extends keyof NexusState>(k: K, v: NexusState[K]) => void;
}

export const useNexus = create<NexusState>((set) => ({
  nexusBalance: 1000,
  activeLayer: "cognitive",
  nyraOpen: false,
  set: (k, v) => set({ [k]: v } as any)
}));
