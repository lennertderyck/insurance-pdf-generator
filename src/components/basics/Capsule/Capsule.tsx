import classNames from 'classnames';
import { FC, useMemo } from 'react';
import styles from './Capsule.module.scss';
import { CapsuleProps } from './Capsule.types';

const Capsule: FC<CapsuleProps> = ({ Prefix, Title, Subheader, Suffix, onClick, alignment = 'center'}) => {
  const alignlentClass = {
    start: styles.alignStart,
    center: styles.alignCenter
  }[alignment];
  
  const RenderedTitle = useMemo(() => {
    if (typeof Title === 'string') {
      return <h5 className={styles.title}>{Title}</h5>
    } else return <div>{Title}</div>
  }, [Title]);
  
  const RenderedSubheader = useMemo(() => {
    if (typeof Subheader === 'string') {
      return <h6 className={styles.subheader}>{Subheader}</h6>
    } else return <div>{Subheader}</div>
  }, [Subheader]);
  
  return (
    <div className={classNames(styles.container, alignlentClass)}>
      <div className={styles.main} onClick={onClick}>
        <div className={styles.prefix}>
          {Prefix}
        </div>
        <div>
          {RenderedTitle}
          {RenderedSubheader}
        </div>
      </div>
      <div className={styles.suffix}>
        {Suffix}
      </div>
    </div>
  )
}

export default Capsule;