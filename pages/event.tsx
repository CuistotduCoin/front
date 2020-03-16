import { Button, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import AccountMultiple from "mdi-material-ui/AccountMultiple";
import CompassOutline from "mdi-material-ui/CompassOutline";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import FlipCardList from "../components/FlipCardList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3)
    },
    typography: {
      marginTop: 15
    },
    grid: {
      margin: "0px auto",
      maxWidth: 1080,
      padding: theme.spacing(3)
    }
  })
);

export default function events() {
  const classes = useStyles();

  const steps = [
    {
      icon: <CompassOutline fontSize="large" />,
      title: "Motiver",
      content:
        "La motivation de vos équipes est déterminante pour apporter une dynamique individuelle et collective, le plus qui fera aussi la différence."
    },
    {
      icon: <AccountMultiple fontSize="large" />,
      title: "Fidéliser",
      content:
        "La fidélisation de vos clients et de vos collaborateurs est vitale pour développer et pérenniser durablement vos relations commerciales et managériales."
    },
    {
      icon: <EmoticonCool fontSize="large" />,
      title: "Créer le lien",
      content:
        "Le capital humain est au cœur de toute stratégie d’entreprise et doit se révéler à travers un fil conducteur essentiel : échange et partage."
    }
  ];

  const products = [
    {
      title: "Nos journées d'équipes / Séminaires",
      content: `Besoin de réunir votre équipe ou tous vos collaborateurs lors d'une journée spéciale (séminaire, journée team building ...) ?
      On vous propose:
        - Des lieux: Salle de réunion, lieux privatisés
      - Le traiteur : Pauses gourmandes, cocktails, repas etc.`,
      image: "https://static.cuistotducoin.com/img/home/breakfast.jpg",
      link: "/seminar"
    },
    {
      title: "Nos Challenges Culinaires",
      content: `A partir de 20 collaborateurs, organisez une animation inédite et accessible à tous ! Vos collaborateurs auront 1h top chrono' pour relever le défi : cuisiner les meilleurs plats et les plus beaux dressages !`,
      image: "https://static.cuistotducoin.com/img/home/breakfast.jpg",
      link: "/challenge"
    },
    {
      title: "Nos pop-up stations",
      content: `todo`,
      image: "https://static.cuistotducoin.com/img/home/plateau-repas.jpg",
      link: "/pop-up-station"
    }
  ];

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="h3"
          align="center"
          component="h2"
          gutterBottom
        >
          Cuistot du Coin, organisateur événementiel d'entreprise.
        </Typography>
        <Typography variant="h5" align="center" component="p" gutterBottom>
          Pas le temps de gérer vos événements ? Notre service événementiel s'occupe de tout !<br />
          Depuis plus d'un an nous avons organisé pas moins de <b>50 événements</b> divers tels que : Séminaires, journées d'équipe, soirées de fin d'année pour des entreprises à Brest et partout dans le Finistère !<br />
          Une agence événementielle 2.0 à Brest, en plus d'avoir des lieux partenaires,  nous sommes expert dans la food ! Le traiteur et l'animation culinaire sont au cœur de notre entreprise. Un merveilleux cocktail pour inviter vos collaborateurs à un voyager lors de  vos événements et vos animations
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
        <Typography variant="h3" align="center" component="h2" gutterBottom>
          Evenement sur mesure
        </Typography>
        <Typography variant="h5" align="center" component="p" gutterBottom>
          Vous et votre équipe avez quelques choses à fêter ? L'anniversaire de votre entreprise, les fêtes de fin d'années, la journée des salariés etc.
          Notre agence événementielle Cuistot du coin se chargera de vous trouver le lieu idéal, du service traiteur et même des animations !
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
        <Typography
          variant="h3"
          align="center"
          component="h2"
          gutterBottom
        >
          Nos services événementiels classiques
        </Typography>
        <Typography variant="h5" align="center" component="p" gutterBottom>
          todo
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <FlipCardList listCard={products} />
        </Grid>
      </Container>
    </Layout>
  );
}
