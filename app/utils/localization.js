import trTR from 'antd/es/locale/tr_TR';
import enUS from 'antd/es/locale/en_US';

import { LOCAL_DATE_FORMAT, LOCAL_DATE_TIME_FORMAT } from '@app/shared/constants';
import { getLangKey } from '@app/i18n';

// Get locale for ant design components according to user locale
export const getAntLocale = (userLocale = getLangKey()) => {
	if (userLocale === 'en') {
		return enUS;
	}

	return trTR;
};

export const getLocalDateFormat = (userLocale = getLangKey()) => {
	if (userLocale === 'en') {
		return LOCAL_DATE_FORMAT.EN;
	}

	return LOCAL_DATE_FORMAT.TR;
};

export const getLocalDateTimeFormat = (userLocale = getLangKey()) => {
	if (userLocale === 'en') {
		return LOCAL_DATE_TIME_FORMAT.EN;
	}

	return LOCAL_DATE_TIME_FORMAT.TR;
};

export const numberFormat = (
	{ maxDecimal = 2, minDecimal = 0 } = { maxDecimal: 2, minDecimal: 0 },
) => {
	let maxDecimalAdjusted = maxDecimal;
	if (maxDecimalAdjusted < minDecimal) {
		maxDecimalAdjusted = minDecimal;
	}
	return new Intl.NumberFormat(getLangKey(), {
		maximumFractionDigits: maxDecimalAdjusted,
		minimumFractionDigits: minDecimal,
	});
};

export const percentFormat = ({ maxDecimal = 2 } = { maxDecimal: 2 }) =>
	new Intl.NumberFormat(getLangKey(), { style: 'percent', maximumFractionDigits: maxDecimal });

// TODO
export const currencyFormat = (
	{ maxDecimal = 2, userLocale = getLangKey() } = {
		maxDecimal: 2,
		userLocale: getLangKey(),
	},
) =>
	new Intl.NumberFormat(userLocale, {
		style: 'currency',
		maximumFractionDigits: maxDecimal,
	});
