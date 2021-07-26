/* eslint-disable unicorn/consistent-function-scoping */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { Button, Tag, Typography, Popconfirm, message } from 'antd';

import { EXCHANGES, EXCHANGE_CONNECTION_STATUSES_COLORS } from '@app/shared/constants';
import { BinanceLogo } from '@app/components/ExchangeLogos';
import useWindowSize from '@app/shared/hooks/useWindowSize';
import useStyles from './styles';

const ExchangeListItem = ({ data }) => {
	const classes = useStyles();
	const { t } = useTranslation('profile');

	const confirm = ({ id }) => {
		console.log(id);
		message.success('Click on Yes');
	};

	const cancel = ({ id }) => {
		console.log(id);
		message.error('Click on No');
	};

	const { width } = useWindowSize();

	return (
		<div className={classes.itemWrapper}>
			<div className={classes.leftWrapper}>
				<div className={classes.icon}>
					{data.exchange === EXCHANGES.BINANCE && <BinanceLogo size={width < 576 ? 24 : 32} />}
				</div>
				<div className={classes.leftWrapperInner}>
					<div className={classes.nameContainer}>
						<div className={classes.connectionName}>{data.name || 'sdfkhjnsdk'}</div>
						<Tag
							color={EXCHANGE_CONNECTION_STATUSES_COLORS[data.connection_status.toUpperCase()]}
							className={classes.connectionStatusTag}
						>
							{t(`global:${data.connection_status.toUpperCase()}`)}
						</Tag>
					</div>
					{/* {width > 470 && <div>{`${t('global:TOKEN')}: ${data.token.slice(0, 4)}***`}</div>} */}
				</div>
			</div>

			<div className={classes.rightWrapper}>
				<Popconfirm
					title={t('DELETE_EXCHANGE_CONFIRM')}
					onConfirm={() => confirm({ id: data.id })}
					onCancel={cancel}
					okText={t('global:YES')}
					cancelText={t('global:NO')}
					placement="topRight"
				>
					<Button>{t('global:DELETE')}</Button>
				</Popconfirm>
			</div>
		</div>
	);
};

ExchangeListItem.propTypes = {
	data: {
		exchange: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		token: PropTypes.string.isRequired,
		connection_status: PropTypes.string.isRequired,
		updated_at: PropTypes.string.isRequired,
	}.isRequired,
};

export default ExchangeListItem;
