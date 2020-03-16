import { Button, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import PricingCardList from "../components/PricingCardList";

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
    }
  })
);

export default function lunch() {
  const classes = useStyles();

  const pricing = [
    {
      title: "Atelier initiation",
      price: "30",
      description: [
        `1H d'atelier festif`,
        `Réalisation de recettes simples et rapides`,
        `Défis culinaires en équipe`,
        "Ingrédients et matériel fournis",
        "Tabliers et livrets de recettes fournis"
      ],
      buttonText: "Obtenir un devis"
    },
    {
      title: "Atelier découverte",
      price: "50",
      description: [
        `2H d'atelier cuisine du monde ou technique`,
        `Préparation de tapas salées et sucrées dégustées en fin d'atelier`,
        "Ingrédients et matériel fournis",
        "Tabliers et livrets de recettes fournis"
      ],
      buttonText: "Obtenir un devis"
    },
    {
      title: "Atelier immersion",
      price: "65",
      description: [
        `3H d'atelier cuisine du monde`,
        `Préparation d'un repas dégusté en fin d'atelier`,
        `Boissons incluses`,
        "Ingrédients et matériel fournis",
        "Tabliers et livrets de recettes fournis"
      ],
      buttonText: "Obtenir un devis"
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
          Partagez une expérience de team building qui conviendra à tous les
          membres de votre équipe. Pas besoin de compétence en cuisine, il
          s'agit avant tout d'un moment convivial qui permet de solidifier
          l'esprit d'équipe !
        </Typography>
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Nos formules de Team Building
        </Typography>
        <Typography variant="h4" align="center" component="h3" gutterBottom>
          Nos Ateliers de Cuisine
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Vos collaborateurs seront réunis auprès de nos Chefs Cuistots qui leur
          apprendrons des recettes authentiques. Plus de 15 univers à explorer :
          Cuisine de monde, pâtisserie, boulangerie, cuisine healthy, ...
        </Typography>
        <Grid className={classes.grid}>
          <PricingCardList
            pricing={pricing}
            href={"https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html"}
          />
        </Grid>
        <Typography variant="h4" align="center" component="h3" gutterBottom>
          Nos Challenges Culinaires
        </Typography>
        <Typography variant="h5" align="justify" component="p" gutterBottom>
          Une activité de team building originale ludique mêlant cohésion
          d'équipe et compétition ! Pas besoin d’être un expert en cuisine, la
          cohésion d’équipe sera la clé du succès. A partir de 20 personnes et
          jusqu'à 200 personnes, nos challenges conviennent à tous les types de
          groupe. Vos équipes sont divisés en petits groupes et devrons élaborez
          les meilleures recettes et réalisez le plus beau dressage en 1H top
          chrono !
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
      </Container>
    </Layout>
  );
}
