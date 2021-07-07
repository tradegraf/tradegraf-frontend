import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Empty } from 'antd';

import { apiDataSelector } from '@app/pages/Profile/redux/selectors';
import useStyles from './styles';

const { Title } = Typography;

const API = () => {
	const apiData = useSelector(apiDataSelector.getData);
	const isApiDataPending = useSelector(apiDataSelector.isPending);

	const classes = useStyles();
	const { t } = useTranslation('profile');

	console.log('apiData', apiData);

	return apiData ? (
		<div>API</div>
	) : (
		<Empty
			className={classes.warningMessageContainer}
			image={Empty.PRESENTED_IMAGE_SIMPLE}
			description={
				<>
					<Title className="page-title" level={3}>
						{t('CONNECT_YOUR_API')}
					</Title>
					<span>{t('NO_API_CONNECTION_MESSAGE')}</span>
				</>
			}
		>
			<Button type="primary" size="large">
				{t('ADD_NEW_EXCHANGE')}
			</Button>
		</Empty>
	);
};

export default API;
