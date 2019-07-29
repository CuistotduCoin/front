import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Facebook from 'mdi-material-ui/Facebook';
import GiftOutline from 'mdi-material-ui/GiftOutline';
import Instagram from 'mdi-material-ui/Instagram';
import Linkedin from 'mdi-material-ui/Linkedin';
import Twitter from 'mdi-material-ui/Twitter';
import React from "react";
import Link from "../../components/Link";

const styles = (theme: Theme) => ({
  grid: {
    padding: theme.spacing(3)
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
        <Container>
          <Grid container justify="space-around" className={classes.grid}>
            <Grid item>
              <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
              >
                <Typography component="p" variant="h6" className={classes.title} color="primary">
                  Traiteur
              </Typography>
                <Link href="/testimony" className={classes.subheading}>
                  Témoignages
              </Link>
                <Link href="/become-cook" className={classes.subheading}>
                  Devenir Partenaires
              </Link>
                <Link href="/invite" className={classes.subheading}>
                  Parrainage
              </Link>
                <Link href="https://faq.cuistotducoin.com" target="_blank" rel="noopener noreferrer" className={classes.subheading}>
                  Questions Fréquentes
              </Link>
                <Link href="/gift" className={classes.subheading}>
                  <GiftOutline fontSize="small" titleAccess="carte cadeau" />Carte Cadeau
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
                  + sur Cuistot du Coin
              </Typography>
                <Link href="/team-and-mission" className={classes.subheading}>
                  Équipe & Mission
              </Link>
                <Link href="/join" className={classes.subheading}>
                  Nous rejoindre
              </Link>
                <Link href="/presskit" className={classes.subheading}>
                  Contact & Presse
              </Link>
                <Link href="/terms" className={classes.subheading}>
                  Conditions générales & Mentions légales
              </Link>
              <Link href="http://www.blog.cuistotducoin.com" target="_blank" rel="noopener noreferrer" className={classes.subheading}>
                  Blog
              </Link>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.icons}>
            <a href="https://www.facebook.com/cuistotducoin/" target="_blank" rel="noopener noreferrer"><Facebook titleAccess="facebook" /></a>
            <a href="https://twitter.com/cuistotducoin?lang=fr" target="_blank" rel="noopener noreferrer"><Twitter titleAccess="twitter" /></a>
            <a href="https://www.instagram.com/cuistotducoin/" target="_blank" rel="noopener noreferrer"><Instagram titleAccess="instagram" /></a>
            <a href="https://www.linkedin.com/company/cuistot-du-coin" target="_blank" rel="noopener noreferrer"><Linkedin titleAccess="linkedin" /></a>
          </div>
        </Container></div >
    );
  }
}

export default withStyles(styles as any)(Footer as any) as any;