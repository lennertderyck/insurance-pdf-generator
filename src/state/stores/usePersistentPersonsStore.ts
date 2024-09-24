import { v4 as uuidv4 } from 'uuid';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Person, PersonInput } from "../../types/identities";


interface UsePersistentPersonsStoreInterface {
  persons: Person[];
  addPerson: (person: PersonInput) => void;
  editPerson: (id: string, input: PersonInput) => void;
  deletePerson: (id: string) => void;
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
    }),
    {
      name: "personsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
