import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';
import { Loader } from '../../atoms';
import AppTemplate from '../../templates/AppTemplate';
import withLogout from '../../../hocs/logoutEnhancer';
import { ProductCard } from '../../molecules';
import { Products } from '../../../@types';

type Props = {
	data: Products
	hasNextPage: boolean
	logout(): void;
	handleLoadMore(): void;
};

const ProductsPage: React.FunctionComponent<Props> = ({
	data,
	logout,
	handleLoadMore,
	hasNextPage,
}) => (
	<AppTemplate handleLogout={logout} title="Products">
		<Grid container spacing={24}>
			<InfiniteScroll
				pageStart={0}
				loadMore={handleLoadMore}
				hasMore={hasNextPage}
				loader={<Loader />}
			>
				{
					data && data.map(product => (
						<Grid
							item
							sm={4}
							key={product.id}
						>
							<ProductCard
								data={product}
								handleEdit={() => console.log('edit')}
							/>
						</Grid>
					))
				}
			</InfiniteScroll>
		</Grid>
	</AppTemplate>
);

export default withLogout(ProductsPage);
