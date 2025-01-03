import { cmTemplate } from "./templates/cm/template";
import { helanTemplate } from "./templates/helan/template";
import { lmTemplate } from "./templates/lm/template";

export const brokers = {
  'cm': {
    name: 'Christelijke Mutualiteit',
    nameShort: 'CM',
    template: cmTemplate
  },
  'helan': {
    name: 'Helan',
    nameShort: 'Helan',
    template: helanTemplate
  },
  'lm': {
    name: 'Liberale Mutualiteit',
    nameShort: 'LM',
    template: lmTemplate
  }
}