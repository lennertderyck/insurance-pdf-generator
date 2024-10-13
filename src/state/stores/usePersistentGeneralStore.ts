import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UsePersistentGeneralStoreInterface {
  broker: string | null;
  setBroker: (brokerId: string) => void;
  
  onboardingSteps: string[];
  setOnboardingStep: (step: string) => void;
}

export const usePersistentGeneralStore = create(
  persist<UsePersistentGeneralStoreInterface>(
    set => ({
      broker: null,
      setBroker: (brokerId: string) => set({ broker: brokerId }),
      
      onboardingSteps: [],
      setOnboardingStep: (step) => set((state) => ({
        onboardingSteps: [...state.onboardingSteps, step]
      })),
    }),
    {
      name: "generalStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
