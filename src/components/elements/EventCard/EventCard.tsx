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
      actions={[
        // { icon: 'edit-2-line', onClick: onEdit },
        { icon: 'delete-bin-2-line', onClick: onDelete },
        { icon: event.archived ? 'inbox-unarchive-line' : 'inbox-archive-line', onClick: onArchive }
      ]}
    />
  )
}

export default EventCard;