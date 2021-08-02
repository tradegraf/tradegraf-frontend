import React, { useEffect, Suspense, lazy } from 'react';
import { useHistory } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Tabs } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@app/components/ErrorFallback';
import { DefaultSpinner } from '@app/components/Spinner';
import { useAuth } from '@app/shared/hooks/useAuth';
import { DEFAULT_TAB, PANEL_TABS } from './utils';

const { TabPane } = Tabs;
const API = lazy(() => import('./API'));

const TabsContainer = ({ match }) => {
	const history = useHistory();
	const activeKey = match.params.tab.toLowerCase();

	const { user } = useAuth();

	useEffect(() => {
		if (!PANEL_TABS[activeKey]) {
			history.push(`/${DEFAULT_TAB}`);
		}
	}, [activeKey, history]);

	return (
		<Tabs
			activeKey={PANEL_TABS[activeKey]}
			onChange={(key) => {
				history.push(`/${key}`);
			}}
		>
			<TabPane tab="Overview" key={PANEL_TABS.overview}>
				<a href={`${window.location.origin}/dashboard`}>{`${match.params.tab} ${user.uid}`}</a>
			</TabPane>
			<TabPane tab="API" key={PANEL_TABS.api}>
				<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[activeKey]}>
					<Suspense fallback={<DefaultSpinner />}>
						<API />
					</Suspense>
				</ErrorBoundary>
			</TabPane>
			<TabPane tab="Subscription" key={PANEL_TABS.subscription}>
				<p>{match.params.tab}</p>
			</TabPane>
			<TabPane tab="Invite" key={PANEL_TABS.invite}>
				<p>{match.params.tab}</p>
			</TabPane>
		</Tabs>
	);
};

TabsContainer.propTypes = {
	match: ReactRouterPropTypes.match.isRequired,
};

export default TabsContainer;
