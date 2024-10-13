import { FC } from 'react';
import Icon from '../../basics/Icon/Icon';
import LinkWithTransition from '../../elements/LinkWithTransition/LinkWithTransition';

interface Props {};

const OnboardingInfoPage: FC<Props> = () => {
  return (
    <div className="flex flex-col items-center *:text-center">
      <Icon name="survey-line" size="xlarge" className="mb-8 ani-icon" />
      <h3 className="mb-4 ani-title">Hoe werkt het?</h3>
      <p>Je voegt de gegevens van je {`kind(eren)`} toe, registreert een activiteit en hierna kan je zelf een formulier genereren</p>
      <div className="mt-8 flex flex-row gap-4">
        <LinkWithTransition to={-1}>Vorige</LinkWithTransition>
        <LinkWithTransition to="/onboarding/step/persons">Volgende</LinkWithTransition>
      </div>
    </div>
  )
}

export default OnboardingInfoPage;