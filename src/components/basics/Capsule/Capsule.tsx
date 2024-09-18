import { FC, ReactNode } from 'react';
import styles from './Capsule.module.scss';

interface Props {
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  Title?: ReactNode;
  Subheader?: ReactNode;
};

const Capsule: FC<Props> = ({ Prefix, Title, Subheader, Suffix}) => {
  return (
    <div className={styles.container}>
      <div className={styles.prefix}>
        {Prefix}
      </div>
      <div>
        <h5 className={styles.title}>{Title}</h5>
        <h6 className={styles.subheader}>{Subheader}</h6>
      </div>
      <div className={styles.suffix}>
        {Suffix}
      </div>
    </div>
  )
}

export default Capsule;