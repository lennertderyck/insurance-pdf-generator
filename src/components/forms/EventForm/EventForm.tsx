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
      <h4 className="mt-4">Betaling</h4>
      <Input label="Prijs" name="payment.amount" type="number" min={0} />
      <Input label="Betaald op" name="payment.date" type="date" />
      <h4 className="mt-4">Periode</h4>
      <Input label="Startdatum" name="period.start" type="date" />
      <Input label="Einddatum" name="period.end" type="date" />
      <button type="submit" className="mt-4">Submit</button>
    </Form>
  )
}

export default EventForm;