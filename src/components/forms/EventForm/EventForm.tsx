import { FC, useRef } from 'react';
import Form from '../../elements/Form/Form';
import Input from '../../elements/Form/controls/Input/Input';

interface Props {
  onSubmit: (data: any) => void;
};

const EventForm: FC<Props> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  
  return (
    <Form ref={formRef} onSubmit={(data) => {
      onSubmit(data);
      formRef.current?.reset();
    }}>
      <Input label="Naam" name="name" />
      <Input label="Prijs" name="payment.amount" type="number" min={0} />
      <Input label="Betaald op" name="payment.date" type="date" />
      <Input label="Activiteit start" name="period.start" type="date" />
      <Input label="Activiteit eind" name="period.end" type="date" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default EventForm;