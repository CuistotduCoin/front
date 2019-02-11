import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TwitterIcon from 'mdi-material-ui/Twitter';
import Link from "next/link";
import React from "react";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  root: {
    backgroundColor: grey[900]
  },
  title: {
    marginBottom: '1.5rem',
    opacity: '0.85'
  },
  subheading: {
    marginBottom: '0.3rem',
    color: 'white',
    fontSize: '0.8rem'
  },
  icons: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    "& a": {
      color: 'white',
      marginRight: '10px'
    }
  }
});

export interface IFooterProps {
  classes?: any;
}

export class Footer extends React.Component<IFooterProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Cuistot du Coin
              </Typography>
              <Link href="/team">
                <a><Typography variant="subtitle1" className={classes.subheading}>L'équipe</Typography></a>
              </Link>
              <Link href="/mission">
                <a><Typography variant="subtitle1" className={classes.subheading}>Notre mission</Typography></a>
              </Link>
              <Link href="/join">
                <a><Typography variant="subtitle1" className={classes.subheading}>Nous rejoindre</Typography></a>
              </Link>
              <Link href="/presskit">
                <a><Typography variant="subtitle1" className={classes.subheading}>Contact & Presse</Typography></a>
              </Link>
              <Link href="/terms">
                <a><Typography variant="subtitle1" className={classes.subheading}>Conditions légales</Typography></a>
              </Link>
              <a href="http://www.blog.cuistotducoin.com" target="_blank">
                <Typography variant="subtitle1" className={classes.subheading}>Blog</Typography>
              </a>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Gourmets
              </Typography>
              <Link href="/subscription">
                <a><Typography variant="subtitle1" className={classes.subheading}>Abonnement</Typography></a>
              </Link>
              <Link href="/how-it-works#pour-les-gourmets">
                <a><Typography variant="subtitle1" className={classes.subheading}>Comment ça marche</Typography></a>
              </Link>
              <Link href="/testimony">
                <a><Typography variant="subtitle1" className={classes.subheading}>Temoignages</Typography></a>
              </Link>
              <Link href="/gift">
                <a><Typography variant="subtitle1" className={classes.subheading}>Offrir</Typography></a>
              </Link>
              <Link href="/invite">
                <a><Typography variant="subtitle1" className={classes.subheading}>Parrainage</Typography></a>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Cuistots
              </Typography>
              <Link href="/how-it-works#pour-les-cuistots">
                <a><Typography variant="subtitle1" className={classes.subheading}>Comment ça marche</Typography></a>
              </Link>
              <Link href="/testimony">
                <a><Typography variant="subtitle1" className={classes.subheading}>Temoignages</Typography></a>
              </Link>
              <Link href="/become-cook">
                <a><Typography variant="subtitle1" className={classes.subheading}>Devenir Cuistot</Typography></a>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Entreprises
              </Typography>
              <Link href="/how-it-works#pour-les-entreprises">
                <a><Typography variant="subtitle1" className={classes.subheading}>Comment ça marche</Typography></a>
              </Link>
              <Link href="/testimony">
                <a><Typography variant="subtitle1" className={classes.subheading}>Temoignages</Typography></a>
              </Link>
              <Link href="/invite-business">
                <a><Typography variant="subtitle1" className={classes.subheading}>Parrainage</Typography></a>
              </Link>
              <Link href="/terms-pro">
                <a><Typography variant="subtitle1" className={classes.subheading}>Conditions légales</Typography></a>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography component="p" variant="h6" className={classes.title} color="primary">
                Partenaires
              </Typography>
              <Link href="/how-it-works#pour-les-partenaires">
                <a><Typography variant="subtitle1" className={classes.subheading}>Comment ça marche</Typography></a>
              </Link>
              <Link href="/testimony">
                <a><Typography variant="subtitle1" className={classes.subheading}>Temoignages</Typography></a>
              </Link>
              <Link href="/invite-business">
                <a><Typography variant="subtitle1" className={classes.subheading}>Devenir partenaires</Typography></a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.icons}>
          <a href="https://www.facebook.com/cuistotducoin/" target="_blank"><FacebookIcon /></a>
          <a href="https://twitter.com/cuistotducoin?lang=fr" target="_blank"><TwitterIcon /></a>
          <a href="https://www.instagram.com/cuistotducoin/" target="_blank"><InstagramIcon /></a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles as any)(Footer as any) as any;