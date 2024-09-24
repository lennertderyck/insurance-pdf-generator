import { useQuery } from '@tanstack/react-query';
import { FC, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';
import { Person } from '../../../types/identities';
import { brokers } from '../../../utils/data/brokers';
import { groups } from '../../../utils/data/groups';
import { Generator } from '../../../utils/funcs/generate';

interface Props {};

const GenerateResultPage: FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const personParam = searchParams.get('person');
  const eventParam = Number(searchParams.get('event'));
  const brokerParam = searchParams.get('broker');
  const autoGenerateParam = searchParams.get('auto');
    
  const broker = brokers[brokerParam as keyof typeof brokers];
  const person = usePersistentPersonsStore(state => state.persons.find((person: Person) => person.id === personParam));
  const event = usePersistentEventsStore(state => state.events[eventParam]);
    
  const { data: selectedGroupData } = useQuery({
    queryKey: ['group', person?.group],
    enabled: !!person,
    queryFn: async () => {
      const response = await fetch(`https://corsproxy.io/?https%3A%2F%2Fgroepsadmin.scoutsengidsenvlaanderen.be%2Fgroepsadmin%2Frest-ga%2Fgroep%2F${person?.group}`);
      return await response.json();
    }
  })
    
  const generatePdf = useCallback(async () => {
    if (person && event && broker && selectedGroupData) {
      const groupStamp = groups['O1306G'].stamp;
      return Generator.generateBlob({ person, event, group: selectedGroupData }, broker.template(groupStamp));
    }
  }, [person, selectedGroupData, event, broker])
  
  const generateAndDownload = useCallback(async () => {
    if (person && event && broker && selectedGroupData) {
      generatePdf().then((blob) => {
        if (blob) {
          window.location.replace(URL.createObjectURL(blob));
        }
      });
    }
  }, [person, event, broker, selectedGroupData, generatePdf])
    
  useEffect(() => {
    if (autoGenerateParam === 'true') { 
      generateAndDownload();
    }
  }, [generateAndDownload, autoGenerateParam]);
  
  const generateAndShare = useCallback(async () => {
    generatePdf().then((blob) => {
     if (blob) {
        navigator.share({
          files: [new File([blob], `Formulier voor ${event.name} - ${person?.name} ${person?.lastName}.pdf`, { type: 'application/pdf' })],
        }).catch(console.log);
     }
    });
  }, [event.name, generatePdf, person?.name, person?.lastName]);
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {!person && !event ? (
        <>
          <h3>Er ging iets fout bij het genereren van het formulier</h3>
          <p>Ga terug en probeer het opnieuw</p>
          <Link to="/" className="button mt-4">Startpagina</Link>
        </>
      ) : (
        <>
          <h3>Formulier genereren en delen</h3>
          <p>Verstuur het aangemaakte formulier</p>
          <div className="mt-4">
            { autoGenerateParam === 'true' ? 
              <button onClick={generateAndDownload}>Opnieuw genereren</button>:
              <button onClick={generateAndShare}>Delen</button>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default GenerateResultPage;