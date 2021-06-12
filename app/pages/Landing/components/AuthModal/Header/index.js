import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import useStyles from './classes';

const { Title } = Typography;

const Header = () => {
	const { t } = useTranslation('authPage');
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>{t('TITLE')}</title>
			</Helmet>
			<Row>
				<Col flex={1}>
					<Title level={1} className={classes.header}>
						{t('TITLE')}
					</Title>
				</Col>
			</Row>
		</>
	);
};

export default memo(Header);
