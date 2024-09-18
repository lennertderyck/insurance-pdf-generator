import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Person } from '../../../types/identities';
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
    <div className="p-16">
      <h3>Nieuwe persoon</h3>
      <PersonForm onSubmit={registerPerson} />
    </div>
  )
}

export default RegisterPersonPage;