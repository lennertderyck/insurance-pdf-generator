import { FC } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { usePersistentEventsStore } from "../../../state/stores/usePersistentEventsStore";
import { usePersistentPersonsStore } from "../../../state/stores/usePersistentPersonsStore";
import { Person } from "../../../types/identities";
import Icon from '../../basics/Icon/Icon';
import EventCard from "../../elements/EventCard/EventCard";
import PersonCard from "../../elements/PersonCard/PersonCard";
import Section from "../../elements/Section/Section";
import GenerateForm from "../../forms/GenerateForm/GenerateForm";


interface Props {};

const FormPage: FC<Props> = () => {
  const navigate = useNavigate();
  
  const persons = usePersistentPersonsStore(state => state.persons);
  const deletePerson = usePersistentPersonsStore(state => state.deletePerson);
  
  const events = usePersistentEventsStore(state => state.events);
  const deleteEvent = usePersistentEventsStore(state => state.deleteEvent);
    
  const handleEditPerson = (person: Person) => navigate(`/persons/${person.id}/edit`);
  const handleDeletePerson = (person: Person) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze ${person.name} ${person.lastName} (${person.nrn}) wilt verwijderen?`);
    if (confirmed) {
      deletePerson(person.nrn);
    }
  }
  
  const handleDeleteEvent = (id: string) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze activiteit wilt verwijderen?`);
    if (confirmed) {
      deleteEvent(id);
    }
  }
  
  const handleGenerateByForm = (data: any) => {
    const autoExport = true || data.export;
    const persons = Object.keys(data.persons).filter((key) => data.persons[key]);
    persons.forEach(async (id: string) => {
      window.open(`/generate?person=${id}&event=${data.event}&broker=${data.broker}&auto=${autoExport}`);
    })
  }
  
  return (
    <>
      <div className="bg-gray-100 p-4 md:p-6 rounded-xl mb-12 md:mb-16 flex flex-row gap-4">
        <div>
          <Icon name="spy-fill" size="medium" />
        </div>
        <div>
          <h4 className="font-semibold mb-1 leading-5">Privacy</h4>
          <p>Je gegevens worden uitsluitend lokaal opgeslagen en verwerkt. Hierdoor blijven ze volledig in jouw beheer en wordt de veiligheid van je data gegarandeerd.<br/>Je data wordt dus niet met ons of externe partijen gedeeld.</p>
        </div>
      </div>
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
                <PersonCard person={person} onEdit={() => handleEditPerson(person)} onDelete={() => handleDeletePerson(person)} />
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
                <EventCard key={index} event={event} onDelete={() => handleDeleteEvent(event.id)} />
              </div>
            ))}
          </div>
        )}
      </Section>
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
      <p className="mt-12">{`(Opmerking voor (groeps)leiding: Gegevens worden rechtstreeks uit de Groepsadministratie overgenomen. Zie "groepsinstellingen".)`}</p>
    </>
  )
}

export default FormPage;