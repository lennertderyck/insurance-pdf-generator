import classNames from 'classnames';
import { FC } from 'react';
import Capsule from '../../basics/Capsule/Capsule';
import { CapsuleProps } from '../../basics/Capsule/Capsule.types';
import Icon from '../../basics/Icon/Icon';
import { AvailableIcons } from '../../basics/Icon/Icon.types';
import styles from './Card.module.scss';

interface Props extends CapsuleProps {
  actions?: {
    icon: AvailableIcons;
    onClick: (() => void) | undefined;
  }[];
};

const Card: FC<Props> = (props) => {
  return (
    <div className={classNames(styles.wrapper, props.onClick && styles.hasClickEvent)}>
      <Capsule 
        {...props}
        Suffix={
          <div className={styles.actionsWrapper}>
            <div className={styles.actions}>
              {props.actions?.filter(action => !!action.onClick).map(({ icon, onClick }, index) => (
                <button key={index} onClick={onClick}>
                  <Icon name={icon} />
                </button>
              ))}
            </div>
          </div>
        } 
      />
    </div>
  )
}

export default Card;