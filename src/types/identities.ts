export interface Person {
  id: string;
  clientId: string;
  name: string;
  lastName: string;
  nrn: string;
  address: {
    street: string;
    number: string;
    postalcode: string;
    city: string;
  };
  group: string;
}
export type PersonInput = Omit<Person, 'id'>;

export interface Event {
  id: string;
  name: string;
  group: string | null;
  payment: {
    amount: number;
    date: string;
  };
  period: {
    start: string;
    end: string;
  };
}
export type EventInput = Omit<Event, 'id'>;

export interface Group {
  naam: string;
  email: string;
  adressen: {
    straat: string;
    nummer: string;
    postcode: string;
    gemeente: string;
  }[];
  [key: string]: any;
}