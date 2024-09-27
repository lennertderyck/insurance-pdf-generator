import { v4 as uuid4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface References {
  person: string;
  event: string;
  broker: string;
}

interface GeneratedForm {
  id: string;
  refs: References;
}

interface UsePersistentFormsStoreInterface {
  forms: GeneratedForm[];
  storeForm: (refs: References) => void;
  deleteFormByRef: (refs: Partial<References>) => void;
}

export const usePersistentFormsStore = create(
  persist<UsePersistentFormsStoreInterface>(
    set => ({
      forms: [],
      storeForm: (refs) => set(state => {
        const id = uuid4();
        const newForm = { id, refs };
        return { forms: [...state.forms, newForm] };
      }),
      deleteFormByRef: (refs) => set(state => {
        return { forms: state.forms.filter(form => {
          const savedFormRefs = Object.values(form.refs);
          const deletedRefs = Object.values(refs);
          return savedFormRefs.some(ref => deletedRefs.includes(ref));
        })}
      })
    }),
    {
      name: "formsStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);