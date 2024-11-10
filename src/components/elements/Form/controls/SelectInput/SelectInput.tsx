import { Children, FC } from 'react';
import { useController } from 'react-hook-form';
import AnimatedSelectInput from '../AnimatedSelectInput/AnimatedSelectInput';

interface Props {
  name: string;
  label: string;
  children?: React.ReactNode;
  options?: { value: string | number, label: string }[];
  value?: string | number;
  disabled?: boolean;
};

const SelectInput: FC<Props> = ({ label, name, options, children, disabled }) => {
  const finalOptions = Children.toArray(children).map((child: any) => ({ value: child.props.value, label: child.props.children })) || options;
  const { field } = useController({ name, defaultValue: finalOptions?.[0]?.value });
  
  const disabledPropSet = disabled !== undefined;
  const insufficientOptions = finalOptions.length < 2;
  const canDisableForInsufficientOptions = disabledPropSet === false && insufficientOptions;
  
  return (
    <AnimatedSelectInput 
      label={label}
      name={name}
      options={finalOptions}
      onChange={field.onChange}
      value={field.value}
      disabled={canDisableForInsufficientOptions}
    />
  )
}

export default SelectInput;