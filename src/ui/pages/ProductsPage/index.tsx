import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import AppTemplate from '../../templates/AppTemplate';
import withLogout from '../../../hocs/logoutEnhancer';
import { ProductCard } from '../../molecules';
import { Products } from '../../../@types';
import { Layout } from "../../atoms/Layout";

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
			<InfiniteScroll
				pageStart={0}
				loadMore={handleLoadMore}
				hasMore={hasNextPage}
				loader={(
					<Layout flow="row" height="200px" justify="center" align="center">
						<CircularProgress disableShrink />;
					</Layout>
				)}
			>
				<Grid container spacing={24}>
						{
							data && data.map((product: any) => (
								<Grid
									item
									sm={4}
									key={product.node.id}
								>
									<ProductCard
										data={product.node}
										handleEdit={() => console.log('edit')}
									/>
								</Grid>
							))
						}
				</Grid>
			</InfiniteScroll>
	</AppTemplate>
);

export default withLogout(ProductsPage);
