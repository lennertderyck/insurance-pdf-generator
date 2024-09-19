import { FC, ReactNode } from 'react';
import Icon from '../Icon/Icon';
import { AvailableIcons } from '../Icon/Icon.types';

export interface SectionHeaderProps {
  icon?: AvailableIcons;
  title: string;
  subheader: string;
  Suffix?: ReactNode;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title, subheader, icon = 'shining-fill', Suffix }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-row gap-4">
        <Icon name={icon} size="medium"  />
        <div>
          <h2 className="mb-2">{ title }</h2>
          <p>{ subheader }</p>
          <div>
            {Suffix}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader;