import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const PRODUCTS_QUERY = gql`
	query(
		$after: String
		$orderBy: ProductOrderByInput
		$where: ProductWhereInput
	  ) {
		productsConnection(
		  after: $after
		  first: 5
		  orderBy: $orderBy
		  where: $where
		) {
		  pageInfo {
			hasNextPage
			endCursor
		  }
		  edges {
			node {
			  id
			  price
			  pictureUrl
			  name
			  seller {
				id
			  }
			}
		  }
		}
	  }
`;

export const PRODUCTS_SUBSCRIPTION_QUERY = gql`
	subscription {
	  product(where: { mutation_in: UPDATED }) {
		node {
		  __typename
		  id
		  name
		  price
		  pictureUrl
		  seller {
			id
		  }
		}
	  }
	}
`;

export interface InjectedProps {
	data: any;
}

export const withProducts: any = graphql<{}, any, any>(PRODUCTS_QUERY, {
	name: 'fetchProducts',
});

export const withSubscriptionProducts: any = graphql<{}, any, any>(PRODUCTS_SUBSCRIPTION_QUERY, {
	name: 'subscriptionProduct',
});