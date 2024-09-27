import { FC, useEffect, useState } from 'react';
import { usePersistentEventsStore } from '../../../state/stores/usePersistentEventsStore';
import { usePersistentPersonsStore } from '../../../state/stores/usePersistentPersonsStore';

interface Props {};

const ImportPage: FC<Props> = () => {
  const [step, setStep] = useState<string>('handshake');
  const inIframe = window.self !== window.top;
  
  useEffect(() => {
    const broadcastChannel = new BroadcastChannel('refundify');
    broadcastChannel.postMessage({ type: 'handshake' });
    broadcastChannel.onmessage = (event) => {
      if (event.data.type === 'export:start') {
        setStep('importing');
        const exportedSources = event.data.data.stores;
        const sources = Object.keys(exportedSources);
        if (sources.includes('usePersistentPersonsStore')) {
          usePersistentPersonsStore.getState().import(exportedSources.usePersistentPersonsStore);
        }
        if (sources.includes('usePersistentEventsStore')) {
          usePersistentEventsStore.getState().import(exportedSources.usePersistentEventsStore);
        }
        setStep('import_done');
        broadcastChannel.postMessage({ type: 'import:done' });
      }
    };
    
    return () => {
      broadcastChannel.close();
    }
  }, []);

  return (
    <div>
      Starting export<br />
      { inIframe ? 'This page is embedded' : 'Not embedded' }
    </div>
  )
}

export default ImportPage;