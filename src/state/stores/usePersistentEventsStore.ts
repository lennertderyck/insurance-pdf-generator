import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Event } from "../../types/identities";

interface UsePersistentEventsStoreInterface {
  events: Event[];
  addEvent: (event: Event) => void;
  deleteEvent: (index: number) => void;
}

export const usePersistentEventsStore = create(
  persist<UsePersistentEventsStoreInterface>(
    set => ({
      events: [],
      addEvent: (event) => set(state => ({ events: [...state.events, event] })),
      deleteEvent: (index) => set(state => ({ events: state.events.filter((_, i) => i !== index) })),
    }),
    {
      name: "eventsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
