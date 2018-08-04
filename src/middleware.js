import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Helmet from 'react-helmet';

import App from './containers/index';
import reducers from './reducers';


export default (req, res) => {
	const helmet = Helmet.renderStatic();
	if(process.env.NODE_ENV === 'development') {
		res.send(`
			<!doctype html>
			<html ${helmet.htmlAttributes.toString()}>
				<head ${helmet.bodyAttributes.toString()}>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>React App :)</title>
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}
				</head>
				<body>
					<div id='app'></div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
	} else if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
		res.send(`
			<!doctype html>
			<html ${helmet.htmlAttributes.toString()}>
				<head ${helmet.bodyAttributes.toString()}>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>React App :)</title>
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}
					<link type="text/css" href='bundle.css'>
				</head>
				<body>
					<div id='app'>${renderToString(
						<Provider store={createStore(reducers)}>
							<StaticRouter location={req.url} context={{}}>
								<App />
							</StaticRouter>
						</Provider>
					)}</div>
					<script src='bundle.js'></script>
				</body>
			</html>
		`);
	}
};
