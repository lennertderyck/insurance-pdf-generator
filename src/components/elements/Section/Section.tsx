import { FC, PropsWithChildren } from 'react';
import SectionHeader, { SectionHeaderProps } from '../../basics/SectionHeader/SectionHeader';

interface Props extends SectionHeaderProps, PropsWithChildren {};

const Section: FC<Props> = ({ title, subheader, Suffix, icon, children }) => {
  return (
    <section className="w-full">
      <div className="flex flex-row gap-24">
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
      <hr />
    </section>
  )
}

export default Section;