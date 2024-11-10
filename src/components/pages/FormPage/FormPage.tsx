import { FC, useState } from 'react';
import { usePersistentEventsStore } from "../../../state/stores/usePersistentEventsStore";
import { usePersistentPersonsStore } from "../../../state/stores/usePersistentPersonsStore";
import Dialog from '../../elements/Dialog/Dialog';
import ManageEventsSection from '../../elements/ManageEventsSection/ManageEventsSection';
import ManagePersonsSection from '../../elements/ManagePersonsSection/ManagePersonsSection';
import Section from "../../elements/Section/Section";
import GenerateForm from "../../forms/GenerateForm/GenerateForm";


interface Props {};

const FormPage: FC<Props> = () => {
  const persons = usePersistentPersonsStore(state => state.persons);    
  const store = usePersistentEventsStore();
  const events = store.availableOptions();

  const handleGenerateByForm = (data: any) => {
    const autoExport = true || data.export;
    const persons = Object.keys(data.persons).filter((key) => data.persons[key]);
    persons.forEach(async (id: string) => {
      window.open(`/generate?person=${id}&event=${data.event}&broker=${data.broker}&auto=${autoExport}`);
    })
  }
  
  const [value, setValue] = useState<string | number | null>(1)
  
  return (
    <>
      {/* <Dialog
        icon="spy-fill"
        Title="Privacy"
        className="mb-12 md:mb-16"
      >
        Je gegevens worden uitsluitend lokaal opgeslagen en verwerkt. Hierdoor blijven ze volledig in jouw beheer en wordt de veiligheid van je data gegarandeerd. Je data wordt dus niet met ons of externe partijen gedeeld.
      </Dialog> */}
      <div className="divide-y *:py-12">
        <div style={{ viewTransitionName: 'personsRegister' }}>
          <ManagePersonsSection />
        </div>
        <div style={{ viewTransitionName: 'eventsRegister' }}>
          <ManageEventsSection />
        </div>
        <Section
          title="Formulier genereren"
          subheader="Genereer een formulier voor geselecteerde personen en activiteit"
          icon="file-pdf-2-fill"
        >
          <div className="*:text-red-500">
            {persons?.length === 0 && <p>Voeg eerst een persoon toe om het formulier te genereren</p>}
            {events?.length === 0 && <p>Voeg eerst de gegevens van een activiteit toe om het formulier te genereren</p>}
          </div>
          {(events?.length > 0 && events?.length > 0) && <GenerateForm onSubmit={handleGenerateByForm} />}
        </Section>
      </div>
      <Dialog
        icon="alarm-warning-line"
        Title={<h6 className="font-semibold">Opmerking voor (groeps)leiding</h6>}
      >
        Gegevens worden rechtstreeks uit de Groepsadministratie overgenomen. Zie "Groepsinstellingen" voor aanpassingen.
      </Dialog>
    </>
  )
}

export default FormPage;