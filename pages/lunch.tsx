import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountMultiple from "mdi-material-ui/AccountMultiple";
import CompassOutline from "mdi-material-ui/CompassOutline";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import PricingCardList from "../components/PricingCardList";
import StaticSteper from "../components/StaticSteper";
import Steps from "../components/Steps";

const styles = (theme: Theme) => ({
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
});

interface ILunchProps {
  classes?: any;
}

class Lunch extends React.Component<ILunchProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      {
        icon: <CompassOutline fontSize="large" />,
        title: "Originalité",
        content:
          "Réveillez vos papilles en dégustant des recettes authentiques aux couleurs de la cuisine du monde. Chaque repas est une invitation au voyage."
      },
      {
        icon: <AccountMultiple fontSize="large" />,
        title: "Convivialité",
        content:
          "Dégustez les préparations de nos cuistots en toute simplicité. Privilégiez ainsi les échanges lors de repas décontractés et chaleureux."
      },
      {
        icon: <EmoticonCool fontSize="large" />,
        title: "Sérénité",
        content:
          "Nous nous occupons de l’organisation de A à Z. Faîtes-nous part de vos attentes et régalez-vous."
      }
    ];

    const stepsFAQ = [
      {
        title: `Faîtes-nous part de vos attentes.`,
        content: `Indiquez-nous la date, l’heure et le nombre de collaborateurs que vous souhaitez réunir autour d’un repas convivial. Précisez-nous le contexte de ce repas et le budget alloué à cette prestation. Indiquez-nous les saveurs qui vous inspirent ou laissez-nous vous faire la surprise !`
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

    const photos = [
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-asiatique.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail au saveur de l'Asie",
        alt: "Cocktail asiatique"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-1.jpg",
        width: 1,
        height: 1,
        caption: "Pièce cocktail au saveur du Brésil",
        alt: "Cocktail brésilien"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-2.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail au saveur du Brésil",
        alt: "Cocktail brésilien 2"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-3.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail pour le réseau entreprendre",
        alt: "Cocktail brésilien 3"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-bresilien-4.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail complet au saveur du Brésil",
        alt: "Cocktail brésilien 4"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/buffet-crepes.jpg",
        width: 1,
        height: 1,
        caption: "Buffet crêpes au billig",
        alt: "Buffet crepes"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-reseau-entreprendre.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail pour le réseau entreprendre (suite)",
        alt: "Cocktail reseau"
      },
      {
        src:
          "https://static.cuistotducoin.com/img/cocktail-business/cocktail-vegetal.jpg",
        width: 1,
        height: 1,
        caption: "Cocktail végétal à la suite d'un atelier",
        alt: "Cocktail atelier"
      }
    ];

    const pricing = [
      {
        title: "Plat froid + Dessert",
        price: "15",
        description: ["La formule classique"],
        buttonText: "Demander un devis"
      },
      {
        title: "Entrée + Plat froid + Dessert",
        price: "18",
        description: ["Pour un repas en toute simplicité"],
        buttonText: "Demander un devis"
      },
      {
        title: "Entrée + Plat chaud + Dessert",
        price: "23",
        description: ["Pour un repas gourmand"],
        buttonText: "Demander un devis"
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
        <Grid
          container
          justify="space-around"
          alignItems="flex-start"
          spacing={2}
          className={classes.grid}
        >
          <Steps steps={steps} />
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
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Organisez un repas convivial
        </Typography>
        <Grid className={classes.grid}>
          <PricingCardList
            pricing={pricing}
            href={"https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html"}
          />
        </Grid>
        <Typography
          variant="caption"
          align="center"
          component="p"
          gutterBottom
          className={classes.typography}
        >
          +1€ si le plat est conditionné par personne
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Ils nous font confiance :
        </Typography>
        <Gallery photos={photos} />
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Lunch as any) as any;
