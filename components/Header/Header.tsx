import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from "@material-ui/core/ListSubheader";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme, withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "mdi-material-ui/Menu";
import Phone from 'mdi-material-ui/Phone';
import React from "react";
import AccountDropdown from "../../components/AccountDropdown";
import Link from "../../components/Link";
import Logo from "../../components/Logo";

const styles = (theme: Theme) => ({
  appBar: {
    background: "linear-gradient(180deg,hsla(0,0%,100%,.9) 0,hsla(0,0%,100%,.8))",
    boxShadow: "none"
  },
  button: {
    margin: theme.spacing(1)
  },
  accountButton: {
    margin: theme.spacing(1),
    color: "white"
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
  },
  logo: {
    marginRight: theme.spacing(1)
  },
  logoText: {
    color: "black",
    marginRight: theme.spacing(1)
  },
});

interface IHeaderProps {
  classes: any;
  static?: boolean;
  hideSignUpLogin?: boolean;
  isLoggedIn: boolean;
}

interface IHeaderState {
  up?: boolean;
  anchorElIndividual: HTMLElement;
  anchorElBusiness: HTMLElement;
  swipeDrawerOpen: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      up: true,
      anchorElIndividual: null,
      anchorElBusiness: null,
      swipeDrawerOpen: false
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
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ swipeDrawerOpen: open });
  };

  public render() {
    const {
      classes,
      isLoggedIn
    } = this.props;

    const productsB2B = [
      { title: 'Ateliers teambuilding', link: '/teambuilding', linkAs: '/teambuilding' },
      { title: 'Cocktails et réceptions', link: '/cocktail-business', linkAs: '/cocktail-business' },
      { title: 'Pauses gourmandes', link: '/breakfast', linkAs: '/breakfast' },
      { title: 'Déjeuner', link: '/lunch', linkAs: '/lunch' },
      { title: 'Evenement sur mesure', link: '/events-business', linkAs: '/events-business' }
    ];

    const productsB2C = [
      { title: 'Ateliers privatifs', link: '/individual?tabName=private', linkAs: '/individual/private' },
      { title: 'Cocktails et réceptions', link: '/cocktail', linkAs: '/cocktail' },
      { title: 'Ateliers collectif', link: '/individual?tabName=collective', linkAs: '/individual/collective' },
      { title: 'Cuistot à domicile', link: '/individual?tabName=privatecook', linkAs: '/individual/privatecook' },
      { title: 'Evenement sur mesure', link: '/events', linkAs: '/events' }
    ]

    const sideList = () => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pour les particuliers
            </ListSubheader>
          }>
          {productsB2C.map((product, index) => (
            <React.Fragment key={index}>
              <Link href={product.link} as={product.linkAs} passHref>
                <ListItem button key={product.title}>
                  <ListItemText primary={product.title} />
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pour les entreprises
            </ListSubheader>
          }>
          {productsB2B.map((product, index) => (
            <React.Fragment key={index}>
              <Link href={product.link} as={product.linkAs} passHref>
                <ListItem button key={product.title}>
                  <ListItemText primary={product.title} />
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>
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
            <Button
              className={classes.accountButton}
              variant="contained"
              color="primary"
              onScroll={this.handleScroll}
            >
              Se connecter
            </Button>
          </Link>
        );
      } else {
        rightElement = (
          <Link href="/sign-up">
            <Button
              className={classes.accountButton}
              variant="contained"
              color="primary"
              onScroll={this.handleScroll}
            >
              Premiers pas avec Cuistot du Coin
            </Button>
          </Link>
        );
      }
    }

    return (
      <AppBar
        position={this.props.static ? "static" : "sticky"}
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Grid container justify="space-between" className={classes.grid}>
            <Grid item>
              <Grid container justify="flex-start">
                <Hidden lgUp>
                  <IconButton aria-owns={this.state.swipeDrawerOpen ? 'simple-menu-mobile' : undefined} aria-haspopup="true" onClick={this.toggleDrawer(true)} color="primary" edge="start" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <SwipeableDrawer
                  open={this.state.swipeDrawerOpen}
                  onClose={this.toggleDrawer(false)}
                  onOpen={this.toggleDrawer(true)}
                >
                  {sideList()}
                </SwipeableDrawer>
                <Link href="/">
                  <Grid container justify="flex-start" alignItems="center">
                    <Logo className={classes.logo} />
                    <Hidden xsDown>
                      <Typography className={classes.logoText} variant="h6" component="div">
                        Cuistot du Coin
                      </Typography>
                    </Hidden>
                  </Grid>
                </Link>
                <Hidden mdDown>
                  <Button aria-owns={this.state.anchorElBusiness ? 'simple-menu-individual' : undefined} aria-haspopup="true" onClick={this.handleClickIndividual} className={classes.button} variant="outlined" color="primary">
                    Pour les particuliers
                  </Button>
                </Hidden>
                <Menu id="simple-menu-individual" anchorEl={this.state.anchorElIndividual} open={Boolean(this.state.anchorElIndividual)} onClose={this.handleClose}>
                  <Link href="/individual?tabName=private" as="/individual/private"><MenuItem>Ateliers privatifs</MenuItem></Link>
                  <Link href="/individual?tabName=collective" as="/individual/collective"><MenuItem>Ateliers collectifs</MenuItem></Link>
                  <Link href="/individual?tabName=privatecook" as="/individual/privatecook"><MenuItem>Cuistot à domicile</MenuItem></Link>
                  <Link href="/cocktail"><MenuItem>Cocktails & réceptions</MenuItem></Link>
                  <Link href="/events"><MenuItem>Evenement sur mesure</MenuItem></Link>
                </Menu>
                <Hidden mdDown>
                  <Button aria-owns={this.state.anchorElBusiness ? 'simple-menu-business' : undefined} aria-haspopup="true" onClick={this.handleClickBusiness} className={classes.button} variant="outlined" color="primary">
                    Pour les entreprises
                  </Button>
                </Hidden>
                <Menu id="simple-menu-business" anchorEl={this.state.anchorElBusiness} open={Boolean(this.state.anchorElBusiness)} onClose={this.handleClose}>
                  <Link href="/teambuilding"><MenuItem>Ateliers teambuilding</MenuItem></Link>
                  <Link href="/breakfast"><MenuItem>Petit déjeuner / Pauses gourmandes</MenuItem></Link>
                  <Link href="/lunch"><MenuItem>Déjeuner / Lunch Box</MenuItem></Link>
                  <Link href="/cocktail-business"><MenuItem>Cocktails & réceptions</MenuItem></Link>
                  <Link href="/working-day"><MenuItem>Journée d'équipe</MenuItem></Link>
                  <Link href="/events-business"><MenuItem>Evenement sur mesure</MenuItem></Link>
                  <Link href="/work-council"><MenuItem>Comité d'Entreprise</MenuItem></Link>
                </Menu>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="flex-start">
                <Link href="tel:06 79 59 88 48">
                  <Button className={classes.button} variant="outlined" color="primary">
                    <Phone titleAccess="phone" />06 79 59 88 48
                </Button>
                </Link>
                {rightElement && (
                  <>
                    {rightElement}
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
    );
  }

  private handleClickIndividual = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElIndividual: event.currentTarget });
  }

  private handleClickBusiness = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElBusiness: event.currentTarget });
  }

  private handleClickMobile = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElMobile: event.currentTarget });
  }

  private handleClose = () => {
    this.setState({ anchorElIndividual: null, anchorElBusiness: null, anchorElMobile: null });
  }
}

export default withStyles(styles as any)(Header as any) as any;
