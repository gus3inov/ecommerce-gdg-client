import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { Layout } from '../Layout';

export const Loader = () => (
	<Layout flow="row" height="100vh" justify="center" align="center">
		<CircularProgress disableShrink />;
	</Layout>
);
