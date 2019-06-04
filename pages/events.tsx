import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import HeartMultipleOutline from "mdi-material-ui/HeartMultipleOutline";
import MapSearch from "mdi-material-ui/MapSearch";
import SilverwareVariant from "mdi-material-ui/SilverwareVariant";
import React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import PricingCardList from "../components/PricingCardList";
import StaticSteper from "../components/StaticSteper";
import TestimonySlider from "../components/TestimonySlider";
import ThreeSteps from "../components/ThreeSteps";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 30,
    width: "calc(100% - 100px)",
  },
  stepper: {
    backgroundColor: "#fafafa"
  },
  typography: {
    marginTop: 35
  }
});

interface ICocktailProps {
  classes?: any;
}

export class Cocktail extends React.Component<ICocktailProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      { icon: <MapSearch fontSize="large" />, title: 'Salles et emplacements', content: "Nous nous chargeons de trouver l'endroit idéal parmis nos nombreux lieux partenaires pour que votre événement soit une réussite." },
      { icon: <HeartMultipleOutline fontSize="large" />, title: 'Activités fédératrices', content: "Réunion de famille, Anniversaire, Atelier de cuisine... Faîtes-nous part du nombre d'invités que vous souhaitez réunir et du contexte de ces temps-forts et nous personnalisons nos propositions." },
      { icon: <SilverwareVariant fontSize="large" />, title: 'Service traiteur', content: "Nos cuistots vont vous régaler et sortir des sentiers battus. Boissons partenaires / Personnel et assistance" }
    ];

    const stepsFAQ = [
      {
        title: `Faîtes-nous part de vos attentes.`,
        content: `Indiquez-nous la date, l’heure et le nombre de collaborateurs que vous souhaitez réunir autour d’un repas convivial. Précisez-nous le contexte de ce cocktail et le budget alloué à cette prestation. Indiquez-nous les saveurs qui vous inspirent ou laissez-nous vous faire la surprise !`
      },
      {
        title: `Nous vous apportons un accompagnement sur mesure`,
        content: `Dès réception de votre demande, nous construisons une proposition sur mesure pour répondre à vos attentes et selon la disponibilité de nos cuistots. Si besoin, nous dénichons un lieu chaleureux pour vous réunir le temps du repas. Le jour J, nous assurons la livraison et si besoin la mise en place et le service.`
      },
      {
        title: `Nous proposons des formats propices au partage`,
        content: `Nous veillons à privilégier des mets qui se dégustent facilement autour d’un buffet convivial. Nous pensons à la planète et limitons les déchets et le gaspillage.`
      }
    ];

    const testimonies = [
      {
        context: "Buffet aux couleurs de la cuisine antillaise pour 50 collaborateurs",
        comment: "Très bien !",
        image:
          "https://static.cuistotducoin.com/img/testimony/cedre.jpg",
        name: "Cedre",
        rating: 5
      },
      {
        context: "Buffet aux couleurs de la cuisine antillaise pour 50 collaborateurs",
        comment: "Très bonnes saveurs. Cuisine de qualité.",
        image:
          "https://static.cuistotducoin.com/img/testimony/seimi.jpg",
        name: "Seimi",
        rating: 5
      },
      {
        context: "Buffet aux couleurs de la cuisine brésilienne pour 15 collaborateurs",
        comment: "L'équipe a apprécié toutes les prestations de Cuistot du coin. Le buffet : original et très bon et l'atelier : ambiance détendue où chacun a trouvé sa place. Le lieu où on se sent vite très bien. Merci pour cette respiration",
        image:
          "https://static.cuistotducoin.com/img/testimony/arkea.jpg",
        name: "Arkea",
        rating: 5
      }
    ];

    const photos = [
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-asiatique.jpg', width: 1, height: 1, caption: "Cocktail au saveur de l'Asie", alt: "Cocktail asiatique" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-1.jpg', width: 1, height: 1, caption: "Pièce cocktail au saveur du Brésil", alt: "Cocktail brésilien" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-2.jpg', width: 1, height: 1, caption: "Cocktail au saveur du Brésil", alt: "Cocktail brésilien 2" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-3.jpg', width: 1, height: 1, caption: "Cocktail pour le réseau entreprendre", alt: "Cocktail brésilien 3" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-4.jpg', width: 1, height: 1, caption: "Cocktail complet au saveur du Brésil", alt: "Cocktail brésilien 4" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/buffet-crepes.jpg', width: 1, height: 1, caption: "Buffet crêpes au billig", alt: "Buffet crepes" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-reseau-entreprendre.jpg', width: 1, height: 1, caption: "Cocktail pour le réseau entreprendre (suite)", alt: "Cocktail reseau" },
      { src: 'https://static.cuistotducoin.com/img/cocktail-business/cocktail-vegetal.jpg', width: 1, height: 1, caption: "Cocktail végétal à la suite d'un atelier", alt: "Cocktail atelier" },
    ];

    const pricing = [
      {
        title: "Café d'accueil / Goûter",
        price: '5',
        description: ['Un petit dejeuner gourmand pour bien commencer la journée'],
        buttonText: 'Demander un devis'
      },
      {
        title: "Repas",
        price: '15',
        description: [''],
        buttonText: 'Demander un devis'
      },
      {
        title: "Activité atelier de cuisine",
        price: '30',
        description: [''],
        buttonText: 'Demander un devis'
      },
    ];

    return (
      <Layout
        component={
          <Grid
            container
            justify="space-around"
            className={classes.grid}
          >
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                href="https://landbot.io/u/H-117244-32JN5PQL01AGBAXB/index.html"
                target="_blank"
              >
                Obtenir un devis
            </Button>
            </Grid>
          </Grid>
        }>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          className={classes.typography}
        >
          Nous organisons, vous faites la fête.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          component="h3"
          gutterBottom
        >
          Rassemblez vous et célébrez l'occasion – laissez-nous le reste. De la vision à l'exécution, nos organisateurs événementiels vous aideront à rendre votre prochain événement inoubliable.
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="flex-start"
          spacing={2}
          className={classes.grid}
        >
          <ThreeSteps steps={steps} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Comment ça marche
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={2}
          className={classes.grid}
        >
          <StaticSteper steps={stepsFAQ} />
        </Grid>
        <Grid className={classes.grid}>
          <PricingCardList pricing={pricing} href={"https://landbot.io/u/H-117244-32JN5PQL01AGBAXB/index.html"} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Ils nous font confiance :
        </Typography>
        <div className={classes.slider}>
          <TestimonySlider testimonies={testimonies} />
        </div>
        <Gallery photos={photos} />
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Cocktail as any) as any;
