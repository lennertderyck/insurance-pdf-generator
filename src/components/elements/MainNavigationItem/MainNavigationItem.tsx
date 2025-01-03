import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import Icon from '../../basics/Icon/Icon';
import { AvailableIcons } from '../../basics/Icon/Icon.types';
import styles from './MainNavigationItem.module.scss';

interface Props extends NavLinkProps {
  icon: AvailableIcons;
  children: ReactNode
};

const MainNavigationItem: FC<Props> = ({ className, children, icon, ...otherProps }) => {
  const navigate = useNavigateWithTransition();
  return (
    <NavLink
      onClick={(event)=>{ 
        event.preventDefault();
        navigate(otherProps.to as string);
      }}
      className={({ isActive }) => (
        classNames([
          styles.base,
          isActive && styles.active, className
        ])
      )} {...otherProps}
    >
      <Icon name={icon} />
      <div>
        { children }
      </div>
    </NavLink>
  )
}

export default MainNavigationItem;