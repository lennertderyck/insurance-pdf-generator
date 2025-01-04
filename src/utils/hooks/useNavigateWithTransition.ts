import { flushSync } from "react-dom";
import { NavigateFunction, useNavigate } from "react-router-dom";


const useNavigateWithTransition = (): NavigateFunction => {
  const defaultNavigate = useNavigate();
  const animatedNavigate = (path: any) => {
    if (!document.startViewTransition) {
      defaultNavigate(path);
    }
    else document.startViewTransition(() => {
      flushSync(() => {
        defaultNavigate(path);
      });
    })
  }
  
  return animatedNavigate;
}

export default useNavigateWithTransition;