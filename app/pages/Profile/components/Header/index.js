import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { PageHeader, Descriptions, Row, Col } from 'antd';

import { titleConstants, descriptionConstants } from './utils';

const Header = ({ path = 'overview' }) => {
	const { t } = useTranslation('profile');

	const title = t(titleConstants[path]);
	const description = t(descriptionConstants[path]);

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Row>
				<Col flex={1}>
					<PageHeader className="page-title" onBack={null} title={title}>
						<Descriptions.Item>{description}</Descriptions.Item>
					</PageHeader>
				</Col>
			</Row>
		</>
	);
};

Header.defaultProps = {
	path: 'overview',
};

Header.propTypes = {
	path: PropTypes.string(),
};

export default Header;
