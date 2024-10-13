import { FC } from 'react';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import Icon from '../../basics/Icon/Icon';
import ManageEventsSection from '../../elements/ManageEventsSection/ManageEventsSection';

interface Props {};

const EventsOverviewPage: FC<Props> = () => {
  const navigate = useNavigateWithTransition();
  
  return (
    <div style={{ viewTransitionName: 'eventsRegister' }}>
      <button onClick={() => navigate('/')} className="flex flex-row gap-4 mb-12">
        <Icon name="arrow-left-line" />
        <span>Terug naar overzicht</span>
      </button>
      <ManageEventsSection variant="detailed" />
    </div>
  )
}

export default EventsOverviewPage;