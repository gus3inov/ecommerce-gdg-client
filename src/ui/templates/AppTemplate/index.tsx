import React from 'react';
import classNames from 'classnames';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import menus from '../../menu';
import styles from './styles';

interface IProps {
	classes?: any;
	theme?: any;
	title: string;
	children: React.ReactChild | React.ReactChildren | string | JSX.Element[];
	handleLogout(): void;
}

interface IState {
	open: boolean;
}

class AppTemplate extends React.Component<IProps, IState> {
	state = {
		open: true,
	};

	handleDrawerOpen = () => this.setState({ open: true });

	handleDrawerClose = () => this.setState({ open: false });

	render() {
		const {
			classes,
			theme,
			children,
			title,
			handleLogout,
		} = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.grow} variant="h6" color="inherit" noWrap>
							{title}
						</Typography>
						<Button
							onClick={handleLogout}
							color="inherit"
						>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						{menus.map((item) => (
							<ListItem
								key={item.id}
								// @ts-ignore
								component={NavLinkRouter}
								to={item.path}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.title} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					{children}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(AppTemplate);
