import React from 'react';
import { History } from 'history';
import CircularProgress from '@material-ui/core/CircularProgress';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { getAccessToken, setAccessToken } from '../utils/selectors';

interface IProps {
	history: History;
	mutate(): any;
}

const refreshTokenMutation = gql`
  mutation {
    refreshToken {
      token
    }
  }
`;

@compose(graphql(refreshTokenMutation))
class DefaultRoute extends React.Component<IProps, any> {
	async componentDidMount() {
		const token = await getAccessToken();

		if (!token) {
			this.props.history.push('/signup');
			return;
		}

		let response;
		try {
			response = await this.props.mutate();
		} catch (err) {
			this.props.history.push('/signup');
			return;
		}

		const {
			refreshToken: { token: newToken },
		} = response.data;
		await setAccessToken(newToken);
		this.props.history.push('/products');
	}

	render() {
		return (
			<CircularProgress disableShrink />
		);
	}
}

export default DefaultRoute;
