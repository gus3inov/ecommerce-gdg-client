import React, { Component } from 'react';

import {
	withProducts,
	InjectedProps,
	PRODUCTS_QUERY,
	PRODUCTS_SUBSCRIPTION_QUERY,
} from '../../queryHocs/products';
import {
	withProductDelete,
} from '../../mutationHocs/products';
import ProductsPage from '../../ui/pages/ProductsPage';

interface IProps extends InjectedProps {
	classes: any;
	loading: boolean;
	deleteProduct(options: any): any;
	mutate({ variables }: { variables: any }): any;
}

@withProducts
@withProductDelete
class Products extends Component<IProps, any> {
	componentDidMount() {
		const { data } = this.props;

		data.subscribeToMore({
			document: PRODUCTS_SUBSCRIPTION_QUERY,
			updateQuery: (prev: any, { subscriptionData }: any) => {
				const { node } = subscriptionData.data.product;
				if (!subscriptionData.data || +!subscriptionData.data.product) {
					return prev;
				}

				prev.productsConnection.edges = prev.productsConnection.edges.map((x: any) =>
					x.node.id === node.id
						? { __typename: 'Node', cursor: node.id, node }
						: x
				);

				return prev;
			},
		});
	}

	loadMore = () => {
		const {
			data: { productsConnection, fetchMore },
			loading,
		} = this.props;

		if (!loading && productsConnection.pageInfo.hasNextPage) {
			fetchMore({
				variables: {
					after: productsConnection.pageInfo.endCursor,
				},
				updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
					if (!fetchMoreResult) {
						return previousResult;
					}

					if (
						(!previousResult && previousResult.productsConnection) ||
						!previousResult.productsConnection.edges
					) {
						return fetchMoreResult;
					}

					return {
						productsConnection: {
							__typename: 'ProductConnection',
							pageInfo: fetchMoreResult.productsConnection.pageInfo,
							edges: [
								...previousResult.productsConnection.edges,
								...fetchMoreResult.productsConnection.edges,
							],
						},
					};
				},
			});
		}
	}

	deleteProduct = async (id: number) => {
		const {
			deleteProduct,
			data: { variables },
		} = this.props;
		await deleteProduct({
			variables: {
				id,
			},
			update: (store: any) => {
				const data = store.readQuery({
					query: PRODUCTS_QUERY,
					variables,
				});
				data.productsConnection.edges = data.productsConnection.edges.filter(
					(x: any) => x.node.id !== id
				);
				store.writeQuery({
					query: PRODUCTS_QUERY,
					data,
					variables,
				});
			},
		});
	}

	onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			data: { refetch },
		} = this.props;
		const value = e.target.value;

		refetch({
			where: {
				name_contains: value,
			},
			after: null,
		});
	}

	render() {
		const {
			data,
		} = this.props;
		if (!data || !data.productsConnection) {
			return null;
		}

		return (
			<ProductsPage
				loading={data.loading}
				data={data.productsConnection.edges}
				handleLoadMore={this.loadMore}
				deleteProduct={this.deleteProduct}
				hasNextPage={data.productsConnection.pageInfo.hasNextPage}
				onSearch={this.onSearch}
			/>
		);
	}
}

export default Products;
