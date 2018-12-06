import { lazy } from 'react';
import { suspenseEnhancer } from '../hocs';
import { TypeRoute } from '../@types';

const SignUp = lazy(() => import('./signup'));
const DefaultRoute = lazy(() => import('../commons/DefaultRoute'));

const routes: TypeRoute[] = [
	{
		path: '/',
		exact: true,
		component: suspenseEnhancer(DefaultRoute),
	},
	{
		path: '/signup',
		exact: true,
		component: suspenseEnhancer(SignUp),
	},
];

export default routes;
