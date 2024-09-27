import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Group } from '../../../types/identities';
import { brokers } from '../../../utils/data/brokers';
import { getGroupInfoEndpoint } from '../../../utils/funcs/generate';
import Form from '../../elements/Form/Form';
import SelectInput from '../../elements/Form/controls/SelectInput/SelectInput';

const GroupInfoView = () => {
  const formContext = useWatch({ name: 'person' });
  const person = usePersistentPersonsStore(state => state.persons.find(person => person.id === formContext));
  const { data: group } = useQuery({
    queryKey: ['groups', person?.group],
    enabled: !!person && !!person.group,
    queryFn: async ({ queryKey }) => {
      const groupId = person?.group;
      if (groupId) {
        const response = await axios<Group>(getGroupInfoEndpoint(groupId));
        return response.data;
      } else Promise.reject('No group id found');
    }
  })
  
  const address = group?.adressen[0];
  
  return (
   <div>
      <h6>Groep</h6>
      { !person ? 
        <p className="text-gray-500">Selecteer een persoon om de groepinfo te tonen</p> :
        <div className="border border-gray-200 p-4 rounded-lg">
          {group && (
            <ul>
              <p>{group.naam}</p>
              <p>{group.email}</p>
              <p>{address?.straat} {address?.nummer}, {address?.postcode} {address?.gemeente}</p>
            </ul>
          )}
        </div>
      }
   </div>
  )
}

interface Props {};

const GeneratePersistentForm: FC<Props> = () => {
  const persons = usePersistentPersonsStore(state => state.persons);
  const events = usePersistentEventsStore(state => state.events);
  const brokersList = Object.entries(brokers);
  
  return (
    <Form onSubmit={() => {}} defaultValues={{
      person: persons[0]?.id,
      event: '',
      broker: ''
    }}>
      <div className="flex flex-col gap-4">
        <SelectInput label="Persoon" name="person">
          {persons.map((person) => (
            <option key={person.id} value={person.id}>{person.name} {person.lastName}</option>
          ))}
        </SelectInput>
        <GroupInfoView />
        <SelectInput label="Activiteit" name="event">
          {events.map((event) => (
            <option key={event.id} value={event.id}>{event.name}</option>
          ))}
        </SelectInput>
        <SelectInput label="Ziekenfonds" name="broker">
          {brokersList.map(([key, brokerInfo]) => (
            <option key={key} value={key}>{brokerInfo.name}</option>
          ))}
        </SelectInput>
      </div>
    </Form>
  )
}

export default GeneratePersistentForm;