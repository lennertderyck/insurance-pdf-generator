import { generate } from "@pdfme/generator";
import { barcodes, image, text } from "@pdfme/schemas";

const plugins = { text, image, qrcode: barcodes.qrcode };

export class Pdfme {
  static generate = (template: any, inputs: Record<string, any>) => {
    return generate({ template, plugins, inputs: [inputs] });
  };
}