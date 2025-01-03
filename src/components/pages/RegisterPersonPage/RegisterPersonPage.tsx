import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Person } from '../../../types/identities';
import Section from '../../elements/Section/Section';
import PersonForm from '../../forms/PersonForm/PersonForm';

interface Props {};

const RegisterPersonPage: FC<Props> = () => {
  const navigate = useNavigate();
  const addPerson = usePersistentPersonsStore(state => state.addPerson);

  const registerPerson = (person: Person) => {
    addPerson(person);
    navigate('/');
  }
  
  return (
    <Section 
      icon="shining-fill"
      title="Nieuwe persoon"
      subheader="Vul de gegevens in van de nieuwe persoon."
      divider={false}
      sectionHeaderStyle={{ viewTransitionName: 'personsRegister' }}
    >
      <PersonForm onSubmit={registerPerson} />
    </Section>
  )
}

export default RegisterPersonPage;