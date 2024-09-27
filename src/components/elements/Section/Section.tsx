import { FC, PropsWithChildren } from 'react';
import SectionHeader, { SectionHeaderProps } from '../../basics/SectionHeader/SectionHeader';

interface Props extends SectionHeaderProps, PropsWithChildren {
  divider?: boolean;
};

const Section: FC<Props> = ({ title, subheader, Suffix, icon, children, divider = true }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-0 md:gap-24">
        <div className="min-w-[400px]">
          <SectionHeader 
            title={title} 
            subheader={subheader} 
            Suffix={Suffix} 
            icon={icon}
          />
        </div>
        <div className="w-full">
          { children }
        </div>
      </div>
      {divider && <hr />}
    </section>
  )
}

export default Section;