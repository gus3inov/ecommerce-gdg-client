import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type LinkParams = {
	to: string;
	classes?: any;
	children?: any;
};

const styles = (theme: any) => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

const LinkComponent = ({
					to,
					classes,
					children,
				}: LinkParams) => (
	<Button
		variant="contained"
		className={classes.button}
		href={to}
	>
		{children}
	</Button>
);

export const Link: any = withStyles(styles)(LinkComponent);
