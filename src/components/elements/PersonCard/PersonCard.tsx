import { FC } from 'react';
import { Person } from '../../../types/identities';
import { groups } from '../../../utils/data/groups';
import Icon from '../../basics/Icon/Icon';
import Card from '../Card/Card';

interface Props {
  person: Person;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const PersonCard: FC<Props> = ({ person, onClick, onEdit, onDelete }) => {
  const groupInfo = groups?.[person?.group as keyof typeof groups];
  const subheaderParts = [groupInfo?.name, person?.nrn];
  
  return (
    <Card 
      onClick={onClick}
      Prefix={<Icon name="shining-line" />}
      Title={`${person.name} ${person.lastName}`}
      Subheader={subheaderParts.join(' · ')}
      actions={[
        { icon: 'edit-2-line', onClick: onEdit },
        { icon: 'delete-bin-2-line', onClick: onDelete },
        { icon: 'more-2-fill', onClick: () => console.log('More') },
      ]}
    />
  )
}

export default PersonCard;