import { FC } from 'react';
import styles from './Capsule.module.scss';
import { CapsuleProps } from './Capsule.types';

const Capsule: FC<CapsuleProps> = ({ Prefix, Title, Subheader, Suffix, onClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main} onClick={onClick}>
        <div className={styles.prefix}>
          {Prefix}
        </div>
        <div>
          <h5 className={styles.title}>{Title}</h5>
          <h6 className={styles.subheader}>{Subheader}</h6>
        </div>
      </div>
      <div className={styles.suffix}>
        {Suffix}
      </div>
    </div>
  )
}

export default Capsule;