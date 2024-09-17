import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UsePersistentEventsStoreInterface {
  events: any[];
  addEvent: (event: any) => void;
}

export const usePersistentEventsStore = create(
  persist<UsePersistentEventsStoreInterface>(
    set => ({
      events: [],
      addEvent: (event) => set(state => ({ events: [...state.events, event] })),
    }),
    {
      name: "eventsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
