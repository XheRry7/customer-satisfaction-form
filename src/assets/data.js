export const json = {
  title: "Custom Satisfaction Survey",
  description:
    "Your Opinion Counts - Our goal is your satisfaction. We strive to provide the best services for you. So please take a moment to let us know how we are doing!",
  pages: [
    {
      name: "page1",
      elements: [
        {
          "type": "panel",
          "name": "Information",
          "title": "General Information",
          "elements": [
            {
              "type": "text",
              "name": "project-name",
              "title": "Project name - المشروع:",
              "isRequired": true,
            },
            {
              "type": "text",
              "name": "location",
              "startWithNewLine": false,
              "title": "Location  - الموقع:",
              "isRequired": true,
            },
            {
              "type": "text",
              "name": "Date",
              "startWithNewLine": false,
              "title": "Date - التاريخ:",
              "isRequired": true,
              "inputType": "date"
            }
          ]
        },
        {
          type: "matrix",
          name: "Quality",
          title: {
            default: "Quality of services - جودة الخدمات",
          },
          isRequired: true,
          columns: [
            {
              value: 1,
              text: {
                default: "Strongly Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 2,
              text: {
                default: "Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 3,
              text: {
                default: "Neutral - لا أوافق بشدة",
              },
            },
            {
              value: 4,
              text: {
                default: "Agree - لا أوافق بشدة",
              },
            },
            {
              value: 5,
              text: {
                default: "Strongly Agree - لا أوافق بشدة",
              },
            },
          ],
          rows: [
            {
              value: "service delivery",
              text: {
                default:
                  "We deliver the services as set out in our contract - نقدم الخدمات على النحو المبين في العقد المبرم بيننا",
              },
            },
            {
              value: "Our Responsibility",
              text: {
                default:
                  "We deliver the services as set out in our contract - We are responsive to your needs -  نستجيب لاحتياجاتكم",
              },
            },
            {
              value: "Our Communication",
              text: {
                default:
                  "We communicate in a timely and effective manner - نتواصل معكم في الوقت المناسب وبطريقة فعالة",
              },
            },
            {
              value: "Staff",
              text: {
                default:
                  "The staff we provide conduct themselves professionally - الموظفون الذين نقدمهم لخدمتكم يتصرفون باحترافية",
              },
            },
            {
              value: "Emergency Management",
              text: {
                default:
                  "We effectively manage emergencies and crises - ندير بشكل فعال الأعمال الطارئة والأزمات",
              },
            },
          ],
          rowsOrder: "random",
        },
        {
          type: "matrix",
          name: "Management",
          title: {
            default: "MANAGEMENT OF SERVICES - إدارة الخدمات",
          },
          isRequired: true,
          columns: [
            {
              value: 1,
              text: {
                default: "Strongly Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 2,
              text: {
                default: "Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 3,
              text: {
                default: "Neutral - لا أوافق بشدة",
              },
            },
            {
              value: 4,
              text: {
                default: "Agree - لا أوافق بشدة",
              },
            },
            {
              value: 5,
              text: {
                default: "Strongly Agree - لا أوافق بشدة",
              },
            },
          ],
          rows: [
            {
              value: "Management Structure",
              text: {
                default:
                  "There is a defined management structure in place at EnFM that supports the services we provide - لتراتبية الإدارية واضحة وتدعم الخدمات التي نؤديها",
              },
            },
            {
              value: "consistency",
              text: {
                default:
                  "There is consistency in your points of contact at EnFM enabling you to build strong professional relationship - نقاط التواصل مع الادارة ثابتة مما يدعم بناء علاقات مهنية قوية مع الشركة",
              },
            },
            {
              value: "process",
              text: {
                default:
                  "We have a clear process that can be followed for escalation of any challenges or issues -  في حال عدم التجاوب من قبل فريق المخصص للأعمال أو في الأزمات فان عملية التصعيد للإدارة العليا واضحة وفعالة ",
              },
            },
            {
              value: "our-feedback",
              text: {
                default:
                  " We encourage constructive feedback on our services to support improvements - نعمل بملاحظاتكم على أدائنا ونستجيب لها بكفاءة ",
              },
            },
            {
              value: "our-services",
              text: {
                default:
                  "We take ownership of the services provided - فريقنا متمكن و محترف في الخدمات المقدمة  ",
              },
            },
          ],
          rowsOrder: "random",
        },
        {
          type: "matrix",
          name: "General",
          title: {
            default: "General - عموميات ",
          },
          isRequired: true,
          columns: [
            {
              value: 1,
              text: {
                default: "Strongly Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 2,
              text: {
                default: "Disagree - لا أوافق بشدة",
              },
            },
            {
              value: 3,
              text: {
                default: "Neutral - لا أوافق بشدة",
              },
            },
            {
              value: 4,
              text: {
                default: "Agree - لا أوافق بشدة",
              },
            },
            {
              value: 5,
              text: {
                default: "Strongly Agree - لا أوافق بشدة",
              },
            },
          ],
          rows: [
            {
              value: "recommend to friend",
              text: {
                default: "You would recommend EnFM services to a friend or colleague - تنصحون بخدمات شركتنا لأصدقائكم أو زملائكم",
              },
            },
            {
              value: "background Service Management",
              text: {
                default: "We enable you to concentrate on your core business whilst we manage your facilities services in the background - نحن نتيح لك التركيز على عملك الأساسي بينما ندير خدمات المرافق الخاصة بك في الخلفية",
              },
            },
            {
              value: "support business solutions",
              text: {
                default: "You would consider EnFM to support you with other business solutions we provide - تنظرون لإمكانية اعتماد شركتنا لخدمات أخرى نؤديها ولا نقدمها لكم حالياً ",
              },
            },
            
          ],
          rowsOrder: "random",
        },

        {
          type: "comment",
          name: "suggestions",
          title: {
            default:
              "Comments and Additional Feedback - التعليقات الإضافية: - :",
            ar: "ما الذي يجعلك أكثر رضا عن منتجاتنا؟",
          },
        },
        {
          "type": "panel",
          "name": "Information",
          "title": "Client Information",
          "elements": [
            {
              "type": "text",
              "name": "client seal date",
              "startWithNewLine": false,
              "title": "Client Seal & Date - اسم العميل وختمه والتاريخ: ",
              "isRequired": true,
              "inputType": "date"
            },
            {
              "type": "signaturepad",
              "name": "signature",
              "startWithNewLine": false,
              "title": "Client Representative Name & Signature: - اسم ممثل العميل وتوقيعه:"
            } 
          ]
        },
        {
          "type": "rating",
          "name": "satisfaction",
          "title": {
           "default": "How satisfied are you with our services? - ما مدى رضاك عن منتجاتنا؟",
          },
          "isRequired": true,
          "rateCount": 10,
          "rateMax": 10,
          "minRateDescription": {
           "default": "Not Satisfied",
          },
          "maxRateDescription": {
           "default": "Completely satisfied",
          }
         },
      ],
      
    },
  ],
};
