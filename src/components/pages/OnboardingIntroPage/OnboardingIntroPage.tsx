import { FC } from 'react';
import Icon from '../../basics/Icon/Icon';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';

interface Props {};

const OnboardingIntroPage: FC<Props> = () => {
  return (
    <div className="flex flex-col items-center *:text-center">
      <Icon name="refund-line" size="xlarge" className="mb-8 ani-icon" />
      <h3 className="mb-4 ani-title">Refunidy</h3>
      <p>Genereer automatisch de attesten voor kampen en jaarwerking</p>
      <LinkWithTransition to="/onboarding/step/broker" className="mt-4">Volgende</LinkWithTransition>
    </div>
  )
}

export default OnboardingIntroPage;