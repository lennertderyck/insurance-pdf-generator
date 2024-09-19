import { FC } from 'react';
import { Person } from '../../../types/identities';
import { groups } from '../../../utils/data/groups';
import Capsule from '../../basics/Capsule/Capsule';
import Icon from '../../basics/Icon/Icon';

interface Props {
  person: Person;
  onDelete?: () => void;
};

const PersonCard: FC<Props> = ({ person, onDelete }) => {
  const groupInfo = groups?.[person?.group as keyof typeof groups];
  const subheaderParts = [groupInfo?.name, person?.nrn];
  
  return (
    <Capsule 
      Prefix={<Icon name="shining-line" />}
      Title={`${person.name} ${person.lastName}`}
      Subheader={subheaderParts.join(' · ')} 
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

export default PersonCard;