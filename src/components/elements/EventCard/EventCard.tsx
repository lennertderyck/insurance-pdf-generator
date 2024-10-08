import dayjs from 'dayjs';
import { FC } from 'react';
import { Event } from '../../../types/identities';
import Capsule from '../../basics/Capsule/Capsule';
import Icon from '../../basics/Icon/Icon';

interface Props {
  event: Event;
  onDelete?: () => void;
};

const EventCard: FC<Props> = ({ event, onDelete }) => {
  const eventStart = dayjs(event.period.start).format('DD MMMM YYYY');
  const eventEnd = dayjs(event.period.end).format('DD MMMM YYYY');
  
  return (
    <Capsule 
      Prefix={<Icon name="home-smile-2-line" />}
      Title={event.name} 
      Subheader={`${eventStart} tot ${eventEnd}`} 
      Suffix={
        onDelete ? 
          <button onClick={onDelete}>
            <Icon name="delete-bin-2-line" />
          </button> :
          undefined
      }
    />
  )
}

export default EventCard;