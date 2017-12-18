// 'use strict';
//
// const Alexa = require('alexa-sdk'),
//     APP_ID = 'amzn1.ask.skill.013147ee-412a-4a59-8e58-1e9fe2376df5';
//
// // const languageStrings = {
// //     'en': {
// //         translation: {
// //             FACTS: [
// //                 'A year on Mercury is just 88 days long.',
// //             ],
// //             SKILL_NAME: 'Space Facts',
// //             GET_FACT_MESSAGE: "Here's your fact: ",
// //             HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
// //             HELP_REPROMPT: 'What can I help you with?',
// //             STOP_MESSAGE: 'Goodbye!',
// //         },
// //     },
// //     'en-US': {
// //         translation: {
// //             FACTS: [
// //                 'A year on Mercury is just 88 days long.',
// //             ],
// //             SKILL_NAME: 'American Space Facts',
// //         },
// //     },
// //     'en-GB': {
// //         translation: {
// //             FACTS: [
// //                 'A year on Mercury is just 88 days long.',
// //             ],
// //             SKILL_NAME: 'British Space Facts',
// //         },
// //     },
// //     'de': {
// //         translation: {
// //             FACTS: [
// //                 'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
// //             ],
// //             SKILL_NAME: 'Weltraumwissen auf Deutsch',
// //             GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
// //             HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
// //             HELP_REPROMPT: 'Wie kann ich dir helfen?',
// //             STOP_MESSAGE: 'Auf Wiedersehen!',
// //         },
// //     },
// // };
//
// let handlers = {
//     'LaunchRequest': function () {
//         this.emit('GetFact');
//     },
//     'GetNewFactIntent': function () {
//         this.emit('GetFact');
//     },
//     'GetFact': function () {
//         // Get a random space fact from the space facts list
//         // Use this.t() to get corresponding language data
//         const factArr = this.t('FACTS');
//         const factIndex = Math.floor(Math.random() * factArr.length);
//         const randomFact = factArr[factIndex];
//
//         // Create speech output
//         const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
//         this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
//     },
//     'AMAZON.HelpIntent': function () {
//         const speechOutput = this.t('HELP_MESSAGE');
//         const reprompt = this.t('HELP_MESSAGE');
//         this.emit(':ask', speechOutput, reprompt);
//     },
//     'AMAZON.CancelIntent': function () {
//         //this.emit(':tell', this.t('STOP_MESSAGE'));
//         this.emit(':tell', 'Abgebrochen.  In Hamburg sagt man Tschüss.');
//     },
//     'AMAZON.StopIntent': function () {
//         //this.emit(':tell', this.t('STOP_MESSAGE'));
//         this.emit(':tell', 'Gestoppt.  Auf Wiedersehen!');
//     },
//     'HalloTomIntent': function () {
//         this.emit(':tell', 'Hallich bin Thomas Softwareentwickler aus Hamburg');
//     },
// };
//
// exports.handler = function (event, context) {
//     const alexa = Alexa.handler(event, context);
//     alexa.APP_ID = APP_ID;
//     // To enable string internationalization (i18n) features, set a resources object.
//     // alexa.resources = languageStrings;
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
//
// /* eslint-disable  func-names */
// /* eslint quote-props: ["error", "consistent"]*/
//
// 'use strict';
//
// const Alexa = require('alexa-sdk'),
//     R = require('ramda'),
//     APP_ID = 'amzn1.ask.skill.013147ee-412a-4a59-8e58-1e9fe2376df5';
//
// let handlers = {
//     'LaunchRequest': function () {
//         this.emit('HalloTomIntent');
//     },
//     'GetNewFactIntent': function () {
//         this.emit('HalloTomIntent');
//     },
//     'AMAZON.HelpIntent': function () {
//         this.emit(':tell', 'Momentan ist keine Hilfe implementiert.');
//     },
//     'AMAZON.CancelIntent': function () {
//         this.emit(':tell', 'Abgebrochen. Auf Wiedersehen!');
//     },
//     'AMAZON.StopIntent': function () {
//         this.emit(':tell', 'Gestoppt. In Hamburg sagt man Tschüss!');
//     },
//     'HalloTomIntent': function () {
//         let txtStr1 = 'Moin, ich bin Thomas.',
//             txtStr2 = 'Ich bin Full Stack JavaScript Developer aus Hamburg.'
//         this.emit(':tell', R.concat(txtStr1, txtStr2));
//     },
// };
//
// exports.handler = function (event, context) {
//     const alexa = Alexa.handler(event, context);
//     alexa.APP_ID = APP_ID;
//     // To enable string internationalization (i18n) features, set a resources object.
//     // alexa.resources = languageStrings;
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk'),
    R = require('ramda'),
    Sugar = require('sugar');

const APP_ID = '',
    languageStrings = {
        'de': {
            translation: {
                FACTS: [],
                SKILL_NAME: 'Tom´s Hello World Skill',
                REQUEST_MESSAGE: 'Es ist jetzt %s. Was ist zu tun?',
                HELP_MESSAGE: 'Momentan ist keine Hilfe implementiert. Heute ist der: ' + Sugar.Date.format(new Date(), '%d-%m-%Y'),
                HELP_REPROMPT: 'Momentan ist keine Hilfe implementiert.',
                STOP_MESSAGE: 'In Hamburg sagt man Tschüss!',
                CANCEL_MESSAGE: 'Abgebrochen. Auf Wiedersehen!'
            },
        },
        'en': {
            translation: {
                FACTS: [
                    'A year on Mercury is just 88 days long.',
                    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.'
                ],
                SKILL_NAME: 'Tom´s Hello World Skill',
                REQUEST_MESSAGE: 'It is %s. What can i do?',
                HELP_MESSAGE: 'No help.',
                HELP_REPROMPT: 'No help.',
                STOP_MESSAGE: 'Good bye',
                CANCEL_MESSAGE: 'Cancel. Bye bye.'
            },
        },
    };

let currentTimeFromDate = function(date) {
    const hours = date.getHours();
    let value;

    if (hours >= 6 && hours < 12) {
        value = 'morgens';
    } else if (hours >= 12 && hours < 14) {
        value = 'mittags';
    } else if (hours >= 14 && hours < 18) {
        value = 'nachmittags';
    } else if (hours >= 18 && hours < 23) {
        value = 'abends';
    } else {
        value = 'nachts';
    }

    return value;
};

let handlers = {
    'LaunchRequest': function() {
        //this.emit('HelloWorldIntent');
        const date = new Date();
        const time = currentTimeFromDate(date);
        this.emit(':ask', this.t('REQUEST_MESSAGE', time), 'Hallo, was soll ich für dich tun?');
    },
    'SessionEndedRequest': function() {
        //ToDo - e.g. do nothing
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', this.t('HELP_MESSAGE'));
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', this.t('CANCEL_MESSAGE'));
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'HelloWorldIntent': function() {
        let txtStr1 = 'Moin, ich bin Thomas. ',
            txtStr2 = 'Softwareentwickler aus Hamburg.',
            hh = this.event.request.intent.slots.time.value.substr(0, 2),
            mm = this.event.request.intent.slots.time.value.substr(3, 2),
            date  = new Date(1977, 7, 13, hh, mm, 0, 0);

        if ( this.event.request.intent.slots.time.value) {
            let tempText = ' Der Value-Slot lautet: <say-as interpret-as="time">',
                tempValue = this.event.request.intent.slots.time.value + '</say-as>';
            this.emit(':tell', txtStr1 + txtStr2 + tempText + tempValue + '. Es ist also demnach: ' + currentTimeFromDate(date));
        } else {
            this.emit(':ask', R.concat(txtStr1, txtStr2) + ' Kommando?', 'Hallo, das Kommando bitte!');
        }
    }
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};