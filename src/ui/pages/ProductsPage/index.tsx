import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import AppTemplate from '../../templates/AppTemplate';
import withLogout from '../../../hocs/logoutEnhancer';
import { ProductCard } from '../../molecules';
import { Products } from '../../../@types';
import { Layout } from '../../atoms/Layout';

type Props = {
	data: Products
	hasNextPage: boolean
	loading: boolean;
	logout(): void;
	handleLoadMore(): void;
	onSearch(): void;
};

const ProductsPage: React.FunctionComponent<Props> = ({
	data,
	logout,
	loading,
	handleLoadMore,
	hasNextPage,
	onSearch,
}) => (
	<AppTemplate handleLogout={logout} title="Products">
			<Layout
				flow="row"
				margin="0 0 40px 0"
			>
				<InputBase
					placeholder="Search…"
					onChange={onSearch}
				/>
				{loading && (
					<CircularProgress
						size="30px"
						disableShrink
					/>
				)}
			</Layout>
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
