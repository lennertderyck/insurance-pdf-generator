import classNames from 'classnames';
import { FC, useMemo } from 'react';
import Capsule from '../../basics/Capsule/Capsule';
import { CapsuleProps } from '../../basics/Capsule/Capsule.types';
import Icon from '../../basics/Icon/Icon';
import { AvailableIcons } from '../../basics/Icon/Icon.types';

interface Props extends Pick<CapsuleProps, 'Title'> {
  children?: string;
  icon?: AvailableIcons;
  className?: string;
};

const Dialog: FC<Props> = ({ icon, children, Title, className }) => {
  const RenderedTitle = useMemo(() => {
    if (typeof Title === 'string') {
      return <h4 className="font-semibold">{Title}</h4>
    } else return Title;
  }, [Title]);
  
  return (
    <div className={classNames(
      'bg-gray-100 p-4 md:p-6 rounded-xl flex flex-row gap-4',
      className,
    )}>
      <Capsule 
        alignment="start"
        Prefix={icon ? <Icon name={icon} size="medium" /> : undefined}
        Title={RenderedTitle}
        Subheader={<p>{children}</p>}
      />
    </div>
  )
}

export default Dialog;