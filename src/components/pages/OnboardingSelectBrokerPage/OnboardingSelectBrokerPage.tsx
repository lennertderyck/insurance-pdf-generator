import { FC } from 'react';
import { usePersistentGeneralStore } from '../../../state/stores/usePersistentGeneralStore';
import { brokers } from '../../../utils/data/brokers';
import useOnboarding from '../../../utils/hooks/useOnboarding';
import Icon from '../../basics/Icon/Icon';
import BrokerCard from '../../elements/BrokerCard/BrokerCard';
import CardGroup from '../../elements/CardGroup/CardGroup';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';

interface Props {};

const OnboardingSelectBrokerPage: FC<Props> = () => {
  const confirmStep = useOnboarding('broker').confirmStep;
  const selectedBroker = usePersistentGeneralStore(state => state.broker);
  const selectBroker = usePersistentGeneralStore(state => state.setBroker);
  const brokersList = Object.entries(brokers);
  
  return (
    <div className="flex flex-col items-center">
    <Icon name="survey-line" size="xlarge" className="mb-8 ani-icon" />
    <div className="mb-4 *:text-center">
      <h3 className="ani-title">Ziekenfonds</h3>
      <p>Selecteer je ziekenfonds</p>
    </div>
    <div className="mt-4">
      <CardGroup>
        {brokersList.map(([key, broker]) => (
          <div key={key} onClick={() => selectBroker(key)}>
            <BrokerCard 
              broker={{ id: key, name: broker.name, nameShort: broker.nameShort }} 
              Suffix={<Icon name="check-line" className={selectedBroker === key ? 'opacity-100' : 'opacity-0'} />}
            />
          </div>
        ))}
      </CardGroup>
    </div>
    <div className="mt-8 flex flex-row gap-4">
      <LinkWithTransition to={-1}>Vorige</LinkWithTransition>
      <button onClick={confirmStep} className="button">Volgende</button>
    </div>
  </div>
  )
}

export default OnboardingSelectBrokerPage;