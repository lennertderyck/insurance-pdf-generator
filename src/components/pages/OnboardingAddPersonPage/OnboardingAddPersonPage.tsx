import { FC } from 'react';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import Icon from '../../basics/Icon/Icon';
import CardGroup from '../../elements/CardGroup/CardGroup';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';
import PersonCard from '../../elements/PersonCard/PersonCard';
import PersonForm from '../../forms/PersonForm/PersonForm';

interface Props {};

const OnboardingAddPersonPage: FC<Props> = () => {
  const persons = usePersistentPersonsStore(state => state.persons);
  const addPerson = usePersistentPersonsStore(state => state.addPerson);
  
  return (
    <div>
      <Icon name="shining-line" size="xlarge" className="mb-4 mx-auto ani-icon" />
      <div className="mb-8 *:text-center">
        <h3 className="ani-title">Voeg een persoon toe</h3>
        {persons.length > 0 && <p>Deze personen zijn al geregistreerd</p>}
      </div>
      {persons.length === 0 
        ? <PersonForm onSubmit={addPerson} />
        : (
          <CardGroup>
              {persons?.map((person) => (
                <div key={person.id}>
                  <PersonCard person={person} />
                </div>
              ))}
          </CardGroup>
        )
      }
      <div className="mt-8 flex flex-row gap-4 justify-center">
        <LinkWithTransition to={-1}>Vorige</LinkWithTransition>
        <LinkWithTransition to="/onboarding/step/events">Volgende</LinkWithTransition>
      </div>
    </div>
  )
}

export default OnboardingAddPersonPage;