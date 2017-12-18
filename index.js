'use strict';

const Alexa = require('alexa-sdk'),
    R = require('ramda'),
    Sugar = require('sugar'),
    Request = require('request');

const APP_ID = 'xxx',
    languageStrings = {
        'de': {
            translation: {
                FACTS: [],
                SKILL_NAME: 'Tom´s Hello World Skill',
                REQUEST_MESSAGE: 'Es ist jetzt %s. Was ist zu tun?',
                HELP_MESSAGE: 'Momentan ist keine Hilfe implementiert. Heute ist der: ' + Sugar.Date.format(new Date(), '%d-%m-%Y'),
                HELP_REPROMPT: 'Momentan ist keine Hilfe implementiert.',
                STOP_MESSAGE: 'In Hamburg sagt man Tschüss!',
                CANCEL_MESSAGE: [
                    'Abgebrochen. Auf Wiedersehen!',
                    'Bis zum nächsten Mal.',
                    'Bitte sehr.',
                    'Gerne wieder.'
                ]
            },
        },
        'en': {
            translation: {
                FACTS: [
                    'Foo Bar',
                    'baz'
                ],
                SKILL_NAME: 'Tom´s Hello World Skill',
                REQUEST_MESSAGE: 'It is %s. What can i do?',
                HELP_MESSAGE: 'No help.',
                HELP_REPROMPT: 'No help.',
                STOP_MESSAGE: 'Good bye',
                CANCEL_MESSAGE: [
                    'Cancel. Bye bye.'
                ]
            },
        },
    };

let currentTimeFromDate = function (date) {
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
    'LaunchRequest': function () {
        //this.emit('HelloWorldIntent');
        const date = new Date();
        const time = currentTimeFromDate(date);
        this.emit(':ask', this.t('REQUEST_MESSAGE', time), 'Hallo, was soll ich für dich tun?');
    },
    'SessionEndedRequest': function () {
        //ToDo - e.g. do nothing
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', this.t('HELP_MESSAGE'));
    },
    'AMAZON.CancelIntent': function () {
        let that = this,
            url = 'https://requestb.in/rhkumqrh';

        Request(url, function (error, response, body) {
            if (!error) {
                let tmpIdx = Sugar.Number.random(0, that.t('CANCEL_MESSAGE').length - 1),
                    tmpTxt = R.nth(tmpIdx, that.t('CANCEL_MESSAGE'));

                that.response.speak(tmpTxt + ' ' + body);
            } else {
                that.response.speak('uuuups.');
            }

            that.emit(':responseReady');
        });
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'HelloWorldIntent': function () {
        let txtStr1 = 'Moin, ich bin Thomas. ',
            txtStr2 = 'Softwareentwickler aus Hamburg.',
            hh = this.event.request.intent.slots.time.value.substr(0, 2),
            mm = this.event.request.intent.slots.time.value.substr(3, 2),
            date = new Date(1977, 7, 13, hh, mm, 0, 0);

        if (this.event.request.intent.slots.time.value) {
            let tempText = ' Der Value-Slot lautet: <say-as interpret-as="time">',
                tempValue = this.event.request.intent.slots.time.value + '</say-as>';

            this.emit(':tell', txtStr1 + txtStr2 + tempText + tempValue + '. Es ist also demnach: ' + currentTimeFromDate(date));
        } else {
            //this.emit(':ask', R.concat(txtStr1, txtStr2) + ' Kommando?', 'Hallo, das Kommando bitte!');
            this.response.speak(R.concat(txtStr1, txtStr2) + ' Kommando?');
            this.response.listen('Hallo, das Kommando bitte!');
            this.emit(':responseReady');
        }
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};