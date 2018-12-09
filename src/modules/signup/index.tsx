import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { FieldText, Link } from '../../ui/atoms';
import styles from './styles';

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
	onSubmit = async (values: any) => {
		await this.props.mutate({
			variables: values,
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<main className={classes.main}>
				<CssBaseline/>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign Up
					</Typography>
					<Form
						onSubmit={this.onSubmit}
						initialValues={{ employed: true, stooge: 'larry' }}
						render={({ handleSubmit }) => (
							<form className={classes.form}>
								<Field
									name="name"
									component={FieldText}
									type="text"
									label="Full name"
								/>
								<Field
									name="email"
									component={FieldText}
									type="text"
									label="Email"
								/>
								<Field
									name="password"
									component={FieldText}
									type="text"
									label="Password"
								/>
								<Link to="/login">
									Login
								</Link>
								<Button
									fullWidth
									onClick={() => handleSubmit()}
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Sign in
								</Button>
							</form>
						)}
					/>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(SignUp);
