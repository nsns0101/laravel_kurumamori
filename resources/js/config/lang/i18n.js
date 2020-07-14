import i18n from "i18next"
import {initReactI18next} from "react-i18next";

import translationJp from './translation.jp'
import translationKo from './translation.ko'

const resource =  {
    jp: {
        translation: translationJp
    },
    ko: {
        translation: translationKo
    }
};

i18n
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
        resources: resource,
        lng: "jp",
        fallbackLng: 'jp',
        // ns: ['translation'],
        // defaultNS: "translation",
        debug: true,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;