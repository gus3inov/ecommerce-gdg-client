import { ComponentType } from 'react';

type TypeRoute = {
	path: string;
	component: ComponentType;
	exact: boolean;
};

type SignUpRequest = {
	name: string;
	email: string;
	password: StringOrNumber;
};

type LoginRequest = {
	email: string;
	password: StringOrNumber;
};

type User = {
	id: string;
	email: string;
	password: string;
	name: string;
};

type Product = {
	id: StringOrNumber;
	name: string;
	pictureUrl: string;
	description: string;
	price: number;
	seller: User;
};

type Products = Product[];

type StringOrNumber = string | number;
