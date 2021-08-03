const express = require('express');
const { resolve } = require('path');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/', express.static('public'));
app.use('/assets', express.static('app/assets'));
app.use('/translations/en', express.static('app/translations/en'));
// app.use('/translations/tr', express.static('app/translations/tr'));

// In production we need to pass these values in instead of relying on webpack
setup(app, {
	outputPath: resolve(process.cwd(), 'build'),
	publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (request, response, next) => {
	request.url = `${request.url}.gz`;
	response.set('Content-Encoding', 'gzip');
	next();
});

// Start your app.
// eslint-disable-next-line consistent-return
app.listen(port, host, async (error) => {
	if (error) {
		return logger.error(error.message);
	}

	logger.appStarted(port, prettyHost);
});
