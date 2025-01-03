import { v4 as uuid4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Event, EventInput } from "../../types/identities";
import { shouldBeArchived } from "../../utils/funcs/filters";

interface UsePersistentEventsStoreInterface {
  events: Event[];
  addEvent: (event: EventInput) => void;
  deleteEvent: (id: string) => void;
  archiveEvent: (id: string, archive?: boolean) => void;
  import: (events: Event[]) => void;
  availableOptions: () => Event[];
}

export const usePersistentEventsStore = create(
  persist<UsePersistentEventsStoreInterface>(
    (set, get) => ({
      events: [],
      addEvent: (event) => set(state => {
        const id = uuid4();
        return ({ events: [...state.events, { id, ...event }] })
      }),
      deleteEvent: (id) => set(state => ({ events: state.events.filter(event => event.id !== id) })),
      import: (events) => set({ events }),
      archiveEvent: (id, archive = true) => set(state => {
        const event = state.events.find(event => event.id === id);
        if (event) {
          event.archived = archive;
        }
        return ({ events: [...state.events] })
      }),
      availableOptions: () => {
        return get().events.filter(event => !shouldBeArchived(event));
      }
    }),
    {
      name: "eventsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);