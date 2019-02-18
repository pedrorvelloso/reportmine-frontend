import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Generated from './Generated';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/generated" component={Generated} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
