import { Button, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AccountMultiple from "mdi-material-ui/AccountMultiple";
import CompassOutline from "mdi-material-ui/CompassOutline";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import Layout from "../components/Layout";
import Steps from "../components/Steps";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: 10
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(2)
    },
    grid: {
      margin: "0px auto",
      maxWidth: 1080,
      padding: theme.spacing(3)
    },
    link: {
      width: "100%"
    },
    slider: {
      margin: "0px auto",
      paddingBottom: 30,
      width: "calc(100% - 100px)"
    },
    stepper: {
      backgroundColor: "#fafafa"
    }
  })
);

export default function cocktail() {
  const classes = useStyles();

  const steps = [
    {
      icon: <CompassOutline fontSize="large" />,
      title: "Des tapas de saison et originales",
      content:
        "Réveillez vos papilles en dégustant des recettes authentiques aux couleurs de la cuisine du monde. Tout est préparé par nos Chefs Cuistots avec des produits frais et de saison."
    },
    {
      icon: <AccountMultiple fontSize="large" />,
      title: "Stop au gaspillage",
      content:
        "Nous veillons à privilégier des mets qui se dégustent facilement autour d’un buffet convivial. Nous pensons à la planète et limitons les déchets et le gaspillage."
    },
    {
      icon: <EmoticonCool fontSize="large" />,
      title: "Sérénité",
      content:
        "Nous nous occupons de l’organisation de A à Z. Faîtes-nous part de vos attentes et régalez-vous."
    }
  ];

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
          Nos assortiments de tapas salées et sucrées sont idéales pour tous vos cocktails, réceptions et autres rassemblements !
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Notre offre cocktail
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Nous concoctons pour vous un assortiment de tapas salées et sucrées : de saison, frais et savoureux !
          A partir de 3€/personne
          Nous recommandons 5 tapas par personnes dans le cadre d'un cocktail déjeunatoire ou dînatoire (en général 4 tapas salées et 1 tapas sucrée)
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
          Nos engagements qualité
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="flex-start"
          spacing={2}
          className={classes.grid}
        >
          <Steps steps={steps} />
        </Grid>
      </Container>
    </Layout>
  );
}
