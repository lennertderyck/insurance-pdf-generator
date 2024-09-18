import { FC } from 'react';
import { Person } from '../../../types/identities';
import Capsule from '../../basics/Capsule/Capsule';
import Icon from '../../basics/Icon/Icon';
import styles from './PersonCard.module.scss';

interface Props {
  person: Person;
};

const PersonCard: FC<Props> = ({ person }) => {
  return (
    <div className={styles.wrapper}>
      <Capsule 
        Prefix={<div className={styles.avatar}>
          <Icon name="user-2-line" size="medium" />
        </div>}
        Title={`${person.name} ${person.lastName}`}
        Subheader={person.nrn}
      />
    </div>
  )
}

export default PersonCard;