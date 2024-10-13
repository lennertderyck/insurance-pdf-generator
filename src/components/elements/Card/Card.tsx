import classNames from 'classnames';
import { FC } from 'react';
import Capsule from '../../basics/Capsule/Capsule';
import { CapsuleProps } from '../../basics/Capsule/Capsule.types';
import styles from './Card.module.scss';

interface Props extends CapsuleProps {};

const Card: FC<Props> = (props) => {
  return (
    <div className={classNames(styles.wrapper, props.onClick && styles.hasClickEvent)}>
      <Capsule {...props} />
    </div>
  )
}

export default Card;