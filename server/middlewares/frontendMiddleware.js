/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
	const isProduction = process.env.NODE_ENV === 'production';

	if (isProduction) {
		const addProductionMiddlewares = require('./addProdMiddlewares');
		addProductionMiddlewares(app, options);
	} else {
		const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
		const addDevelopmentMiddlewares = require('./addDevMiddlewares');
		addDevelopmentMiddlewares(app, webpackConfig);
	}

	return app;
};
