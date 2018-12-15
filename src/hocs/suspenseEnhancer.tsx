import React, { Suspense } from 'react';
import { Loader } from '../ui/atoms';

export default function suspenseEnhancer<OriginProps>(C: React.ComponentType<OriginProps & any>) {
	return (props: any) => (
		<Suspense
			fallback={(
				<Loader />
			)}
		>
			<C
				{...props}
			/>
		</Suspense>
	);
}
