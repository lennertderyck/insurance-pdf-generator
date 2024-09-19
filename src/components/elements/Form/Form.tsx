import { FC, forwardRef, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props extends PropsWithChildren {
  onSubmit: (data: any) => void;
  ref?: any;
  defaultValues?: any;
};

const Form: FC<Props> = forwardRef<HTMLFormElement, Props>(({ onSubmit, children, defaultValues, }, ref) => {
  const methods = useForm({ defaultValues});
  
  return (
    <FormProvider {...methods}>
      <form ref={ref} onSubmit={methods.handleSubmit(onSubmit)}>
        { children}
      </form>
    </FormProvider>
  )
})

export default Form;