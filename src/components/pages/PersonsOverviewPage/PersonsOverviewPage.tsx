import { FC } from 'react';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';
import Icon from '../../basics/Icon/Icon';
import ManagePersonsSection from '../../elements/ManagePersonsSection/ManagePersonsSection';

interface Props {};

const PersonsOverviewPage: FC<Props> = () => {
  const navigate = useNavigateWithTransition();

  return (
    <div style={{ viewTransitionName: 'personsRegister' }}>
      <button onClick={() => navigate('/')} className="flex flex-row gap-4 mb-12">
        <Icon name="arrow-left-line" />
        <span>Terug naar overzicht</span>
      </button>
      <ManagePersonsSection />
    </div>
  )
}

export default PersonsOverviewPage;