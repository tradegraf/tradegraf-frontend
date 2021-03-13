import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';

import { REDUX_KEY } from '../../shared/constants';
import saga from './redux/saga';
import reducer from './redux/reducer';
import { Creators } from './redux/actions';

import { Stats } from './components/Stats';
import { DashboardChart } from './components/Chart';

const DashboardPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Creators.initPage());
		return () => {
			dispatch(Creators.destroyPage());
		};
	}, []);

	return (
		<>
			<Stats />
			<DashboardChart />
		</>
	);
};

const reduxKey = REDUX_KEY.DASHBOARD;
const withSaga = injectSaga({ key: reduxKey, saga });
const withReducer = injectReducer({ key: reduxKey, reducer });

export default compose(withReducer, withSaga)(DashboardPage);
