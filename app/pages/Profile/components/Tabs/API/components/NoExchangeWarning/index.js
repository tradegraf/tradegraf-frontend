import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Typography } from 'antd';

import useStyles from './styles';
import AddExchangeButton from '../AddExchangeButton';

const { Title } = Typography;

const NoExchangeWarning = ({ openAddExchangeModal, t }) => {
	const classes = useStyles();

	return (
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
			<AddExchangeButton onClick={openAddExchangeModal} t={t} />
		</Empty>
	);
};

NoExchangeWarning.propTypes = {
	openAddExchangeModal: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired,
};

export default NoExchangeWarning;
