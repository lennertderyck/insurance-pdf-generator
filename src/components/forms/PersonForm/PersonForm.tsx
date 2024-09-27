import { FC, useRef } from 'react';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Person } from '../../../types/identities';
import { groups } from '../../../utils/data/groups';
import Form from '../../elements/Form/Form';
import Input from '../../elements/Form/controls/Input/Input';
import SelectInput from '../../elements/Form/controls/SelectInput/SelectInput';

interface Props {
  onSubmit: (data: any) => void;
  defaultValues?: Partial<Person>;
};

const PersonForm: FC<Props> = ({ onSubmit, defaultValues }) => {
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
        ...defaultValues,
      }}
    >
      <Input label="Lidnummer ziekenfonds" name="clientId" />
      <div className="flex flex-row gap-4 mt-4">
        <div className="flex-1">
          <Input label="Voornaam" name="name" />
        </div>
        <div className="flex-1">
          <Input label="Achternaam" name="lastName" />
        </div>
        </div>
      <Input label="Rijksregisternummer" name="nrn" />
      <SelectInput label="Groep" name="group">
        {Object.entries(groups).map(([groupId, groupInfo]) => (
          <option key={groupId} value={groupId}>{ groupInfo.name }</option>
        ))}
      </SelectInput>
      <h4 className="mt-4">Adres</h4>
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <Input label="Straat" name="address.street" />
        </div>
        <div className="w-24">
          <Input label="Huisnummer" name="address.number" type="number" />
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <div className="w-40">
          <Input label="Postcode" name="address.postalcode" type="number" />
        </div>
        <div className="flex-1">
          <Input label="Stad/gemeente" name="address.city" />
        </div>
      </div>
      <button type="submit" className="mt-4">Persoon opslaan</button>
    </Form>
  )
}

export default PersonForm;