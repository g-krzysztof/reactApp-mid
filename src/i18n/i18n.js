import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import CustomBackend from './CustomBackend';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const API_TOKEN = '5ceb60d6b7bdd2ee0ffd934cb3711e8c';
const PROJECT_ID = '402195';

i18n
    // load translation using http
    .use(CustomBackend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        defaultLanguage: 'en',
        otherLanguages: ['pl'],
        fallbackLng: 'en',
        debug: true,
        saveMissing: true,

        backend: {
            // cors-anywhere is a trick. Don't use it in production
            // loadPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/list',
            // addPath: 'https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/add',
            loadPath: 'https://api.poeditor.com/v2/terms/list',
            addPath: 'https://api.poeditor.com/v2/terms/add',
            crossDomain: true,
            parse: data => {
                const parsedData = JSON.parse(data);
                const terms = parsedData.result.terms.reduce((acc, item) => {
                    acc[item.term] = item.translation.content || item.term;

                    return acc;
                }, {});

                return terms;
            },
            parsePayload: (namespace, key) => {
                if (key === '_t') return;

                const data = [{
                    term: key,
                }];
                const payload = {
                    api_token: API_TOKEN,
                    data: JSON.stringify(data),
                    id: PROJECT_ID,
                };

                return payload;
            },
            parseLoadPayload: ({ lng }) => {
                const payload = {
                    api_token: API_TOKEN,
                    language: lng,
                    id: PROJECT_ID,
                };

                return payload;
            },
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;