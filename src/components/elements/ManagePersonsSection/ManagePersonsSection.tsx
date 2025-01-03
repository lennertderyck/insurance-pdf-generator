import { FC } from 'react';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Person } from '../../../types/identities';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import CardGroup from '../CardGroup/CardGroup';
import LinkWithTransition from '../LinkWithTransition/LinkWithTransition';
import PersonCard from '../PersonCard/PersonCard';
import Section from '../Section/Section';

interface Props {};

const ManagePersonsSection: FC<Props> = () => {
  const navigate = useNavigateWithTransition();
  const persons = usePersistentPersonsStore(state => state.persons);
  const deletePerson = usePersistentPersonsStore(state => state.deletePerson);
  
  const handleEditPerson = (person: Person) => navigate(`/persons/${person.id}/edit`);
  const handleDeletePerson = (person: Person) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze ${person.name} ${person.lastName} (${person.nrn}) wilt verwijderen?`);
    if (confirmed) {
      deletePerson(person.nrn);
    }
  }
  
  return (
    <Section
      icon="shining-fill"
      title="Geregistreerde personen"
      subheader="Voor deze personen kan je een formulier genereren"
      Suffix={<LinkWithTransition to="/persons/register" className="button mt-4">Voeg iemand toe</LinkWithTransition>}
      onSectionHeaderClick={() => navigate('/persons')}
    >
      {persons?.length === 0 && <p>Nog niemand toegevoegd</p>}
      {persons?.length > 0 && (
        <CardGroup className="card-group">
          { persons?.map((person) => (
            <div key={person.nrn}>
              <PersonCard
                person={person} 
                onClick={() => navigate(`/persons`)}
                onEdit={() => handleEditPerson(person)} 
                onDelete={() => handleDeletePerson(person)}
              />
            </div>
          ))}
        </CardGroup>
      )}
    </Section>
  )
}

export default ManagePersonsSection;