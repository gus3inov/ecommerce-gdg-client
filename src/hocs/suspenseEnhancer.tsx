import React, { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Layout } from '../ui/atoms';

export default function suspenseEnhancer<OriginProps>(C: React.ComponentType<OriginProps & any>) {
	return (props: any) => (
		<Suspense
			fallback={(
				<Layout flow="row" height="100vh" justify="center" align="center">
					<CircularProgress disableShrink />;
				</Layout>
			)}
		>
			<C
				{...props}
			/>
		</Suspense>
	);
}
