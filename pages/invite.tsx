import { Button, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(5)
    },
  })
);


export default function invite() {
  const classes = useStyles();

  return (
    <Layout
      component={
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html"
              target="_blank"
            >
              Invitez une entreprise
          </Button>
          </Grid>
        </Grid>
      }
    >
      <Container maxWidth="lg">
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Votre fidélité est récompensée grâce à la mise en place de notre programme de fidélité à destination des entreprises.
          Découvrez nos 2 programmes avantage :
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Le parrainage
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Parrainez une autre entreprise ou un autre service et recevez des bons cadeaux sur vos prochaines prestations !
          50€ sur votre prochaine prestation ET 50€ offert sur la première prestation de votre filleul
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          La fidélité
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          A partir de Janvier, chaque client ayant réalisé une ou plusieurs prestations avec Cuistot du Coin aura un solde de points en fonction de vos achats.
          Vous obtenez 1 point tous les 1 euros dépensés (sur le montant hors taxe de vos prestations). Voici le programme avantage :
        </Typography>
        <Typography variant="h5" component="ul" gutterBottom>
          <li>1 000 points = Bon d’achat de 50€</li>
          <li>2 000 points = Bon d’achat de 100€</li>
          <li>5 000 points = Bon d’achat de 250€</li>
        </Typography>
        <Typography variant="h5" align="justify" component="h3" gutterBottom>
          Vous ne connaissez pas votre solde de fidélité ?
          Envoyez-nous un mail à : anaelle@cuistotducoin.com
        </Typography>
      </Container>
    </Layout>
  );
}
