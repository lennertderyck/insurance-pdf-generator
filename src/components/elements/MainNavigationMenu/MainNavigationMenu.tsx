import { FC, MouseEventHandler, useState } from 'react';
import { AvailableIcons } from '../../basics/Icon/Icon.types';
import MainNavigationItem from '../MainNavigationItem/MainNavigationItem';
import styles from './MainNavigationMenu.module.scss';

const ITEMS: { icon: AvailableIcons, to: any, children: string }[] = [
  { icon: 'file-pdf-2-fill', to: '/', children: 'Formulieren' },
  { icon: 'shining-fill', to: '/persons', children: 'Personen' },
  { icon: 'home-smile-2-fill', to: '/events', children: 'Activiteiten' },
]

interface Props {};

const MainNavigationMenu: FC<Props> = () => {
  const [rect, setRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  
  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = (event.currentTarget.getBoundingClientRect());
    setRect(rect);
  }  
  
  return (
    <nav className={styles.container}>
      <div className={styles.indicator} style={{ top: rect.top, left: 16, height: rect.height, width: rect.width}} />
      {ITEMS.map((item) => (
        <div key={item.to} onMouseOver={handleMouseOver}>
          <MainNavigationItem {...item} />
        </div>
      ))}
    </nav>
  )
}

export default MainNavigationMenu;