import { ComponentType } from 'react';

type TypeRoute = {
	path: string;
	component: ComponentType;
	exact: boolean;
};

type StringOrNumber = string | number;
