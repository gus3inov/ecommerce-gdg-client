import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import SignUpPage from '../../ui/pages/SignupPage';
import { SignUpRequest } from '../../@types';

interface IProps {
	classes: any;

	mutate({ variables }: { variables: any }): any;
}

const signUpMutation: any = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

// @ts-ignore
@graphql(signUpMutation)
class SignUp extends Component<IProps, any> {
	onSubmit = async (values: SignUpRequest) => {
		await this.props.mutate({
			variables: values,
		});
	}

	render() {

		return (
			<SignUpPage
				onSubmit={this.onSubmit}
			/>
		);
	}
}

export default SignUp;
