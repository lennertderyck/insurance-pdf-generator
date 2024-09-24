import classNames from 'classnames';
import { FC, InputHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};

const Input: FC<Props> = ({ name, label, className, ...otherProps }) => {
  const methods = useFormContext();
  const id = useId();
  
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{ label }</label>
      <input id={id} className={classNames(styles.controller, className)} {...methods.register(name)} {...otherProps} />
    </div>
  )
}

export default Input;