import React from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type NavLinkParams = {
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

const NavLinkComponent = ({
					to,
					classes,
					children,
				}: NavLinkParams) => (
	<Button
		variant="contained"
		className={classes.button}
		// @ts-ignore
		component={NavLinkRouter}
		to={to}
	>
		{children}
	</Button>
);

export const NavLink: any = withStyles(styles)(NavLinkComponent);
