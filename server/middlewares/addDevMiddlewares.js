/* eslint-disable unicorn/prevent-abbreviations */
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const createWebpackMiddleware = (compiler, publicPath) =>
	webpackDevMiddleware(compiler, {
		publicPath,
		stats: 'errors-only',
	});

module.exports = function addDevelopmentMiddlewares(app, webpackConfig) {
	const compiler = webpack(webpackConfig);
	const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));

	const fs = compiler.outputFileSystem;

	app.get('*', (request, res) => {
		fs.readFile(path.join(compiler.outputPath, 'index.html'), (error, file) => {
			if (error) {
				res.sendStatus(404);
			} else {
				res.send(file.toString());
			}
		});
	});
};
