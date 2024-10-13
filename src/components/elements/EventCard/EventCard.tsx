import dayjs from 'dayjs';
import { FC } from 'react';
import { Event } from '../../../types/identities';
import Icon from '../../basics/Icon/Icon';
import Card from '../Card/Card';

interface Props {
  event: Event;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onArchive?: () => void;
};

const EventCard: FC<Props> = ({ event, onClick, onEdit, onDelete, onArchive }) => {
  const eventStart = dayjs(event.period.start).format('DD MMMM YYYY');
  const eventEnd = dayjs(event.period.end).format('DD MMMM YYYY');
  
  return (
    <Card 
      onClick={onClick}
      Prefix={<Icon name="home-smile-2-line" />}
      Title={event.name} 
      Subheader={`${eventStart} tot ${eventEnd}`} 
      Suffix={
        <div className="flex flex-row gap-4">
          {onEdit ? 
            <button onClick={onEdit} disabled>
              <Icon name="edit-2-line" />
            </button> :
            undefined}
          {onDelete ? 
            <button onClick={onDelete}>
              <Icon name="delete-bin-2-line" />
            </button> :
            undefined}
          {onArchive ? 
            <button onClick={onArchive}>
              <Icon name={event.archived ? 'inbox-unarchive-line' : 'inbox-archive-line'} />
            </button> :
            undefined}
        </div>
      }
    />
  )
}

export default EventCard;