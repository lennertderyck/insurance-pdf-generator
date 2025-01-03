import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import styles from './CardGroup.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {};

const CardGroup: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.container, className)} {...props} />
  )
}

export default CardGroup;