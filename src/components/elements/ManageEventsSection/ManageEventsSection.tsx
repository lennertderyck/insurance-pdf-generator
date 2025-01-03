import { FC } from 'react';
import { Link } from 'react-router-dom';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { shouldBeArchived } from '../../../utils/funcs/filters';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import CardGroup from '../CardGroup/CardGroup';
import EventCard from '../EventCard/EventCard';
import Section from '../Section/Section';

interface Props {
  variant?: 'default' | 'detailed';
};

const ManageEventsSection: FC<Props> = ({ variant }) => {
  const navigate = useNavigateWithTransition();
  const allEvents = usePersistentEventsStore(state => state.events);
  const deleteEvent = usePersistentEventsStore(state => state.deleteEvent);
  const archiveEvent = usePersistentEventsStore(state => state.archiveEvent);
  const handleEditEvent = (id: string) => navigate(`/events/${id}/edit`);
  const handleArchiveEvent = (id: string, archive?: boolean) => archiveEvent(id, archive);
  const handleDeleteEvent = (id: string) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze activiteit wilt verwijderen?`);
    if (confirmed) {
      deleteEvent(id);
    }
  }
  
  const events = allEvents?.filter(event => !shouldBeArchived(event));
  const archivedEvents = allEvents?.filter(shouldBeArchived);
  const hasArchivedEvents = archivedEvents?.length > 0;
  
  return (
    <Section 
      title="Activiteiten"
      subheader="Activiteiten waarvoor je een formulier kan genereren"
      icon="home-smile-2-fill"
      Suffix={<Link to="/events/register" className="button mt-4">Voeg een activiteit toe</Link>}
      onSectionHeaderClick={() => navigate('/events')}
    >
      <h4 className="mb-4">Beschikbare activiteiten</h4>
      {events?.length === 0 && <p>{hasArchivedEvents ? 'De-archiveer een event of maak een nieuw event aan' : 'Nog geen activiteiten toegevoegd'}</p>}
      {events?.length > 0 && (
        <CardGroup>
          {events?.map((event, index) => (
            <div key={index}>
              <EventCard 
                key={index} 
                event={event} 
                onDelete={() => handleDeleteEvent(event.id)} 
                onEdit={() => handleEditEvent(event.id)}
                onArchive={() => handleArchiveEvent(event.id)}
              />
            </div>
          ))}
        </CardGroup>
      )}
      {variant === 'detailed' && (<>
        <hr />
        <h4 className="mb-4">Gearchiveerd activiteiten</h4>
        {variant === 'detailed' && (
          <div className="my-4 px-4 py-2 rounded-xl bg-gray-100">
            <p>Evenementen worden na 2 maand automatisch gearchiveerd, tenzij je ze manueel {`(de-)archiveerd.`}</p>
          </div>
        )}
        { !hasArchivedEvents && <p>Geen gearchiveerde activiteiten</p> }
        { hasArchivedEvents && (
          <>
            <CardGroup>
              {archivedEvents?.map((event, index) => (
                <div key={index}>
                  <EventCard 
                    key={index} 
                    event={event} 
                    onClick={() => navigate(`/events`)}
                    onArchive={() => handleArchiveEvent(event.id, false)}
                  />
                </div>
              ))}
            </CardGroup>
          </>
        )}
      </>)}
    </Section>
  )
}

export default ManageEventsSection;