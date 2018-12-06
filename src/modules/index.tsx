import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { renderRoutes } from '../utils/routes';
import routes from './routes';

const App = () => (
	<Switch>
		{renderRoutes(routes)}
	</Switch>
);

export default withRouter(App);
