import { Button, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(5)
    }
  })
);

export default function seminar() {
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
              Obtenir un devis
          </Button>
          </Grid>
        </Grid>
      }
    >
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" component="p" gutterBottom>
          Besoin de réunir votre équipe ou vos collaborateurs lors d'une journée spéciale du genre :<br />
          séminaire, réunion, journée team building, journée d'entreprise, journée des employés etc.
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <Button
            variant="contained"
            color="secondary"
            href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html"
            target="_blank"
          >
            Demander un devis !
          </Button>
        </Grid>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Repas et pauses gourmandes
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Pour le petit déjeuner, la pause café ou encore le goûter, nous vous préparerons de délicieux assortiments de tapas sucrées. Et mettrons à disposition selon vos envies des jus de fruits artisanaux ou du thé/café biologique.
          Pour le midi et/ou le soir, nous vous préparerons des assortiments de tapas salées et sucrées pour des cocktails ou bien des repas à table selon vos envies. Les repas peuvent également être accompagné de vin de nos cavistes partenaires.
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Une pause team building ?
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Nous avons une liste de lieux partenaires qui peuvent s'adapter à toutes les tailles de groupe. Si vous n'avez pas de vaisselle et de verres à disposition, nous pouvons nous occuper de tout apporter sur le lieu de votre événement puis de la reprise.
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Des lieux adaptés
        </Typography>
        <Typography variant="h5" align="justify" component="h3" gutterBottom>
          Nous avons une liste de lieux partenaires qui peuvent s'adapter à toutes les tailles de groupe. Nos lieux peuvent également disposer d'espaces de travail avec tout le nécessaire pour vos réunion.
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          L'aspect écologique sur nos prestations
        </Typography>
        <Typography variant="h5" align="justify" component="h3" gutterBottom>
          Nous avons à coeur de réduire l'impact de nos prestations. Pour cela, toutes nos recettes sont de saison mais nous utilisons également des contenants recyclables, des bonbonnières pour les boissons mais également des éco-cup.        </Typography>
      </Container>
    </Layout >
  );
}
