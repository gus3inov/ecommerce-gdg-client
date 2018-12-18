import React, { Component } from 'react';

import {
	withProducts,
	InjectedProps,
} from '../../queryHocs/products';
import AddProductsPage from '../../ui/pages/AddProductPage';

interface IProps extends InjectedProps {
	classes: any;
	loading: boolean;
	mutate({ variables }: { variables: any }): any;
}

@withProducts
class AddProduct extends Component<IProps, any> {

	onSubmit = (values: any) => {
		console.log(values);
	}

	handleAddImage = (value: any) => {
		console.log(value);
	}

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
