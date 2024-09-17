import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UsePersistentPersonsStoreInterface {
  persons: any[];
  addPerson: (person: any) => void;
  deletePerson: (id: string) => void;
}

export const usePersistentPersonsStore = create(
  persist<UsePersistentPersonsStoreInterface>(
    set => ({
      persons: [],
      addPerson: (person) => set((state) => ({ persons: [...state.persons, person] })),
      deletePerson: (id) => set((state) => ({ persons: state.persons.filter(person => person.rnr !== id) })),
    }),
    {
      name: "personsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
