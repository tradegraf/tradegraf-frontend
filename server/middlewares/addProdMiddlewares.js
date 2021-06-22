const path = require('path');
const express = require('express');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
	windowMs: 60 * 1000, // 15 minutes
	max: 100,
});

module.exports = function addProdMiddlewares(app, options) {
	const publicPath = options.publicPath || '/';
	const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

	// compression middleware compresses your server responses which makes them
	// smaller (applies also to assets). You can read more about that technique
	// and other good practices on official Express.js docs http://mxs.is/googmy
	app.use(compression());
	app.use(publicPath, express.static(outputPath));

	app.get('*', rateLimitMiddleware, (req, res) =>
		res.sendFile(path.resolve(outputPath, 'index.html')),
	);
};
