import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { PersonInput } from '../../../types/identities';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import Icon from '../../basics/Icon/Icon';
import Section from '../../elements/Section/Section';
import PersonForm from '../../forms/PersonForm/PersonForm';

interface Props {};

const EditPersonPage: FC<Props> = () => {
  const navigate = useNavigateWithTransition();
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
    <>
      <button onClick={() => navigate(-1)} className="flex flex-row gap-4 mb-12">
        <Icon name="arrow-left-line" />
        <span>Terug naar overzicht</span>
      </button>
      <Section
        icon="shining-fill"
        title={`${personDetails?.name} ${personDetails?.lastName}`}
        subheader="Pas de gegevens van de persoon aan."
      >
        <PersonForm defaultValues={personDetails} onSubmit={submitPerson} />
      </Section>
    </>
  )
}

export default EditPersonPage;