import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UsePersistentGeneralStoreInterface {
  broker: string | null;
  setBroker: (brokerId: string) => void;
}

export const usePersistentGeneralStore = create(
  persist<UsePersistentGeneralStoreInterface>(
    set => ({
      broker: null,
      setBroker: (brokerId: string) => set({ broker: brokerId }),
    }),
    {
      name: "generalStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
