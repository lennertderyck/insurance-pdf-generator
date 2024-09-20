import { FC } from 'react';
import { Person } from '../../../types/identities';
import { groups } from '../../../utils/data/groups';
import Capsule from '../../basics/Capsule/Capsule';
import Icon from '../../basics/Icon/Icon';

interface Props {
  person: Person;
};

const GenerateCard: FC<Props> = ({ person }) => {
  const groupInfo = groups?.[person?.group as keyof typeof groups];
  
  const subheaderParts = [groupInfo?.name, person?.nrn];
  
  return (
    <Capsule 
      Prefix={<Icon name="file-pdf-2-line" />}
      Title={`${person.name} ${person.lastName}`}
      Subheader={subheaderParts.join(' · ')} 
      // description={`${event.period.start} - ${event.period.end}`}
    />
  )
}

export default GenerateCard;