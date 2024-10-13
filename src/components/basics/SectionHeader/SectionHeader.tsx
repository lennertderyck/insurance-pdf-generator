import { CSSProperties, FC, ReactNode } from 'react';
import Icon from '../Icon/Icon';
import { AvailableIcons } from '../Icon/Icon.types';
import styles from './SectionHeader.module.scss';

export interface SectionHeaderProps {
  icon?: AvailableIcons;
  title: ReactNode;
  subheader: string;
  Suffix?: ReactNode;
  sectionHeaderStyle?: CSSProperties;
  onSectionHeaderClick?: () => void;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, subheader, icon = 'shining-fill', Suffix, sectionHeaderStyle, onSectionHeaderClick }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-row gap-4" style={sectionHeaderStyle}>
        <Icon name={icon} size="medium"  />
        <div className={styles.titleSection}>
          <div onClick={onSectionHeaderClick}>
            <h2 className={styles.title}>{ title }</h2>
            <p>{ subheader }</p>
          </div>
          <div>
            {Suffix}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader;