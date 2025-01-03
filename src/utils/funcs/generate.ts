import axios from "axios";
import dayjs from "dayjs";
import { usePersistentEventsStore } from "../../state/stores/usePersistentEventsStore";
import { usePersistentPersonsStore } from "../../state/stores/usePersistentPersonsStore";
import { Event, Group, Person } from "../../types/identities";
import { brokers } from "../data/brokers";
import { groups } from "../data/groups";
import { Pdfme } from "../vendors/Pdfme/Generator";

interface FormGeneratorInput {
  person: Person;
  event: Event;
  group: Group;
  stamp: string;
}

export const getGroupInfoEndpoint = (group: string) => {
  // const corsProxy = 'https://corsproxy.io/';
  // const gaEndpoint = `https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/groep`;
  // return `${corsProxy}?${gaEndpoint}/${group}`;
  return 'https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/groep/O1306G';
}

export const Generator = {
  generateFieldValues: (input: FormGeneratorInput) => {
    const groupAddress = input.group.adressen[0];
    const eventStartDate = dayjs(input.event.period.start);
    const eventEndDate = dayjs(input.event.period.end);
    const eventPeriodDiff = eventEndDate.diff(eventStartDate, 'days');
    const signingDate = dayjs();
    
    return {
      check: 'X',
      
      registredOrganisation: 'Scouts en Gidsen Vlaanderen',

      groupStamp: input.stamp,
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
    const inputs = Generator.generateFieldValues(formInput);
    const pdf = await Pdfme.generate(template, inputs);
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  },
  generateForm: async (config: { personId: string, eventId: string, brokerId: string }) => {
    const person = usePersistentPersonsStore.getState().persons.find((person: Person) => person.id === config.personId);
    const event = usePersistentEventsStore.getState().events.find((event: Event) => event.id === config.eventId);
    const broker = brokers[config.brokerId as keyof typeof brokers];
    
    console.log({person, event, broker});
    
    if (person && event && broker) {
      const group = (await axios<Group>(getGroupInfoEndpoint(person.group))).data;
      const groupStamp = groups[person.group as keyof typeof groups].stamp;
      return Generator.generateBlob({ person, event, group, stamp: groupStamp }, broker.template(groupStamp));
    } else {
      throw new Error('Person, event or broker not found');
    }
  },
}