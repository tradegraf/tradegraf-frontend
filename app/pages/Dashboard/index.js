import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const HomePage = () => (
	<article>
		<Helmet>
			<title>Home Page</title>
			<meta name="description" content="A React.js Boilerplate application homepage" />
		</Helmet>
		<div>Merhaba DASHBOARD</div>
	</article>
);

HomePage.propTypes = {};

export default HomePage;
