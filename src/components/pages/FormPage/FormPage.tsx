import { FC } from 'react';
import { Link } from "react-router-dom";
import { usePersistentEventsStore } from "../../../state/stores/usePersistentEventsStore";
import { usePersistentPersonsStore } from "../../../state/stores/usePersistentPersonsStore";
import { Person } from "../../../types/identities";
import EventCard from "../../elements/EventCard/EventCard";
import PersonCard from "../../elements/PersonCard/PersonCard";
import Section from "../../elements/Section/Section";
import GenerateForm from "../../forms/GenerateForm/GenerateForm";


interface Props {};

const FormPage: FC<Props> = () => {
  const persons = usePersistentPersonsStore(state => state.persons);
  const deletePerson = usePersistentPersonsStore(state => state.deletePerson);
  
  const events = usePersistentEventsStore(state => state.events);
  const deleteEvent = usePersistentEventsStore(state => state.deleteEvent);
    
  const handleDeletePerson = (person: Person) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze ${person.name} ${person.lastName} (${person.nrn}) wilt verwijderen?`);
    if (confirmed) {
      deletePerson(person.nrn);
    }
  }
  
  const handleDeleteEvent = (index: number) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze activiteit wilt verwijderen?`);
    if (confirmed) {
      deleteEvent(index);
    }
  }
  
  const handleGenerateByForm = (data: any) => {
    const persons = Object.keys(data.persons).filter((key) => data.persons[key]);
    persons.forEach(async (nrn: string) => {
      window.open(`/generate?person=${nrn}&event=${data.event}`);
    })
  }
  
  return (
    <>
      <Section
        icon="shining-fill"
        title="Geregistreerde personen"
        subheader="Voor deze personen kan je een formulier genereren"
        Suffix={<Link to="/persons/register" className="button mt-4">Voeg iemand toe</Link>}
      >
        {persons?.length === 0 && <p>Nog niemand toegevoegd</p>}
        {persons?.length > 0 && (
          <div className="flex flex-col divide-y border border-gray-200 w-full rounded-xl">
            { persons?.map((person) => (
              <div key={person.nrn} className="px-4 py-3">
                <PersonCard person={person} onDelete={() => handleDeletePerson(person)} />
              </div>
            ))}
          </div>
        )}
      </Section>
      <Section 
        title="Activiteiten"
        subheader="Activiteiten waarvoor je een formulier kan genereren"
        icon="home-smile-2-fill"
        Suffix={<Link to="/events/register" className="button mt-4">Voeg een activiteit toe</Link>}
      >
        {events?.length === 0 && <p>Nog geen activiteiten toegevoegd</p>}
        {events?.length > 0 && (
          <div className="flex flex-col divide-y border border-gray-200 w-full rounded-xl">
            {events?.map((event, index) => (
              <div key={index} className="px-4 py-3">
                <EventCard key={index} event={event} onDelete={() => handleDeleteEvent(index)} />
              </div>
            ))}
          </div>
        )}
      </Section>
      <Section
        title="Formulier genereren"
        subheader="Genereer een formulier voor geselecteerde personen en activiteit"
        icon="folders-fill"
      >
        <div className="*:text-red-500">
          {persons?.length === 0 && <p>Voeg eerst een persoon toe om het formulier te genereren</p>}
          {events?.length === 0 && <p>Voeg eerst de gegevens van een activiteit toe om het formulier te genereren</p>}
        </div>
        {(events?.length > 0 && events?.length > 0) && <GenerateForm onSubmit={handleGenerateByForm} />}
      </Section>
      <p className="mt-12">{`(Opmerking voor (groeps)leiding: Gegevens worden rechtstreeks uit de Groepsadministratie overgenomen. Zie "groepsinstellingen".)`}</p>
    </>
  )
}

export default FormPage;