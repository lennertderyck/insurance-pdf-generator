import { FC, useRef } from 'react';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { groups } from '../../../utils/data/groups';
import Form from '../../elements/Form/Form';
import Input from '../../elements/Form/controls/Input/Input';
import SelectInput from '../../elements/Form/controls/SelectInput/SelectInput';

interface Props {
  onSubmit: (data: any) => void;
};

const PersonForm: FC<Props> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const persons = usePersistentPersonsStore(state => state.persons);
  const lastPerson = persons?.[persons?.length - 1];
  
  console.log(lastPerson)

  return (
    <Form ref={formRef}
      onSubmit={(data) => {
        onSubmit(data);
        formRef.current?.reset();
      }}
      defaultValues={{
        group: lastPerson?.group ?? '',
        address: lastPerson.address ?? {},
      }}
    >
      <Input label="Voornaam" name="name" />
      <Input label="Achternaam" name="lastName" />
      <Input label="Rijksregisternummer" name="nrn" />
      <h4 className="mt-4">Adres</h4>
      <Input label="Straat" name="address.street" />
      <Input label="Nummer" name="address.number" type="number" />
      <Input label="Postcode" name="address.postalcode" type="number" />
      <Input label="Stad/gemeente" name="address.city" />
      <h4 className="mt-4">Groep</h4>
      <SelectInput label="Groep" name="group">
        {Object.entries(groups).map(([groupId, groupInfo]) => (
          <option value={groupId}>{ groupInfo.name }</option>
        ))}
      </SelectInput>
      <button type="submit" className="mt-4">Submit</button>
    </Form>
  )
}

export default PersonForm;