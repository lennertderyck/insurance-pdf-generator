import { FC } from 'react';

interface Props {};

const NerdsOverviewPage: FC<Props> = () => {
  return (
    <div>
      <h4>Templates</h4>
      <p>Wanneer je een template toevoegt kan je deze variabelen gebruiken:</p>
      <ul className="list list-inside list-disc">
        <li>check</li>
        <li>registredOrganisation</li>
        <li>groupStamp</li>
        <li>groupName</li>
        <li>groupEmail</li>
        <li>groupAddressFull</li>
        <li>groupAddressStreet</li>
        <li>groupAddressNumber</li>
        <li>groupAddressPlace</li>
        <li>groupAddressPostalcode</li>
        <li>personClientId</li>
        <li>personNameFull</li>
        <li>personFirstName</li>
        <li>personLastName</li>
        <li>personNrn</li>
        <li>personAddressFull</li>
        <li>personAddressStreet</li>
        <li>personAddressNumber</li>
        <li>personAddressPlace</li>
        <li>personAddressPostalcode</li>
        <li>personAddressCountry</li>
        <li>eventPeriodFull</li>
        <li>eventPeriodStart</li>
        <li>eventPeriodEnd</li>
        <li>eventPeriodAmount</li>
        <li>paymentDate</li>
        <li>paymentAmount</li>
        <li>signingDateFull</li>
        <li>signDateDay</li>
        <li>signDateMonth</li>
        <li>signDateYear</li>
      </ul>
    </div>
  )
}

export default NerdsOverviewPage;