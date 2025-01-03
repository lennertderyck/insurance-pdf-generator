import { FC, useRef } from 'react';
import { getAvailableGroupsFromPersons } from '../../../utils/funcs/groups';
import Form from '../../elements/Form/Form';
import Input from '../../elements/Form/controls/Input/Input';
import SelectInput from '../../elements/Form/controls/SelectInput/SelectInput';

interface Props {
  onSubmit: (data: any) => void;
};

const EventForm: FC<Props> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const availableGroups = getAvailableGroupsFromPersons();
  
  return (
    <Form ref={formRef} onSubmit={(data) => {
      onSubmit(data);
      formRef.current?.reset();
    }}>
      <Input label="Beschrijving (bijvoorbeeld 'Giverkamp')" name="name" />
      <h4 className="mt-4">Betaling</h4>
      <div className="flex flex-row gap-4">
        <Input label="Prijs" name="payment.amount" type="number" min={0} />
        <Input label="Betaald op" name="payment.date" type="date" />
      </div>
      <h4 className="mt-4">Periode</h4>
      <div className="flex flex-row gap-4">
        <Input label="Startdatum" name="period.start" type="date" />
        <Input label="Einddatum" name="period.end" type="date" />
      </div>
      <SelectInput label="Groep" name="group">
        {availableGroups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
      </SelectInput>
      <button type="submit" className="mt-4">Activiteit toevoegen</button>
    </Form>
  )
}

export default EventForm;