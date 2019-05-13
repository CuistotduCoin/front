import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
  logo: {
    marginRight: theme.spacing(1)
  },
  logoText: {
    color: "black",
    marginRight: theme.spacing(1)
  }
});

interface IHeaderProps {
  classes: any;
  static?: boolean;
  hideSignUpLogin?: boolean;
  hideCompanyIndividual?: boolean;
  isLoggedIn: boolean;
}

interface IHeaderState {
  up?: boolean;
  anchorElIndividual: HTMLElement;
  anchorElBusiness: HTMLElement;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      up: true,
      anchorElIndividual: null,
      anchorElBusiness: null
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

  public render() {
    const {
      classes,
      isLoggedIn
    } = this.props;

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
          <Grid container justify="flex-start" alignItems="center">
            <Link href="/">
              <Grid container justify="flex-start" alignItems="center">
                <Logo className={classes.logo} />
                <Typography className={classes.logoText}
                  variant="h6"
                  component="div"
                >
                  Cuistot du Coin
                </Typography>
              </Grid>
            </Link>
            <Button aria-owns={this.state.anchorElBusiness ? 'simple-menu-individual' : undefined} aria-haspopup="true" onClick={this.handleClickIndividual} className={classes.button} variant="outlined" color="primary">
              Pour les particuliers
            </Button>
            <Menu id="simple-menu-individual" anchorEl={this.state.anchorElIndividual} open={Boolean(this.state.anchorElIndividual)} onClose={this.handleClose}>
              <Link href="/individual#private"><MenuItem>Ateliers privatifs</MenuItem></Link>
              <Link href="/individual#collective"><MenuItem>Ateliers collectifs</MenuItem></Link>
              <Link href="/individual#privatechef"><MenuItem>Chef à domicile</MenuItem></Link>
              <Link href="/cocktail"><MenuItem>Cocktails & réceptions</MenuItem></Link>
              <Link href="/events"><MenuItem>Evenement sur mesure</MenuItem></Link>
            </Menu>
            <Button aria-owns={this.state.anchorElBusiness ? 'simple-menu-business' : undefined} aria-haspopup="true" onClick={this.handleClickBusiness} className={classes.button} variant="outlined" color="primary">
              Pour les entreprises
            </Button>
            <Menu id="simple-menu-business" anchorEl={this.state.anchorElBusiness} open={Boolean(this.state.anchorElBusiness)} onClose={this.handleClose}>
              <Link href="/teambuilding"><MenuItem>Ateliers teambuilding</MenuItem></Link>
              <Link href="/breakfast"><MenuItem>Petit déjeuner / Pauses gourmandes</MenuItem></Link>
              <Link href="/lunch"><MenuItem>Déjeuner / Lunch Box</MenuItem></Link>
              <Link href="/cocktail-business"><MenuItem>Cocktails & réceptions</MenuItem></Link>
              <Link href="/cocktail-business"><MenuItem>Journée d'équipe</MenuItem></Link>
              <Link href="/events-business"><MenuItem>Evenement sur mesure</MenuItem></Link>
              <Link href="/work-council"><MenuItem>Comité d'Entreprise</MenuItem></Link>
            </Menu>
          </Grid>
          <Grid container justify="flex-end">
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
        </Toolbar>
      </AppBar>
    );
  }

  private handleClickIndividual = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElIndividual: event.currentTarget });
  }

  private handleClickBusiness = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorElBusiness: event.currentTarget });
  }

  private handleClose = () => {
    this.setState({ anchorElIndividual: null, anchorElBusiness: null });
  }
}

export default withStyles(styles as any)(Header as any) as any;
