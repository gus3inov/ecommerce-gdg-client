import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { withClientState } from 'apollo-link-state';
import { setContext } from 'apollo-link-context';
import { ApolloLink, split } from 'apollo-link';
import { getAccessToken } from '../utils/selectors';

export const uploadLink = createUploadLink({
	uri: 'http://localhost:4000/graphql',
	credentials: 'same-origin',
});

const clientSocket = new SubscriptionClient('ws://localhost:4000/graphql', {
	reconnect: true,
});

const socketlink = new WebSocketLink(clientSocket);

const stateLink = withClientState({
	cache: new InMemoryCache(),
	defaults: {
		visibilityFilter: 'SHOW_ALL',
		todos: [],
	},
	resolvers: {
		Mutation: {
			addUserId: (_: any, { userId }: any, { cache }: any) => {
				const data = {
					getUserId: {
						userId,
					},
				};
				cache.writeData({ data });
				return null;
			},
		},
	},
});

const authLink = setContext((_: any, { headers }: any) => {
	const token = getAccessToken();

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const links = split(
	({ query }) => {
		const defenition: any = getMainDefinition(query);
		return defenition.kind === 'OperationDefinition' && defenition.operation === 'subscription';
	},
	socketlink,
	ApolloLink.from([
		authLink,
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors) {
				graphQLErrors.map(({ message, locations, path }) =>
					console.log(
						`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
					)
				);
			}

			if (networkError) {
				console.log(`[Network error]: ${networkError}`);
			}
		}),
		stateLink,
		uploadLink,
		new HttpLink({
			uri: 'http://localhost:4000/graphql',
			credentials: 'same-origin',
		}),
	])
);

export const client = new ApolloClient({
	link: links,
	cache: new InMemoryCache(),
});
