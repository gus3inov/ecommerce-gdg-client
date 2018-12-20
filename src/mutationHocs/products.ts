import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const PRODUCT_CREATE_MUTATION = gql`
	mutation($name: String!, $price: Float!, $picture: Upload!, $description: String) {
		createProduct(name: $name, price: $price, picture: $picture, description: $description) {
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
`;

export const PRODUCT_DELETE_MUTATION = gql`
	mutation($id: ID!) {
		deleteProduct(where: { id: $id }) {
			id
		}
	}
`;

export interface InjectedProps {
	data: any;
	createProduct(options: any): any;
}

export const withProductCreate: any = graphql<{}, any, any>(PRODUCT_CREATE_MUTATION, {
	name: 'createProduct',
});

export const withProductDelete: any = graphql<{}, any, any>(PRODUCT_DELETE_MUTATION, {
	name: 'deleteProduct',
});
