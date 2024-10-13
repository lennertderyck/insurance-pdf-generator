import { FC } from 'react';
import Icon from '../../basics/Icon/Icon';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';

interface Props {};

const OnboardingReadyPage: FC<Props> = () => {
  return (
    <div>
      <Icon name="flag-2-line" size="xlarge" className="mb-4 mx-auto ani-icon" />
      <h3 className="mb-8 text-center ani-title">Je bent klaar!</h3>
      <p>Genereer je eerste formulier</p>
      <div className="mt-8 flex flex-row gap-4 justify-center">
        <LinkWithTransition to="/">Genereren</LinkWithTransition>
      </div>
    </div>
  )
}

export default OnboardingReadyPage;