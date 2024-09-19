import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Person } from "../../types/identities";

interface UsePersistentPersonsStoreInterface {
  persons: Person[];
  addPerson: (person: Person) => void;
  deletePerson: (id: string) => void;
}

export const usePersistentPersonsStore = create(
  persist<UsePersistentPersonsStoreInterface>(
    set => ({
      persons: [],
      addPerson: (person) => set((state) => ({ persons: [...state.persons, person] })),
      deletePerson: (id) => set((state) => ({ persons: state.persons.filter(person => person.nrn !== id) })),
    }),
    {
      name: "personsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
