import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './MainNavigationItem.module.scss';

interface Props extends NavLinkProps {};

const MainNavigationItem: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <NavLink className={({ isActive }) => (
      classNames([
        styles.base,
        isActive && styles.active, className
      ])
    )} {...otherProps} />
  )
}

export default MainNavigationItem;