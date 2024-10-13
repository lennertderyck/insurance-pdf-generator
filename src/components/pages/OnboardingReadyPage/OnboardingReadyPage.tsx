import { FC } from 'react';
import useOnboarding from '../../../utils/hooks/useOnboarding';
import Icon from '../../basics/Icon/Icon';

interface Props {};

const OnboardingReadyPage: FC<Props> = () => {
  const confirmStep = useOnboarding('ready').confirmStep;
  
  return (
    <div>
      <Icon name="flag-2-line" size="xlarge" className="mb-4 mx-auto ani-icon" />
      <h3 className="mb-8 text-center ani-title">Je bent klaar!</h3>
      <p>Genereer je eerste formulier</p>
      <div className="mt-8 flex flex-row gap-4 justify-center">
        <button onClick={confirmStep} className="button">Volgende</button>
      </div>
    </div>
  )
}

export default OnboardingReadyPage;