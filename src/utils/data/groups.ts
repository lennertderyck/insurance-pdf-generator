import { hdbStamp } from "./stamps/hdb";
import { hpStamp } from "./stamps/hp";
import { luciaStamp } from "./stamps/lucia";

export const groups = {
  'O1306G': {
    id: 'O1306G',
    name: 'Haegepoorters',
    stamp: hpStamp,
  },
  'O1307G': {
    id: 'O1307G',
    name: 'HDB - Hubert De Bruyker',
    stamp: hdbStamp,
  },
  'O1309M': {
    id: 'O1309M',
    name: 'Sint-Lucia',
    stamp: luciaStamp,
  },
  // 'O1304G': {
  //   name: 'Sint-Bernadette',
  // },
}