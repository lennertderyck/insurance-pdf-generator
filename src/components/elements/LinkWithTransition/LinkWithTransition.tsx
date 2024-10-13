import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import useNavigateWithTransition from '../../../utils/hooks/useNavigateWithTransition';

interface Props extends LinkProps {
  to: any;
};

const LinkWithTransition: FC<Props> = ({ children, to, className }) => {
  const navigate = useNavigateWithTransition();

  return (
    <button onClick={(e) => {
      navigate(to)
    }} className={className}>
      { children }
    </button>
  )
}

export default LinkWithTransition;