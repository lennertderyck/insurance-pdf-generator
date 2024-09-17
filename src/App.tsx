import { generate } from "@pdfme/generator";
import { barcodes, image, text } from "@pdfme/schemas";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { FC, useCallback, useState } from 'react';
import EventForm from "./components/forms/EventForm/EventForm";
import PersonForm from './components/forms/PersonForm/PersonForm';
import { usePersistentPersonsStore } from './state/stores/usePersistentPersonsStore';
import { stamp } from "./utils/data/stamp";
import { cmTemplate } from "./utils/data/templates/cm/schema";

// https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/groep/O1306G

interface Props {};

const App: FC<Props> = () => {
  const [event, setEvent] = useState<any | null>(null);
  const [broker, setBroker] = useState<string>('cm');
  const [group, setGroup] = useState<string>('O1306G');
  
  const { data: selectedGroupData } = useQuery({
    queryKey: ['group', group],
    queryFn: async () => {
      const response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgroepsadmin.scoutsengidsenvlaanderen.be%2Fgroepsadmin%2Frest-ga%2Fgroep%2F${group}`);
      return await response.json();
    }
  })
    
  const persons = usePersistentPersonsStore(state => state.persons);
  const addPerson = usePersistentPersonsStore(state => state.addPerson);
  
  const address = `${selectedGroupData?.adressen?.[0]?.straat} ${selectedGroupData?.adressen?.[0]?.nummer}, ${selectedGroupData?.adressen?.[0]?.postcode} ${selectedGroupData?.adressen?.[0]?.gemeente}`
    
  const generatePdf = useCallback(async (person: any, event: any, group: any) => {
    const day = dayjs();
    const periodStart = dayjs(event?.period?.start);
    const periodEnd = dayjs(event?.period?.end);
    const plugins = { text, image, qrcode: barcodes.qrcode };
    const inputs = [
      {
        "groupName": selectedGroupData?.naam,
        "address": address,
        "email": selectedGroupData?.email,
        "lastName": person.lastName,
        "firstName": person.name,
        "street": person.address.street,
        "number": person.address.number,
        "postalcode": person.address.postalcode,
        "city": person.address.city,
        "country": "België",
        "stamp": stamp,
        "registredOrganisation": "Scouts en Gidsen Vlaanderen",
        "period": `${periodStart.format('DD/MM/YYYY')} - ${periodEnd.format('DD/MM/YYYY')}`,
        "paymentDate": dayjs(event.payment.date).format('DD/MM/YYYY'),
        "paymentAmount": `${event.payment.amount} €`,
        "dateDay": day.format('DD'),
        "dateMonth": day.format('MM'),
        "dateYear": day.format('YYYY'),
        "nrn": person.nrn,
      }
    ];
    
    const pdf = await generate({ template: cmTemplate as any, plugins, inputs });
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }, [address, selectedGroupData])
  
  return (
    <div>
      <h3>Nieuwe persoon</h3>
      <PersonForm onSubmit={addPerson} />
      <hr />
      <h3>Activiteit</h3>
      <EventForm onSubmit={setEvent} />
      <hr />
      <h3>Ziekenfonds</h3>
      <select value={broker} onChange={event => setBroker(event.target.value)}>
        <option value="cm">CM</option>
      </select>
      <hr />
      <h3>Groep</h3>
      <select value={group} onChange={event => setGroup(event.target.value)}>
        <option value="O1306G">Haegepoorters</option>
        <option value="O1307G">HDB - Hubert De Bruyker</option>
      </select>
      <p>Groepsnaam: {selectedGroupData?.naam}</p>
      <p>Email: {selectedGroupData?.email}</p>
      <p>Adres: { address }</p>
      <hr />
      <h3>Genereer formulier</h3>
      {persons?.length === 0 && <p>Voeg eerst een persoon toe om het formulier te genereren</p>}
      { persons?.map((person, index) => (
        <div key={index}>{ person.name } {<button disabled={!event} onClick={() => generatePdf(person, event, selectedGroupData)}>Genereer formulier</button>}</div>
      ))}
    </div>
  )
}

export default App;