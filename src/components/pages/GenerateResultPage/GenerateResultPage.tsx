import { generate } from '@pdfme/generator';
import { barcodes, image, text } from '@pdfme/schemas';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { FC, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { stamp } from '../../../utils/data/stamp';
import { cmTemplate } from '../../../utils/data/templates/cm/template';

interface Props {};

const GenerateResultPage: FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const personParam = searchParams.get('person');
  const eventParam = Number(searchParams.get('event'));
    
  const person = usePersistentPersonsStore(state => state.persons.find((person: any) => person.nrn === personParam));
  const event = usePersistentEventsStore(state => state.events[eventParam]);
  
  const { data: selectedGroupData } = useQuery({
    queryKey: ['group', person?.group],
    enabled: !!person,
    queryFn: async () => {
      const response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgroepsadmin.scoutsengidsenvlaanderen.be%2Fgroepsadmin%2Frest-ga%2Fgroep%2F${person?.group}`);
      return await response.json();
    }
  })
  
  const address = `${selectedGroupData?.adressen?.[0]?.straat} ${selectedGroupData?.adressen?.[0]?.nummer}, ${selectedGroupData?.adressen?.[0]?.postcode} ${selectedGroupData?.adressen?.[0]?.gemeente}`;
  
  const generatePdf = useCallback(async () => {
    if (person && event) {
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
      return blob;
    }
  }, [person, selectedGroupData, event])
  
  useEffect(() => {
    if (person && event && selectedGroupData) {
      generatePdf().then((blob) => {
        if (blob) {
          window.location.href = URL.createObjectURL(blob);
        }
      });
    }
  }, [generatePdf])
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h3>Er ging iets fout bij het genereren van het formulier</h3>
      <p>Ga terug en probeer het opnieuw</p>
      <Link to="/" className="button mt-4">Startpagina</Link>
    </div>
  )
}

export default GenerateResultPage;