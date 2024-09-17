import { FC, InputHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};

const Input: FC<Props> = ({ name, label, ...otherProps }) => {
  const methods = useFormContext();
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>{ label }</label>
      <input id={id} {...methods.register(name)} {...otherProps} />
    </div>
  )
}

export default Input;