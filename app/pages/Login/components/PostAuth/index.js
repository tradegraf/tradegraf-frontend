import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { getTempUserMail } from '@app/redux/selectors/auth';
import EmailSentLottie from '@app/components/EmailSentLottie';
import { getMailProvider } from '@app/utils/getMailProvider';
import { EMAIL_SEARCH_LINK } from '@app/shared/constants';
import useStyles from './styles';
const { Text, Link } = Typography;

const PostAuth = () => {
	const classes = useStyles();
	const { t } = useTranslation('authPage');

	const email = useSelector(getTempUserMail);
	const emailProvider = getMailProvider(email);

	return (
		<Space direction="vertical" align="center" className={classes.container} size="large">
			<Space direction="vertical" align="center" className={classes.widthFull}>
				<Text className={classes.information}>{`${t('MESSAGE_SENT_EMAIL')}:`}</Text>
				<Text strong className={classes.information}>
					{email}
				</Text>
				<Text>{t('MESSAGE_CLICK_TO_LOGIN')}</Text>
			</Space>
			{emailProvider ? (
				<Link href={EMAIL_SEARCH_LINK} target="_blank" className={classes.providerLink}>
					{t('MESSAGE_CTA')}
				</Link>
			) : null}
			<EmailSentLottie />
		</Space>
	);
};

export default memo(PostAuth);
