import React, { memo } from 'react';
import { Typography, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { getMailProvider } from '@app/utils/getMailProvider';
import { EMAIL_SEARCH_LINK } from '@app/shared/constants';
import { getEmailFromLocalStorage } from '@app/utils/localStorage';
import { hideEmail } from '@app/utils/hideEmail';
import useStyles from './styles';

const { Text, Link } = Typography;

const PostAuth = () => {
	const classes = useStyles();
	const { t } = useTranslation('authPage');

	const email = getEmailFromLocalStorage();
	const emailProvider = email ? getMailProvider(email) : null;

	return (
		<Space direction="vertical" align="center" className={classes.container} size="large">
			<Space direction="vertical" align="center" className={classes.widthFull}>
				<Text className={classes.information}>{`${t('MESSAGE_SENT_EMAIL')}:`}</Text>
				<Text className={classes.information} ellipsis strong>
					{hideEmail(email)}
				</Text>
				<Text>{t('MESSAGE_CLICK_TO_LOGIN')}</Text>
			</Space>
			{emailProvider ? (
				<Link href={EMAIL_SEARCH_LINK} target="_blank" className={classes.providerLink}>
					{t('MESSAGE_CTA')}
				</Link>
			) : null}
		</Space>
	);
};

export default memo(PostAuth);
