import { FC, useEffect, useState } from 'react';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';

interface Props {};

const ExportPage: FC<Props> = () => {
  const [step, setStep] = useState<string>('handshake');
  const targetDomain = 'https://refundify.jung.gent';
  const canExport = process.env.NODE_ENV !== 'development' && window.location.origin !== targetDomain;
  
  useEffect(() => {
    const broadcastChannel = new BroadcastChannel('refundify');
    broadcastChannel.onmessage = (event) => {
      console.log('Handshake message received', event);
      if (event.data.type === 'handshake') {
        const needToExport = canExport && event.origin === targetDomain;
        console.log('Checking if we need to export',);
        if (needToExport) {
          console.log('Exporting data');
          setStep('exporting')
          broadcastChannel.postMessage({ 
            type: 'export:start',
            data: {
              stores: {
                usePersistentPersonsStore: usePersistentPersonsStore.getState().persons,
                usePersistentEventsStore: usePersistentEventsStore.getState().events,
              }
            }
          });
          setStep('export_send');
        } else console.log('No need to export');
      }
      if (event.data.type === 'import:done') {
        console.log('Import done', event);
        setStep('export_success');
      }
    };
    
    return () => {
      broadcastChannel.close();
    }
  }, []);
  
  return (
    <div>
      {canExport ?
        <button onClick={() => window.open(`${targetDomain}/import`, '_blank')}>Start export</button> :
        'Export not possible on this domain'
      }
    </div>
  )
}

export default ExportPage;