import { cmTemplate } from "./templates/cm/template";
import { helanTemplate } from "./templates/helan/template";

export const brokers = {
  'cm': {
    name: 'Christelijke Mutualiteit',
    template: cmTemplate
  },
  'helan': {
    name: 'Helan',
    template: helanTemplate
  }
}