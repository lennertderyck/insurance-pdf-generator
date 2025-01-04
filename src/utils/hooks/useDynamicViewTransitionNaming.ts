import { useState } from "react";

interface TransitionInitiator {
  (callback: () => void):void;
}

/** 
 * A view transition name is assigned before the transition starts
 * through the `viewTransitionName` css property.
 */
type DynamicStyle = string | undefined;

interface DynamicViewTransitionNamingHook {
  (viewTransitionName: string): [string | undefined, TransitionInitiator];
}

const useDynamicViewTransitionNaming: DynamicViewTransitionNamingHook = (viewTransitionName: string) => {
  const [applyTransition, setApplyTransition] = useState(false);
  
  const startTransition: TransitionInitiator = (callback) => {
    if (!document.startViewTransition) {
      callback();
      setApplyTransition(false);
    } else {
      setApplyTransition(true);
      document
        .startViewTransition(callback)
        .finished.then(() => {
          setApplyTransition(false);
          console.log('endTransition');
        })
    }
  }
  
  const dynamicStyle: DynamicStyle = applyTransition  ? viewTransitionName : undefined;
  
  return [
    dynamicStyle,
    startTransition
  ]
}

export default useDynamicViewTransitionNaming;