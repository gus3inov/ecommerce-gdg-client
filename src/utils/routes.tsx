import React from 'react';
import { Route } from 'react-router-dom';
import { TypeRoute } from '../@types';

export const renderRoutes = (routes: TypeRoute[]) => (
	routes.map(route => (
		<Route
			key={route.path}
			component={route.component}
			path={route.path}
			exact={route.exact}
		/>
	))
);
