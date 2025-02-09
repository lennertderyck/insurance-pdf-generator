import { pdf } from './pdf';

export const neutraalTemplate = (groupStamp: string) => ({
  "schemas": [
    {
      "personLastName": {
        "type": "text",
        "content": "personLastName",
        "position": {
          "x": 24.93,
          "y": 80.96
        },
        "width": 80.19,
        "height": 10,
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
        "required": false
      },
      "personNrn": {
        "type": "text",
        "content": "personNrn",
        "position": {
          "x": 24.93,
          "y": 86.98
        },
        "width": 80.19,
        "height": 10,
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
        "required": false
      },
      "check": {
        "type": "text",
        "content": "X",
        "position": {
          "x": 24.98,
          "y": 140.06
        },
        "width": 8.75,
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
        "required": false
      },
      "groupStamp": {
        "type": "image",
        "content": groupStamp,
        "position": {
          "x": 25.19,
          "y": 199.01
        },
        "width": 158.8,
        "height": 19.1,
        "rotate": 0,
        "opacity": 1,
        "required": false,
        "readOnly": false
      },
      "groupName": {
        "type": "text",
        "content": "groupName",
        "position": {
          "x": 67.06,
          "y": 95.03
        },
        "width": 116.44,
        "height": 10,
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
        "required": false
      },
      "paymentAmount": {
        "type": "text",
        "content": "paymentAmount",
        "position": {
          "x": 158.93,
          "y": 168.3
        },
        "width": 24.1,
        "height": 10,
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
        "required": false
      },
      "personFirstName": {
        "type": "text",
        "content": "personFirstName",
        "position": {
          "x": 24.93,
          "y": 75.44
        },
        "width": 80.19,
        "height": 10,
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
        "required": false
      },
      "check2": {
        "type": "text",
        "content": "X",
        "position": {
          "x": 63.82,
          "y": 182.61
        },
        "width": 8.75,
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
        "readOnly": false
      },
      "eventPeriodStart": {
        "type": "text",
        "content": "eventPeriodStart",
        "position": {
          "x": 27.65,
          "y": 163.27
        },
        "width": 33.62,
        "height": 10,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "#ffffff",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false
      },
      "eventPeriodEnd": {
        "type": "text",
        "content": "eventPeriodEnd",
        "position": {
          "x": 27.6,
          "y": 177.77
        },
        "width": 33.62,
        "height": 10,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "#ffffff",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": false,
        "readOnly": false
      }
    },
  ],
  "basePdf": pdf,
  "pdfmeVersion": "5.3.4"
});