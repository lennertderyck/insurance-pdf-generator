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
      if (event.data.type === 'handshake') {
        const needToExport = canExport && event.origin === targetDomain;
        if (needToExport) {
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
        }
      }
      if (event.data.type === 'import:done') {
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
        <button onClick={() => window.open('/import', '_blank')}>Start export</button> :
        'Export not possible on this domain'
      }
    </div>
  )
}

export default ExportPage;