import React from 'react';
import ViewList from '@material-ui/icons/ViewList';
import Add from '@material-ui/icons/Add';

export default [
	{
		id: 0,
		title: 'Products',
		path: '/products',
		icon: <ViewList />,
	},
	{
		id: 1,
		title: 'New Product',
		path: '/products/add',
		icon: <Add />,
	},
];
