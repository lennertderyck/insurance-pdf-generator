import { FC } from 'react';
import useOnboarding from '../../../utils/hooks/useOnboarding';
import Icon from '../../basics/Icon/Icon';

interface Props {};

const OnboardingIntroPage: FC<Props> = () => {
  const confirmStep = useOnboarding('intro').confirmStep;
  
  return (
    <div className="flex flex-col items-center *:text-center">
      <Icon name="refund-line" size="xlarge" className="mb-8 ani-icon" />
      <h3 className="mb-4 ani-title">Refunidy</h3>
      <p>Genereer automatisch de attesten voor kampen en jaarwerking</p>
      <button onClick={confirmStep}>Volgende</button>
    </div>
  )
}

export default OnboardingIntroPage;