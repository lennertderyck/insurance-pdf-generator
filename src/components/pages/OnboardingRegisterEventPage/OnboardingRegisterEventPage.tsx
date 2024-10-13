import { FC } from 'react';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import useOnboarding from '../../../utils/hooks/useOnboarding';
import Icon from '../../basics/Icon/Icon';
import CardGroup from '../../elements/CardGroup/CardGroup';
import EventCard from '../../elements/EventCard/EventCard';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';
import EventForm from '../../forms/EventForm/EventForm';

interface Props {};

const OnboardingRegisterEventPage: FC<Props> = () => {
  const confirmStep = useOnboarding('events').confirmStep;

  const events = usePersistentEventsStore(state => state.events);
  const addEvent = usePersistentEventsStore(state => state.addEvent);
  
  return (
    <div>
      <Icon name="home-smile-2-line" size="xlarge" className="mb-4 mx-auto ani-icon" />
      <h3 className="mb-8 text-center ani-title">Registreer een activiteit</h3>
      {events.length === 0
        ? <EventForm onSubmit={addEvent} />
        : (
          <CardGroup>
            {events?.map((event) => (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            ))}
          </CardGroup>
        )
      }
      <div className="mt-8 flex flex-row gap-4 justify-center">
        <LinkWithTransition to={-1}>Vorige</LinkWithTransition>
        <button onClick={confirmStep} className="button">Volgende</button>
      </div>
    </div>
  )
}

export default OnboardingRegisterEventPage;