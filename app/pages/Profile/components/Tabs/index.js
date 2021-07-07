/* eslint-disable react/prop-types */
import React, { Suspense, lazy } from 'react';
import { Tabs } from 'antd';

import { DefaultSpinner } from '@app/components/Spinner';

const { TabPane } = Tabs;
const API = lazy(() => import('./API'));

const TabsContainer = ({ match, history }) => (
	<Tabs
		activeKey={match.params.tab || 'overview'}
		onChange={(key) => {
			history.push(`/profile/${key}`);
		}}
	>
		<TabPane tab="Overview" key="overview">
			<p>{match.params.tab}</p>
		</TabPane>
		<TabPane tab="API" key="api">
			<Suspense fallback={<DefaultSpinner />}>
				<API />
			</Suspense>
		</TabPane>
		<TabPane tab="Subscription" key="subscription">
			<p>{match.params.tab}</p>
		</TabPane>
		<TabPane tab="Invite" key="invite">
			<p>{match.params.tab}</p>
		</TabPane>
	</Tabs>
);

export default TabsContainer;
