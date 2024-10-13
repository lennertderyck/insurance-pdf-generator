import { CSSProperties, FC, PropsWithChildren } from 'react';
import SectionHeader, { SectionHeaderProps } from '../../basics/SectionHeader/SectionHeader';

interface Props extends SectionHeaderProps, PropsWithChildren {
  /** @deprecated Add dividers in page context */
  divider?: boolean;
  onSectionHeaderClick?: () => void;
  sectionHeaderStyle?: CSSProperties;
};

const Section: FC<Props> = ({ title, subheader, Suffix, icon, children, sectionHeaderStyle, onSectionHeaderClick }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-0 md:gap-24">
        <div className="min-w-[400px]">
          <SectionHeader 
            title={title} 
            subheader={subheader}
            Suffix={Suffix} 
            icon={icon}
            sectionHeaderStyle={sectionHeaderStyle}
            onSectionHeaderClick={onSectionHeaderClick}
          />
        </div>
        <div className="w-full">
          { children }
        </div>
      </div>
    </section>
  )
}

export default Section;