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
  
  const groupsRegistered = Object.keys(groups);
  const groupsRegisteredCount = groupsRegistered?.length;
  
  return (
    <Form ref={formRef}
      onSubmit={(data) => {
        onSubmit(data);
        formRef.current?.reset();
      }}
      defaultValues={{
        group: lastPerson?.group || groupsRegisteredCount === 1 ? groupsRegistered[0] : '',
        address: lastPerson?.address ?? {},
      }}
    >
      <Input label="Voornaam" name="name" />
      <Input label="Achternaam" name="lastName" />
      <Input label="Rijksregisternummer" name="nrn" />
      <SelectInput label="Groep" name="group">
        {Object.entries(groups).map(([groupId, groupInfo]) => (
          <option value={groupId}>{ groupInfo.name }</option>
        ))}
      </SelectInput>
      <h4 className="mt-4">Adres</h4>
      <Input label="Straat" name="address.street" />
      <Input label="Nummer" name="address.number" type="number" />
      <Input label="Postcode" name="address.postalcode" type="number" />
      <Input label="Stad/gemeente" name="address.city" />
      <button type="submit" className="mt-4">Persoon toevoegen</button>
    </Form>
  )
}

export default PersonForm;