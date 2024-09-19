export interface Person {
  name: string;
  lastName: string;
  nrn: string;
  [key: string]: any;
}

export interface Event {
  name: string;
  payment: {
    amount: number;
    date: string;
  };
  period: {
    start: string;
    end: string;
  };
  [key: string]: any;
}