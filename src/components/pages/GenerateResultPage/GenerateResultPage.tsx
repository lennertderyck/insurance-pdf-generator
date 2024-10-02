import { FC, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Generator } from '../../../utils/funcs/generate';
import Icon from '../../basics/Icon/Icon';

interface Props {};

const GenerateResultPage: FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const personParam = searchParams.get('person');
  const eventParam = searchParams.get('event');
  const brokerParam = searchParams.get('broker');
  const autoGenerateParam = searchParams.get('auto');
    
  const generatePdf = () => {
    if (personParam && eventParam && brokerParam) {
      return Generator.generateForm({
        personId: personParam,
        eventId: eventParam,
        brokerId: brokerParam
      });
    } else {
      return Promise.resolve(null);
    }
  }
  
  const generateAndDownload = async () => {
    const blob = await generatePdf();
    if (blob) {
      window.location.replace(URL.createObjectURL(blob));
    }
  }
    
  useEffect(() => {
    if (autoGenerateParam === 'true' && process.env.NODE_ENV !== 'development') { 
      generateAndDownload();
    }
  }, [generateAndDownload, autoGenerateParam]);
  
  const generateAndShare = async () => {
    const blob = await generatePdf();
    if (blob) {
      navigator.share({
        files: [new File([blob], `formulier.pdf`, { type: 'application/pdf' })],
      }).catch(console.log);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center">
      { process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 p-4 md:p-6 rounded-xl mb-12 md:mb-16 flex flex-row gap-4">
          <Icon name="bug-line" />
          <p>Automatisch genereren is uitgeschakeld in development mode.</p>
        </div>
      )}
      {!!!personParam && !!!eventParam ? (
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