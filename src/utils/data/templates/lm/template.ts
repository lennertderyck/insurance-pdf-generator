import { pdf } from './pdf';

export const lmTemplate = (groupStamp: string) => ({
  "schemas": [
    {
      "personFirstName": {
        "type": "text",
        "content": "personFirstName",
        "position": {
          "x": 50.85,
          "y": 78.58
        },
        "width": 96.59,
        "height": 5.77,
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
      "personLastname": {
        "type": "text",
        "content": "personLastname",
        "position": {
          "x": 50.74,
          "y": 86.99
        },
        "width": 96.59,
        "height": 5.77,
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
          "x": 50.42,
          "y": 96.2
        },
        "width": 96.59,
        "height": 5.77,
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
          "x": 50.89,
          "y": 113.61
        },
        "width": 96.59,
        "height": 5.77,
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
          "x": 25.66,
          "y": 153.47
        },
        "width": 72.28,
        "height": 20.69,
        "rotate": 0,
        "opacity": 1,
        "required": false,
        "readOnly": false
      },
      "check": {
        "type": "text",
        "content": "X",
        "position": {
          "x": 25.67,
          "y": 182.03
        },
        "width": 6.64,
        "height": 6.03,
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
          "x": 79.73,
          "y": 206.95
        },
        "width": 37.06,
        "height": 5.77,
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
          "x": 128.89,
          "y": 207.57
        },
        "width": 37.06,
        "height": 5.77,
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
          "x": 68.3,
          "y": 233.88
        },
        "width": 37.06,
        "height": 5.77,
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
      "paymentDay": {
        "type": "text",
        "content": "paymentAmount",
        "position": {
          "x": 39.14,
          "y": 249.7
        },
        "width": 37.06,
        "height": 5.77,
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
    },
  ],
  "basePdf": pdf,
  "pdfmeVersion": "4.0.0"
});