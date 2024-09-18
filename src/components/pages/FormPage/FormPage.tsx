import { generate } from "@pdfme/generator";
import { barcodes, image, text } from "@pdfme/schemas";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { FC, useCallback, useState } from 'react';
import { Link } from "react-router-dom";
import { usePersistentEventsStore } from "../../../state/stores/usePersistentEventsStore";
import { usePersistentPersonsStore } from "../../../state/stores/usePersistentPersonsStore";
import { stamp } from "../../../utils/data/stamp";
import { cmTemplate } from "../../../utils/data/templates/cm/schema";
import PersonCard from "../../elements/PersonCard/PersonCard";
import EventForm from "../../forms/EventForm/EventForm";


interface Props {};

const FormPage: FC<Props> = () => {
  const persons = usePersistentPersonsStore(state => state.persons);
  const deletePerson = usePersistentPersonsStore(state => state.deletePerson);
  
  const events = usePersistentEventsStore(state => state.events);
  const addEvent = usePersistentEventsStore(state => state.addEvent);
  
  const [event, setEvent] = useState<any | null>(events[0]);
  const [broker, setBroker] = useState<string>('cm');
  const [group, setGroup] = useState<string>('O1306G');
  
  const { data: selectedGroupData } = useQuery({
    queryKey: ['group', group],
    queryFn: async () => {
      const response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgroepsadmin.scoutsengidsenvlaanderen.be%2Fgroepsadmin%2Frest-ga%2Fgroep%2F${group}`);
      return await response.json();
    }
  })
  
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
  
  const handleDeletePerson = (person: any) => {
    const confirmed = window.confirm(`Ben je zeker dat je deze ${person.name} ${person.lastName} (${person.nrn}) wilt verwijderen?`);
    if (confirmed) {
      deletePerson(person.nrn);
    }
  }
  
  return (
    <div className="p-16">
      <div className="flex flex-row gap-4 flex-wrap">
        { persons?.map((person) => (
          <PersonCard person={person} />
        ))}
      </div>
      <Link to="/persons/register" className="button mt-4">Voeg een persoon toe</Link>
      <hr />
      <h3>Nieuwe activiteit</h3>
      <EventForm onSubmit={(data) => {
        addEvent(data);
        setEvent(data);
      }} />
      <hr />
      <h3>Genereer formulier</h3>
      <div className="*:text-red-500 mb-8">
        {persons?.length === 0 && <p>Voeg eerst een persoon toe om het formulier te genereren</p>}
        {events?.length === 0 && <p>Voeg eerst de gegevens van een activiteit toe om het formulier te genereren</p>}
        {!selectedGroupData && <p>Wacht tot de gegevens van de geselecteerde groep ingeladen zijn</p>}
      </div>
      <div>
        <label>Ziekenfonds: </label>
        <select value={broker} onChange={event => setBroker(event.target.value)}>
          <option value="cm">CM</option>
        </select>
      </div>
      <div>
        <label>Groep: </label>
        <select value={group} onChange={event => setGroup(event.target.value)}>
          <option value="O1306G">Haegepoorters</option>
          <option value="O1307G">HDB - Hubert De Bruyker</option>
          <option value="O1304G">Sint-Bernadette</option>
        </select>
      </div>
      <div>
        <label>Activiteit: </label>
        <select className="mb-4" onChange={event => setEvent(events[parseInt(event.target.value)])}>
          <option disabled>Selecteer een activiteit</option>
          {events?.map((event, index) => (
            <option value={index} key={index}>{event.name} van {dayjs(event?.period?.start).format('DD/MM/YYYY')} - {dayjs(event?.period?.end).format('DD/MM/YYYY')}</option>
          ))}
        </select>
      </div>
      <ul>
        { persons?.map((person, index) => (
          <li key={index}>{ person.name } {person.lastName}: {<button disabled={!event} onClick={() => generatePdf(person, event, selectedGroupData)}>Genereer formulier</button>} | <button onClick={() => handleDeletePerson(person)}>Verwijder {person.name}</button></li>
        ))}
      </ul>
      <p className="mt-12">{`(Opmerking voor (groeps)leiding: Gegevens worden rechtstreeks uit de Groepsadministratie overgenomen. Zie "groepsinstellingen".)`}</p>
    </div>
  )
}

export default FormPage;