import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import _ from 'lodash';
import { ToastContainer } from 'react-toastify';

// import { getToken, getUser, getIsAuthTempTokenPending } from './redux/selectors/auth';

import AppLayout from './containers/App/Layout';
// import Spinner from './components/Spinner';
// import { ROUTE } from './routes';

const LandingRedirect = ({ children }) => 
	// const token = getToken();
	// const user = getUser();

	// if (!token || _.isEmpty(user)) {
	// 	return <Redirect to={ROUTE.LOGIN.path} />;
	// }

	 children
;

// const AuthRedirect = ({ component: Component }) => {
// 	return (
// 		<Route
// 			render={props => {
// 				return getToken() ? (
// 					<Redirect to={ROUTE.COUNTRY_SELECTION.path} />
// 				) : (
// 					<Component {...props} />
// 				);
// 			}}
// 		/>
// 	);
// };

const App = props => 
	// const { isAuthTempTokenPending } = props;
	 (
		<>
			<Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
			<ToastContainer position="top-right" className="toast-z-index" />
			<Switch>
				<Route
					exact
					path="/health"
					name="Health Check"
					render={() => <p>{Date.now()}</p>}
				/>
				{/* <AuthRedirect path={ROUTE.LOGIN.path} component={ROUTE.LOGIN.component} /> */}
				{/* {isAuthTempTokenPending ? ( */}
				{/* <Spinner />  ) : */}
				<LandingRedirect>
					<Route
						path="/"
						render={_props => <AppLayout {..._props} />}
					/>
				</LandingRedirect>
			</Switch>
		</>
	)
;

const mapStateToProps = state => 
	// return { isAuthTempTokenPending: getIsAuthTempTokenPending(state) };
	 ({
		isAuthTempTokenPending: false,
	})
;

const withConnect = connect(mapStateToProps);

export default withConnect(App);
