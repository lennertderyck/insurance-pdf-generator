import { v4 as uuid4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Event, EventInput } from "../../types/identities";

interface UsePersistentEventsStoreInterface {
  events: Event[];
  addEvent: (event: EventInput) => void;
  deleteEvent: (id: string) => void;
  import: (events: Event[]) => void;
}

export const usePersistentEventsStore = create(
  persist<UsePersistentEventsStoreInterface>(
    set => ({
      events: [],
      addEvent: (event) => set(state => {
        const id = uuid4();
        return ({ events: [...state.events, { id, ...event }] })
      }),
      deleteEvent: (id) => set(state => ({ events: state.events.filter(event => event.id !== id) })),
      import: (events) => set({ events }),
    }),
    {
      name: "eventsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);