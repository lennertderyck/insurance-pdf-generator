import { FC } from 'react';
import { AvailableIcons } from '../../basics/Icon/Icon.types';
import Section from '../../elements/Section/Section';

const STEPS: { icon: AvailableIcons, title: string, description: string }[] = [
  { icon: 'file-shred-line', title: 'Stap 1.', description: 'We verwijderen de lokale gegevens van deze applicatie' },
  { icon: 'lightbulb-flash-line', title: 'Stap 2.', description: 'We starten de applicatie opnieuw op' },
  { icon: 'lightbulb-flash-line', title: 'Stap 2.', description: 'Vul je gegevens opnieuw in' },
]

interface Props {};

const ResetStatePage: FC<Props> = () => {
  const resetApplication = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
  }
  
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 p-4">
      <div className="shadow-lg p-6 md:p-12 rounded-3xl bg-white max-w-[75vw]">
        <Section
          title="Problemen verhelpen" 
          subheader="Wat kan je doen als de applicatie niet goed werkt"
          icon="heart-pulse-fill" 
          divider={false}
        >
          <p className="mb-3">Als je problemen met de applicatie ondervindt kan je de applicatie opnieuw instellen.</p>
          <ul className="grid grid-cols-12 gap-4 lg:gap-6">
            {STEPS.map((step, index) => (
              <li key={index} className="col-span-12 lg:col-span-6 xl:col-span-4 bg-gray-100 p-4 lg:p-6 pb-3 lg:pb-5 rounded-xl flex flex-row gap-4">
                <div>
                  <h3 className="leading-4">{index + 1}</h3>
                </div>
                <div>
                  <p className="-mt-1 leading-5">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6" onClick={resetApplication}>Applicatie nu herstellen</button>
        </Section>
      </div>
    </div>
  )
}

export default ResetStatePage;