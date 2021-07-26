import React from 'react';
import { useTranslation } from 'react-i18next';
import { Space, Typography, Button } from 'antd';
import { REFERRAL_LINKS } from '@app/utils/constants';

import useStyles from '../../styles';

const { Text } = Typography;

const NoAccount = () => {
	const { t } = useTranslation('profile');
	const classes = useStyles();

	return (
		<Space direction="vertical" align="center" className={classes.full}>
			<Text>{t('NO_ACCOUNT_BINANCE')}</Text>
			<Button href={REFERRAL_LINKS.BINANCE.SIGN_UP} target="_blank">
				{t('SIGN_UP_BINANCE')}
			</Button>
		</Space>
	);
};

export default NoAccount;
