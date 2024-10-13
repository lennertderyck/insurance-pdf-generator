import { FC } from 'react';
import { Broker } from '../../../types/identities';
import { CapsuleProps } from '../../basics/Capsule/Capsule.types';
import Icon from '../../basics/Icon/Icon';
import Card from '../Card/Card';

interface Props {
  broker: Broker;
  Suffix?: CapsuleProps['Suffix'];
};

const BrokerCard: FC<Props> = ({ broker, Suffix }) => {
  return (
    <Card 
      Prefix={<Icon name="building-2-line" />}
      Title={broker.nameShort}
      Subheader={broker.name}
      Suffix={Suffix}
    />
  )
}

export default BrokerCard;