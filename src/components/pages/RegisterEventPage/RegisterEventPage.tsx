import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import Section from '../../elements/Section/Section';
import EventForm from '../../forms/EventForm/EventForm';

interface Props {};

const RegisterEventPage: FC<Props> = () => {
  const navigate = useNavigate();
  const addEvent = usePersistentEventsStore(state => state.addEvent);
  
  return (
    <>
      <Section
        icon="home-smile-2-fill"
        title="Nieuwe activiteit"
        subheader="Vul de gegevens in van de nieuwe activiteit."
        divider={false}
      >
        <EventForm onSubmit={(data) => {
          addEvent(data);
          navigate('/');
        }} />
      </Section>
    </>
  )
}

export default RegisterEventPage;