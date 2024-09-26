import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { PersonInput } from '../../../types/identities';
import Section from '../../elements/Section/Section';
import PersonForm from '../../forms/PersonForm/PersonForm';

interface Props {};

const EditPersonPage: FC<Props> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const personId = params.id;
  
  const personDetails = usePersistentPersonsStore(state => state.persons.find(person => person.id === personId));
  const editPerson = usePersistentPersonsStore(state => state.editPerson);
  
  if (!personDetails || !personId) return <>Geen persoon gevonden</>;
  
  const submitPerson = (person: PersonInput) => {
    editPerson(personId, person);  
    navigate('/');
  }
    
  return (
    <Section 
      icon="shining-fill"
      title={`Bewerk ${personDetails?.name} ${personDetails?.lastName}`}
      subheader="Pas de gegevens van de persoon aan."
      divider={false}
    >
      <PersonForm defaultValues={personDetails} onSubmit={submitPerson} />
    </Section>
  )
}

export default EditPersonPage;