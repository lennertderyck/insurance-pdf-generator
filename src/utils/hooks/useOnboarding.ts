import { usePersistentGeneralStore } from "../../state/stores/usePersistentGeneralStore";
import useNavigateWithTransition from "./useNavigateWithTransition";

const STEPS = ['intro', 'info', 'broker', 'persons', 'events', 'ready'];

const useOnboarding = (currentStep?: string) => {
  const navigate = useNavigateWithTransition();
  const stepsTaken = usePersistentGeneralStore(state => state.onboardingSteps);
  const setOnboardingStep = usePersistentGeneralStore(state => state.setOnboardingStep);
  const isOnboarded = stepsTaken?.length === STEPS.length;
  const nextStep = STEPS[stepsTaken.length];
  
  const confirmStep = () => {
    if (currentStep) {
      setOnboardingStep(currentStep);
      navigate(`/onboarding/step/${nextStep}`);
    }
  }
  
  return {
    isOnboarded,
    confirmStep,
    stepsTaken,
    nextStep,
  }
}

export default useOnboarding;