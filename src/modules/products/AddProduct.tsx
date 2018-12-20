import React, { Component } from 'react';
import { History } from 'history';

import {
	withProductCreate,
	InjectedProps,
} from '../../mutationHocs/products';
import {
	PRODUCTS_QUERY,
} from '../../queryHocs/products';
import AddProductsPage from '../../ui/pages/AddProductPage';

interface IProps extends InjectedProps {
	classes: any;
	loading: boolean;
	location: History.LocationState;
	history: History;
	mutate({ variables }: { variables: any }): any;
}

interface IState {
	file: any;
}

@withProductCreate
class AddProduct extends Component<IProps, IState> {
	state = {
		file: {
			file: {},
		},
	};

	onSubmit = async (values: any) => {
		const { createProduct, history } = this.props;
		const { file } = this.state;

		await createProduct({
			variables: {
				...values,
				price: parseFloat(values.price),
				picture: file.file,
			},
			update: (store: any, { data }: any) => {
				const dataQuery: any = store.readQuery({
					query: PRODUCTS_QUERY,
				});
				dataQuery.productsConnection.edges = [
					{
						__typename: 'Node',
						cursor: data.createProduct.id,
						node: data.createProduct,
					},
					...dataQuery.productsConnection.edges,
				];
				dataQuery.products.push(createProduct);
				store.writeQuery({
					query: PRODUCTS_QUERY,
					data: dataQuery,
				});
			},
		});

		await history.push('/products');
	}

	handleAddImage = (file: any) => this.setState({
		file,
	})

	render() {
		return (
			<AddProductsPage
				onSubmit={this.onSubmit}
				handleAddImage={this.handleAddImage}
			/>
		);
	}
}

export default AddProduct;
