import { pdf } from "./pdf";

export const helanTemplate = (groupStamp: string) => ({
  "schemas": [
    {
      "personNameFull": {
        "type": "text",
        "content": "personNameFull",
        "position": {
          "x": 20.64,
          "y": 176.95
        },
        "width": 78.34,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "personNrn": {
        "type": "text",
        "content": "personNrn",
        "position": {
          "x": 20.64,
          "y": 184.04
        },
        "width": 78.34,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "personAddressFull": {
        "type": "text",
        "content": "personAddressFull",
        "position": {
          "x": 20.64,
          "y": 191.13
        },
        "width": 78.34,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "check": {
        "type": "text",
        "content": "✓",
        "position": {
          "x": 82.12,
          "y": 209.65
        },
        "width": 8.49,
        "height": 7.35,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "eventPeriodAmount": {
        "type": "text",
        "content": "eventPeriodAmount",
        "position": {
          "x": 111.82,
          "y": 240.23
        },
        "width": 45,
        "height": 6.29,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "paymentAmount": {
        "type": "text",
        "content": "paymentAmount",
        "position": {
          "x": 165,
          "y": 240.23
        },
        "width": 45,
        "height": 6.29,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "eventPeriodStart": {
        "type": "text",
        "content": "eventPeriodStart",
        "position": {
          "x": 21.87,
          "y": 240.23
        },
        "width": 35.21,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "eventPeriodEnd": {
        "type": "text",
        "content": "eventPeriodEnd",
        "position": {
          "x": 60.33,
          "y": 240.23
        },
        "width": 35.21,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "personClientId": {
        "type": "text",
        "content": "personClientId",
        "position": {
          "x": 20.64,
          "y": 169.75
        },
        "width": 78.34,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "groupStamp": {
        "type": "image",
        "content": groupStamp,
        "position": {
          "x": 138.91,
          "y": 265.72
        },
        "width": 65.67,
        "height": 21.21,
        "rotate": 0,
        "opacity": 1,
        "required": false,
        "readOnly": false
      },
      "registredOrganisation": {
        "type": "text",
        "content": "registredOrganisation",
        "position": {
          "x": 81.44,
          "y": 203.25
        },
        "width": 78.34,
        "height": 5.76,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      }
    }
  ],
  "basePdf": pdf,
  "pdfmeVersion": "4.0.0"
});