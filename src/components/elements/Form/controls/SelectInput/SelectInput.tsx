import classNames from 'classnames';
import { FC, SelectHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './SelectInput.module.scss';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
};

const SelectInput: FC<Props> = ({ label, name, ...otherProps }) => {
  const { register } = useFormContext();
  const id = useId();
  
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{ label }</label>
      <select {...register(name)} className={classNames(styles.controller)} {...otherProps} />
    </div>
  )
}

export default SelectInput;