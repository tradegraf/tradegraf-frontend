/* istanbul ignore file */
/* eslint-disable unicorn/prevent-abbreviations */
import i18n from 'i18next';
import HttpApi from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { ENVIRONMENT } from '@app/config';

const defaultLang = 'en';

export const callback = i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: '/translations/{{lng}}/{{ns}}.json',
			queryStringParams: { v: ENVIRONMENT.REACT_APP_VERSION },
		},
		ns: [
			/* MISC */
			'global',
			'success',
			'error',
			'baseYupError',
			'sidebar',
			'button',

			/* PAGES */
			'landing',
			'authPage',
			'profile',
		],
		defaultNS: 'global',
		lng: 'en',
		fallbackLng: defaultLang,
		debug: false,
		interpolation: { escapeValue: false },
	});

export const changeLanguage = (selectedLanguage) => {
	i18n.changeLanguage(selectedLanguage);
};

export const getLangKey = () => {
	if (i18n.language) {
		return i18n.language.split('-')[0];
	}
	return 'en';
};

export const t = (translationKey, parameters = {}) => i18n.t(translationKey, parameters);

export default i18n;
