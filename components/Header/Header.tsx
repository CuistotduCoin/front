import { Link as LinkMui } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import { Theme, withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from 'mdi-material-ui/Menu';
import Phone from 'mdi-material-ui/Phone';
import React from 'react';
import AccountDropdown from '../../components/AccountDropdown';
import Link from '../../components/Link';
import Logo from '../../components/Logo';

const styles = (theme: Theme) => ({
	appBar: {
		background: 'linear-gradient(180deg,hsla(0,0%,100%,.9) 0,hsla(0,0%,100%,.8))',
		boxShadow: 'none',
	},
	button: {
		margin: theme.spacing(1),
	},
	accountButton: {
		margin: theme.spacing(1),
		color: 'white',
	},
	logo: {
		marginRight: theme.spacing(1),
	},
	logoText: {
		color: 'black',
		marginRight: theme.spacing(1),
	},
});

interface IHeaderProps {
	classes: any;
	position?: any;
	hideSignUpLogin?: boolean;
	isLoggedIn: boolean;
}

interface IHeaderState {
	up?: boolean;
	anchorElMenuServices: HTMLElement;
	anchorElMenuPartners: HTMLElement;
	swipeDrawerOpen: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
	constructor(props: IHeaderProps) {
		super(props);

		this.state = {
			up: true,
			anchorElMenuServices: null,
			anchorElMenuPartners: null,
			swipeDrawerOpen: false,
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	public handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({ up: false });
		} else {
			this.setState({ up: true });
		}
	};

	public componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	public toggleDrawer = open => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		this.setState({ swipeDrawerOpen: open });
	};

	public render() {
		const { classes, isLoggedIn } = this.props;

		const services = [
			{
				title: 'Traiteur',
				link: '/cater',
			},
			{
				title: 'Evenementiel',
				link: '/event',
			},
			{
				title: 'Atelier Teambuilding',
				link: '/teambuilding',
			},
		];

		const partners = [
			{
				title: 'Nos chefs Cuistots',
				link: '/our-cooks',
			},
			{
				title: 'Nos lieux partenaires',
				link: '/our-places',
			},
		];

		const sideList = () => (
			<div className={classes.list} role="presentation" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
				<List
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Nos services
						</ListSubheader>
					}
				>
					<Link href={'/current-offer'}>
						<ListItem button>
							<ListItemText primary="Offre du moment" />
						</ListItem>
					</Link>
					<Link href={'/recurring-cohesion'}>
						<ListItem button>
							<ListItemText primary="Cohésion toute l'année" />
						</ListItem>
					</Link>
				</List>
				<Divider />
				<List
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Nos services
						</ListSubheader>
					}
				>
					{services.map((service, index) => (
						<React.Fragment key={index}>
							<Link href={service.link}>
								<ListItem button key={service.title}>
									<ListItemText primary={service.title} />
								</ListItem>
							</Link>
						</React.Fragment>
					))}
				</List>
				<Divider />
				<List
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Nos partenaires
						</ListSubheader>
					}
				>
					{partners.map((product, index) => (
						<React.Fragment key={index}>
							<Link href={product.link}>
								<ListItem button key={product.title}>
									<ListItemText primary={product.title} />
								</ListItem>
							</Link>
						</React.Fragment>
					))}
				</List>
				<Divider />
				<Link href={'/'}>
					<ListItem button>
						<ListItemText primary="Pour les particuliers" />
					</ListItem>
				</Link>
			</div>
		);

		const hideSignUpLogin = true;
		let rightElement;

		if (isLoggedIn) {
			rightElement = <AccountDropdown />;
		} else if (!hideSignUpLogin) {
			if (this.state.up) {
				rightElement = (
					<Link href="/login">
						<Button className={classes.accountButton} variant="contained" color="primary" onScroll={this.handleScroll}>
							Se connecter
						</Button>
					</Link>
				);
			} else {
				rightElement = (
					<Link href="/sign-up">
						<Button className={classes.accountButton} variant="contained" color="primary" onScroll={this.handleScroll}>
							Premiers pas avec Cuistot du Coin
						</Button>
					</Link>
				);
			}
		}

		return (
			<AppBar position={this.props.position} className={classes.appBar} color="inherit">
				<Toolbar>
					<Container>
						<Grid container justify="space-between">
							<Grid item>
								<Grid container justify="flex-start">
									<Hidden lgUp>
										<IconButton
											aria-owns={this.state.swipeDrawerOpen ? 'simple-menu-mobile' : undefined}
											aria-haspopup="true"
											onClick={this.toggleDrawer(true)}
											color="primary"
											edge="start"
											aria-label="Menu"
										>
											<MenuIcon />
										</IconButton>
									</Hidden>
									<SwipeableDrawer open={this.state.swipeDrawerOpen} onClose={this.toggleDrawer(false)} onOpen={this.toggleDrawer(true)}>
										{sideList()}
									</SwipeableDrawer>
									<Link href="/">
										<Grid container justify="flex-start" alignItems="center">
											<Logo className={classes.logo} />
										</Grid>
									</Link>
									<Hidden mdDown>
										<Link color="secondary" href={'/current-offer'} passHref>
											<Button className={classes.button} variant="outlined" color="secondary">
												Offre du moment
											</Button>
										</Link>
										<Link href={'recurring-cohesion'} passHref>
											<Button className={classes.button} variant="outlined" color="primary">
												Cohésion toute l'année
											</Button>
										</Link>
										<Link href={'/services'} passHref>
											<Button
												aria-owns={this.state.anchorElMenuServices ? 'simple-menu-services' : undefined}
												aria-haspopup="true"
												onMouseOver={this.handlePopoverOpenMenuServices}
												className={classes.button}
												variant="outlined"
												color="primary"
											>
												Nos prestations
											</Button>
										</Link>
										<Menu
											id="simple-menu-services"
											anchorEl={this.state.anchorElMenuServices}
											open={Boolean(this.state.anchorElMenuServices)}
											MenuListProps={{ onMouseLeave: this.handleCloseServices }}
											onClose={this.handleCloseServices}
											getContentAnchorEl={null}
										>
											{services.map((service, index) => (
												<Link key={index} href={service.link}>
													<ListItem button key={service.title}>
														<ListItemText primary={service.title} />
													</ListItem>
												</Link>
											))}
										</Menu>
										<Button
											aria-owns={this.state.anchorElMenuPartners ? 'simple-menu-partners' : undefined}
											aria-haspopup="true"
											onMouseOver={this.handlePopoverOpenMenuPartners}
											className={classes.button}
											variant="outlined"
											color="primary"
										>
											Nos partenaires
										</Button>
										<Menu
											id="simple-menu-partners"
											anchorEl={this.state.anchorElMenuPartners}
											open={Boolean(this.state.anchorElMenuPartners)}
											MenuListProps={{ onMouseLeave: this.handleClosePartners }}
											onClose={this.handleClosePartners}
											getContentAnchorEl={null}
										>
											{partners.map((product, index) => (
												<Link key={index} href={product.link}>
													<ListItem button key={product.title}>
														<ListItemText primary={product.title} />
													</ListItem>
												</Link>
											))}
										</Menu>
									</Hidden>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container justify="flex-start">
									<Hidden mdDown>
										<Link href={'/individual'} color="textPrimary" passHref>
											<Button className={classes.button} variant="outlined" color="default">
												Pour les particuliers
											</Button>
										</Link>
									</Hidden>
									<LinkMui href="tel:06 79 59 88 48">
										<Button className={classes.button} variant="outlined" color="primary">
											<Phone titleAccess="phone" />
											06 79 59 88 48
										</Button>
									</LinkMui>
									{rightElement && <>{rightElement}</>}
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		);
	}

	private handlePopoverOpenMenuPartners = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ anchorElMenuPartners: event.currentTarget });
	};

	private handleClosePartners = () => {
		this.setState({ anchorElMenuPartners: null });
	};

	private handlePopoverOpenMenuServices = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ anchorElMenuServices: event.currentTarget });
	};

	private handleCloseServices = () => {
		this.setState({ anchorElMenuServices: null });
	};
}

export default withStyles(styles as any)(Header as any) as any;
