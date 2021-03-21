import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';

import injectSaga from '@/utils/injectSaga';
import injectReducer from '@/utils/injectReducer';
import { REDUX_KEY } from '@/shared/constants';
import { Table } from '@/components/Table';

import saga from './redux/saga';
import { Creators } from './redux/actions';
import reducer from './redux/reducer';

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

	const tableData = [
		{
			_id: 'dskdgsk',
			pair: 'BTC/USD',
			orderPrice: '63634$',
			amount: '46434$',
			status: 'fulfilled',
			change: '+7.45%',
			increase: true,
		},
		{
			_id: 'gsdggs',
			pair: 'BTC/USD',
			orderPrice: '62564$',
			amount: '23526$',
			status: 'fulfilled',
			change: '-0.45%',
			increase: false,
		},
		{
			_id: 'sfdhdfhs',
			pair: 'BTC/USD',
			orderPrice: '63267$',
			amount: '32525$',
			status: 'pending',
			change: '+3.2%',
			increase: true,
		},
		{
			_id: 'dfshsdfh',
			pair: 'BTC/USD',
			orderPrice: '61236$',
			amount: '52352$',
			status: 'fulfilled',
			change: '+4.67%',
			increase: true,
		},
	];

	const columnData = [
		{
			_id: 'dskdgsk',
			width: '48',
			align: 'left',
			name: 'Date',
		},
		{
			_id: 'sdgsgsd',
			width: '36',
			align: 'left',
			name: 'Pair',
		},
		{
			_id: 'shdfhsdfhdhd',
			width: '36',
			align: 'left',
			name: 'Order Price',
		},
		{
			_id: 'asgdgsgsdgs',
			width: '36',
			align: 'left',
			name: 'Amount',
		},
		{
			_id: 'asdgsg',
			width: '36',
			align: 'right',
			name: 'Status',
		},
		{
			_id: 'sdfhsdfhhd',
			width: '36',
			align: 'right',
			name: 'Change',
		},
	];

	return (
		<>
			<Stats />
			<DashboardChart />
			<Table columnData={columnData} tableData={tableData} />
		</>
	);
};

const reduxKey = REDUX_KEY.DASHBOARD;
const withSaga = injectSaga({ key: reduxKey, saga });
const withReducer = injectReducer({ key: reduxKey, reducer });

export default compose(withReducer, withSaga)(DashboardPage);
