const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, (error) => {
	if (error) {
		console.error(error);
	} else {
		console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	}
});
