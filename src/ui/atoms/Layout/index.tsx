import React from 'react';
import styles from './styles';

const { StyledLayout } = styles;

type TypeLayout = {
	flow: 'column' | 'row' | 'column-reverse';
	wrap?: 'wrap' | 'nowrap';
	padding?: string;
	margin?: string;
	gap?: number;
	justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
	align?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
	width?: string,
	height?: string;
	children: any;
	'data-name'?: string,
};

export const Layout: React.SFC<TypeLayout> = ({ children, ...props }) => (
	<StyledLayout {...props}>
		{children}
	</StyledLayout>
);

Layout.defaultProps = {
	wrap: 'nowrap',
	padding: '0',
	margin: '0',
	gap: 0,
	justify: undefined,
	align: undefined,
	width: '',
	height: '',
	'data-name': 'layout',
};
