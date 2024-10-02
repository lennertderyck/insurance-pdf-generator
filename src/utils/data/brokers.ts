import { cmTemplate } from "./templates/cm/template";
import { helanTemplate } from "./templates/helan/template";
import { lmTemplate } from "./templates/lm/template";

export const brokers = {
  'cm': {
    name: 'Christelijke Mutualiteit',
    template: cmTemplate
  },
  'helan': {
    name: 'Helan',
    template: helanTemplate
  },
  'lm': {
    name: 'LM',
    template: lmTemplate
  }
}