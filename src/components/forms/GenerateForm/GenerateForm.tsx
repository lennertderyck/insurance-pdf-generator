import dayjs from 'dayjs';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { brokers } from '../../../utils/data/brokers';
import Form from '../../elements/Form/Form';
import SelectInput from '../../elements/Form/controls/SelectInput/SelectInput';
import GenerateCard from '../../elements/GenerateCard/GenerateCard';

const PersonSelect = () => {
  const { register } = useFormContext();
  const persons = usePersistentPersonsStore(state => state.persons);
  
  return (
    <div className="flex flex-col divide-y border border-gray-200 w-full rounded-xl">
      { persons?.map((person, index) => (
        <div key={person.nrn} className="px-4 py-3 flex flex-row">
          <input type="checkbox" defaultChecked className="mr-5" {...register(`persons.${person.id}`)} />
          <GenerateCard person={person} />
        </div>
      ))}
    </div>
  )
}

interface Props {
  onSubmit: (data: any) => void;
};

const GenerateForm: FC<Props> = ({ onSubmit }) => {
  const events = usePersistentEventsStore(state => state.events);

  return (
    <Form onSubmit={onSubmit}>
      <div className="flex flex-row gap-4 mb-4">
        <SelectInput label="Ziekenfonds" name="broker">
          {Object.entries(brokers).map(([key, brokerInfo]) => (
            <option key={key} value={key}>{brokerInfo.name}</option>
          ))}
        </SelectInput>
        <SelectInput label="Activiteit" name="event">
          {events?.map((event, index) => (
            <option value={index} key={index}>{event.name} van {dayjs(event?.period?.start).format('DD/MM/YYYY')} - {dayjs(event?.period?.end).format('DD/MM/YYYY')}</option>
          ))}
        </SelectInput>
        {/* <Input name="export" label="Automatisch downloaden" type="checkbox" defaultChecked /> */}
      </div>
      <PersonSelect />
      <button type="submit" className="mt-4">Genereer formulieren</button>
    </Form>
  )
}

export default GenerateForm;