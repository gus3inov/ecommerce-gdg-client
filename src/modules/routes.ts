import { lazy } from 'react';
import { suspenseEnhancer } from '../hocs';
import { TypeRoute } from '../@types';

const SignUp = lazy(() => import('./signup'));
const LogIn = lazy(() => import('./login'));
const Products = lazy(() => import('./products'));
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
	{
		path: '/login',
		exact: true,
		component: suspenseEnhancer(LogIn),
	},
	{
		path: '/products',
		exact: true,
		component: suspenseEnhancer(Products),
	},
];

export default routes;
