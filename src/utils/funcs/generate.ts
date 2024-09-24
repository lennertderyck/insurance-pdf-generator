import { generate } from "@pdfme/generator";
import { barcodes, image, text } from "@pdfme/schemas";
import dayjs from "dayjs";
import { Event, Group, Person } from "../../types/identities";
import { groups } from "../data/groups";

const plugins = { text, image, qrcode: barcodes.qrcode };

interface FormGeneratorInput {
  person: Person;
  event: Event;
  group: Group;
}

export const Generator = {
  inputToFields: (input: FormGeneratorInput) => {
    const groupAddress = input.group.adressen[0];
    const eventStartDate = dayjs(input.event.period.start);
    const eventEndDate = dayjs(input.event.period.end);
    const eventPeriodDiff = eventEndDate.diff(eventStartDate, 'days');
    const signingDate = dayjs();
    
    return {
      check: 'X',
      
      registredOrganisation: 'Scouts en Gidsen Vlaanderen',

      groupStamp: groups['O1306G'].stamp,
      groupName: input.group.naam,
      groupEmail: input.group.email,
      groupAddressFull: `${groupAddress.straat} ${groupAddress.nummer}, ${groupAddress.postcode} ${groupAddress.gemeente}`,
      groupAddressStreet: groupAddress.straat,
      groupAddressNumber: groupAddress.nummer,
      groupAddressPlace: groupAddress.gemeente,
      groupAddressPostalcode: groupAddress.postcode,
      
      personClientId: input.person?.clientId || 'Lidnummer:',
      personNameFull: `${input.person.name} ${input.person.lastName}`,
      personFirstName: input.person.name,
      personLastName: input.person.lastName,
      personNrn: input.person.nrn,
      personAddressFull: `${input.person.address.street} ${input.person.address.number}, ${input.person.address.postalcode} ${input.person.address.city}`,
      personAddressStreet: input.person.address.street,
      personAddressNumber: input.person.address.number,
      personAddressPlace: input.person.address.city,
      personAddressPostalcode: input.person.address.postalcode,
      personAddressCountry: 'België',
            
      eventPeriodFull: `${eventStartDate.format('DD/MM/YYYY')} - ${eventEndDate.format('DD/MM/YYYY')}`,
      eventPeriodStart: eventStartDate.format('DD/MM/YYYY'),
      eventPeriodEnd: eventEndDate.format('DD/MM/YYYY'),
      eventPeriodAmount: (eventPeriodDiff + 1).toString(),

      paymentDate: input.event.payment.date,
      paymentAmount: `${input.event.payment.amount} euro`,

      signingDateFull: signingDate.format('DD/MM/YYYY'),
      signDateDay: signingDate.format('DD'),
      signDateMonth: signingDate.format('MM'),
      signDateYear: signingDate.format('YYYY'),
    }
  },
  generateBlob: async (formInput: FormGeneratorInput, template: any) => {
    const inputs = Generator.inputToFields(formInput);
    console.log(inputs);
    const pdf = await generate({ template, plugins, inputs: [inputs] });
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  }
}