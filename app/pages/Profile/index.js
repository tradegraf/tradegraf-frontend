import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { DefaultSpinner } from '@app/components/Spinner';

import injectSaga from '@app/utils/injectSaga';
import injectReducer from '@app/utils/injectReducer';
import routes from '@app/shared/routes';
import { REDUX_KEY } from '@app/shared/constants';
import saga from './redux/saga';
import reducer from './redux/reducer';
import { Creators } from './redux/actions';

import Header from './components/Header';
import TabsContainer from './components/Tabs';
import useStyles from './styles';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const { pathname } = useLocation();

	useEffect(() => {
		dispatch(Creators.initPage());
		return () => dispatch(Creators.destroyPage());
	}, [dispatch]);

	useEffect(() => {
		if (pathname.split('/').filter((path) => path.length > 0).length < 2)
			history.push('/profile/overview');
	}, [history, pathname]);

	return (
		<>
			<Header />
			<div className={classes.container}>
				<Router>
					<Switch>
						<Route path="/profile/:tab" component={TabsContainer} exact={false} />
					</Switch>
				</Router>
			</div>
		</>
	);
};

ProfilePage.propTypes = {};

const reduxKey = REDUX_KEY.PROFILE;
const withSaga = injectSaga({ key: reduxKey, saga });
const withReducer = injectReducer({ key: reduxKey, reducer });

export default compose(withReducer, withSaga)(ProfilePage);
