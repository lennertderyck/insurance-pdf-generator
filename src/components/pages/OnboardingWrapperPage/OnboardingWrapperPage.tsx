import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './OnboardingWrapperPage.module.scss';

interface Props {};

const OnboardingWrapperPage: FC<Props> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}

export default OnboardingWrapperPage;