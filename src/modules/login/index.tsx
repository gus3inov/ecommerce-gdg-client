import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { History } from 'history';

import LoginPage from '../../ui/pages/LoginPage';
import { setAccessToken } from '../../utils/selectors';
import { LoginRequest } from '../../@types';

interface IProps {
	classes: any;

	history: History;

	mutate({ variables }: { variables: any }): any;
}

const logInMutation: any = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      payload {
      	token
      }
      error {
      	field
      	msg
      }
    }
  }
`;

// @ts-ignore
@graphql(logInMutation)
class Login extends Component<IProps, any> {
	onSubmit = async (values: LoginRequest) => {
		const { history } = this.props;
		const response = await this.props.mutate({
			variables: values,
		});

		const { payload } = response.data.login;

		if (!!payload) {
			setAccessToken(payload.token);
			history.push('/products');
		}
	}

	render() {

		return (
			<LoginPage
				onSubmit={this.onSubmit}
			/>
		);
	}
}

export default Login;
