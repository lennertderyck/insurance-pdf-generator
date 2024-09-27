import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Person } from "../../types/identities";

interface UsePersistentPersonsStoreInterface {
  persons: Person[];
  addPerson: (person: Person) => void;
  deletePerson: (id: string) => void;
  editPerson: (id: string, personInput: Partial<Person>) => void;
  import: (persons: Person[]) => void;
}

export const usePersistentPersonsStore = create(
  persist<UsePersistentPersonsStoreInterface>(
    set => ({
      persons: [],
      addPerson: (person) => set((state) => {
        const id = uuidv4();
        return ({ persons: [...state.persons, { id, ...person }] })
      }),
      editPerson: (id, personInput) => set((state) => ({ persons: state.persons.map(p => p.id === id ? {...p, ...personInput} : p)})),
      deletePerson: (id) => set((state) => ({ persons: state.persons.filter(person => person.id !== id) })),
      import: (persons) => set({ persons }),
    }),
    {
      name: "personsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
