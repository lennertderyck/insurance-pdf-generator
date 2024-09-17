import { FC, useRef } from 'react';
import Form from '../../elements/Form/Form';
import Input from '../../elements/Form/controls/Input/Input';

interface Props {
  onSubmit: (data: any) => void;
};

const PersonForm: FC<Props> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form ref={formRef} onSubmit={(data) => {
      onSubmit(data);
      formRef.current?.reset();
    }}>
      <Input label="Voornaam" name="name" />
      <Input label="Achternaam" name="lastName" />
      <Input label="Rijksregisternummber" name="nrn" />
      <Input label="Straat" name="address.street" />
      <Input label="Nummer" name="address.number" type="number" />
      <Input label="Postcode" name="address.postalcode" type="number" />
      <Input label="Stad/gemeente" name="address.city" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default PersonForm;