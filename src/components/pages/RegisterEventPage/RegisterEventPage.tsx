import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import EventForm from '../../forms/EventForm/EventForm';

interface Props {};

const RegisterEventPage: FC<Props> = () => {
  const navigate = useNavigate();
  const addEvent = usePersistentEventsStore(state => state.addEvent);
  
  return (
    <>
      <EventForm onSubmit={(data) => {
        addEvent(data);
        navigate('/');
      }} />
    </>
  )
}

export default RegisterEventPage;