import React from 'react';
import { Field, Form } from 'react-final-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { FieldText, Link } from '../../atoms';
import styles from './styles';

interface IProps {
	classes: any;

	onSubmit(values: object): Promise<void>;
}

const SignUpPage: React.FunctionComponent<IProps> = ({
	classes,
	onSubmit,
}) => (
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
				onSubmit={onSubmit}
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
							Sign In
						</Link>
						<Button
							fullWidth
							onClick={() => handleSubmit()}
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign up
						</Button>
					</form>
				)}
			/>
		</Paper>
	</main>
);

export default withStyles(styles)(SignUpPage);
