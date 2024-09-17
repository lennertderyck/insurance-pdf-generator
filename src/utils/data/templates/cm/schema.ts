import { file } from './file';
export const cmTemplate = {
  "schemas": [
    {
      "groupName": {
        "type": "text",
        "content": "Haegepoorters Destelbergen",
        "position": {
          "x": 56.9,
          "y": 92.41
        },
        "width": 93.65,
        "height": 6.12,
        "fontSize": 12,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "address": {
        "type": "text",
        "content": "Bijlokestraat 18, 9070 Destelbergen",
        "position": {
          "x": 33.03,
          "y": 98.97
        },
        "width": 93.65,
        "height": 6.12,
        "fontSize": 12,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "email": {
        "type": "text",
        "content": "groepsleiding@haegepoorters.be",
        "position": {
          "x": 66.31,
          "y": 105.26
        },
        "width": 93.65,
        "height": 6.12,
        "fontSize": 12,
        "readOnly": false,
        "required": false,
        "fontName": "Roboto"
      },
      "lastName": {
        "type": "text",
        "content": "lastName",
        "position": {
          "x": 33.87,
          "y": 56.69
        },
        "width": 42.35,
        "height": 4.97,
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
      "firstName": {
        "type": "text",
        "content": "firstName",
        "position": {
          "x": 123.51,
          "y": 56.37
        },
        "width": 42.35,
        "height": 4.97,
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
      "street": {
        "type": "text",
        "content": "street",
        "position": {
          "x": 33.76,
          "y": 62.46
        },
        "width": 42.35,
        "height": 4.97,
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
      "number": {
        "type": "text",
        "content": "number",
        "position": {
          "x": 114.4,
          "y": 62.14
        },
        "width": 20.92,
        "height": 4.97,
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
      "postalcode": {
        "type": "text",
        "content": "postalcode",
        "position": {
          "x": 37.62,
          "y": 68.96
        },
        "width": 20.92,
        "height": 4.97,
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
      "city": {
        "type": "text",
        "content": "city",
        "position": {
          "x": 68.52,
          "y": 69.43
        },
        "width": 55.58,
        "height": 4.97,
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
      "country": {
        "type": "text",
        "content": "België",
        "position": {
          "x": 136.46,
          "y": 69.64
        },
        "width": 55.58,
        "height": 4.97,
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
      "stamp": {
        "type": "image",
        "content": "data:image/jpeg;base64,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",
        "position": {
          "x": 110.62,
          "y": 211.96
        },
        "width": 40,
        "height": 40,
        "rotate": 0,
        "opacity": 1,
        "required": false,
        "readOnly": false
      },
      "registredOrganisation": {
        "type": "text",
        "content": "registred org",
        "position": {
          "x": 92.87,
          "y": 212.78
        },
        "width": 100,
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
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "period": {
        "type": "text",
        "content": "period",
        "position": {
          "x": 56.09,
          "y": 123.55
        },
        "width": 56.37,
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
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "paymentDate": {
        "type": "text",
        "content": "paymentDate",
        "position": {
          "x": 45.19,
          "y": 116.88
        },
        "width": 56.37,
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
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "paymentAmount": {
        "type": "text",
        "content": "paymentAmount",
        "position": {
          "x": 44.61,
          "y": 110.74
        },
        "width": 56.37,
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
        "required": false,
        "readOnly": false,
        "fontName": "Roboto"
      },
      "dateDay": {
        "type": "text",
        "content": "dateDay",
        "position": {
          "x": 34.4,
          "y": 224.54
        },
        "width": 10.6,
        "height": 5.24,
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
      "dateMonth": {
        "type": "text",
        "content": "dateMonth",
        "position": {
          "x": 47.84,
          "y": 224.22
        },
        "width": 10.6,
        "height": 5.24,
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
      "dateYear": {
        "type": "text",
        "content": "dateYear",
        "position": {
          "x": 62.07,
          "y": 224.43
        },
        "width": 17.74,
        "height": 5.24,
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
      "nrn": {
        "type": "text",
        "content": "nrn",
        "position": {
          "x": 56.08,
          "y": 75.52
        },
        "width": 56.9,
        "height": 4.97,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 13,
        "lineHeight": 1,
        "characterSpacing": 6,
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
    {}
  ],
  "basePdf": file,
  "pdfmeVersion": "4.0.0"
};