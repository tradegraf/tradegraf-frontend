import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { exchangeConnectionsAtom } from '@app/recoil/atoms/profile';
import { getExchangeConnections } from '@app/api/profile';
import { useAuth } from '@app/shared/hooks/useAuth';
import { DefaultSpinner } from '@app/components/Spinner';
import useStyles from './styles';

import ExchangeListItem from './components/ExchangeListItem';
import NoExchangeWarning from './components/NoExchangeWarning';
import AddExchangeButton from './components/AddExchangeButton';

const AddExchangeModal = lazy(() => import('./components/AddExchangeModal'));

// TODO: It re-renders the existing connections. Possible improvement.
const API = () => {
	const [exchangeConnections, setExchangeConnections] = useRecoilState(exchangeConnectionsAtom);
	const [isExchangeDataPending, setIsExchangeDataPending] = useState(true);
	const [showAddExchangeModal, setShowAddExchangeModal] = useState(false);

	const { user } = useAuth();
	const classes = useStyles();
	const { t } = useTranslation('profile');

	const handleAddExchangeClick = () => {
		setShowAddExchangeModal(!showAddExchangeModal);
	};

	useEffect(() => {
		getExchangeConnections({
			data: {
				user_id: user.uid,
			},
		}).then(({ data }) => {
			setExchangeConnections(data);
			setIsExchangeDataPending(false);
		});
	}, [setExchangeConnections, user.uid]);

	if (isExchangeDataPending) {
		return <DefaultSpinner />;
	}

	return (
		<>
			{exchangeConnections.length ? (
				<>
					<div className={classes.addExchangeRow}>
						<AddExchangeButton onClick={handleAddExchangeClick} t={t} />
					</div>
					{exchangeConnections.map((item) => (
						<ExchangeListItem key={item.id} data={item} />
					))}
				</>
			) : (
				<NoExchangeWarning openAddExchangeModal={handleAddExchangeClick} t={t} />
			)}
			{showAddExchangeModal && (
				<Suspense fallback={<DefaultSpinner />}>
					<AddExchangeModal visible={showAddExchangeModal} close={handleAddExchangeClick} />
				</Suspense>
			)}
		</>
	);
};

export default memo(API);
