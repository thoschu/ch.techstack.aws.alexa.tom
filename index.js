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

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.3e7f8ee8-934a-4ee1-93d5-d089ada27053';

let handlers = {
    'LaunchRequest': function() {
        this.emit('HelloWorldIntent');
    },
    'GetNewFactIntent': function() {
        this.emit('HelloWorldIntent');
    },
    'SessionEndedRequest': function() {
        //ToDo - do nothing
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', 'Momentan ist keine Hilfe implementiert.');
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', 'Abgebrochen. Auf Wiedersehen!');
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'Gestoppt. In Hamburg sagt man Tschüss!');
    },
    'HelloWorldIntent': function() {
        let txtStr1 = 'Moin, ich bin Thomas. ',
            txtStr2 = 'Softwareentwickler aus Hamburg.';

        if (this.event.request.intent &&
            this.event.request.intent.slots &&
            this.event.request.intent.slots.time &&
            this.event.request.intent.slots.time.value) {
            let tempText = ' Der Value-Slot lautet: <say-as interpret-as="time">',
                tempValue = this.event.request.intent.slots.time.value + '</say-as>';
            this.emit(':tell', txtStr1 + txtStr2 + tempText + tempValue);
        }
        else {
            this.emit(':ask', txtStr1 + txtStr2 + ' Kommando?', 'Hallo, das Kommando bitte!');
        }

    },
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};