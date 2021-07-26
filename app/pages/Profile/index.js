import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import TabsContainer from './components/Tabs';
import useStyles from './styles';

const ProfilePage = () => {
	const classes = useStyles();

	return (
		<>
			<Header />
			<div className={classes.container}>
				<Router basename="/profile">
					<Switch>
						<Route path="/:tab" component={TabsContainer} exact />
						<Redirect to="/overview" />
					</Switch>
				</Router>
			</div>
		</>
	);
};

ProfilePage.propTypes = {};

export default ProfilePage;
