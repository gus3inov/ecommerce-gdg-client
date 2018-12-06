import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from './bootstrap/apollo';
import App from './modules';

export default () => (
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>
);
