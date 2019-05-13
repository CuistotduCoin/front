import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import AccountMultiple from "mdi-material-ui/AccountMultiple";
import CompassOutline from "mdi-material-ui/CompassOutline";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import Link from "../components/Link";
import StaticSteper from "../components/StaticSteper";
import TestimonySlider from "../components/TestimonySlider";
import ThreeSteps from "../components/ThreeSteps";

const styles = (theme: Theme) => ({
  card: {
    padding: 10
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
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
    width: "calc(100% - 100px)",
  },
  stepper: {
    backgroundColor: "#fafafa"
  }
});

interface ICocktailProps {
  classes?: any;
}

export class Cocktail extends React.Component<ICocktailProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      { icon: <CompassOutline fontSize="large" />, title: 'Originalité', content: "Réveillez vos papilles en dégustant des recettes authentiques aux couleurs de la cuisine du monde. Chaque cocktail est une invitation au voyage." },
      { icon: <AccountMultiple fontSize="large" />, title: 'Convivialité', content: "Dégustez les préparations de nos cuistots en toute simplicité. Privilégiez ainsi les échanges lors de repas décontractés et chaleureux." },
      { icon: <EmoticonCool fontSize="large" />, title: 'Sérénité', content: "Nous nous occupons de l’organisation de A à Z. Faîtes-nous part de vos attentes et régalez-vous." }
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
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-asiatique.jpg', width: 1, height: 1, caption: "Cocktail au saveur de l'Asie", alt: "Cocktail asiatique" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-bresilien-1.jpg', width: 1, height: 1, caption: "Pièce cocktail au saveur du Brésil", alt: "Cocktail brésilien" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-bresilien-2.jpg', width: 1, height: 1, caption: "Cocktail au saveur du Brésil", alt: "Cocktail brésilien 2" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-bresilien-3.jpg', width: 1, height: 1, caption: "Cocktail pour le réseau entreprendre", alt: "Cocktail brésilien 3" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-bresilien-4.jpg', width: 1, height: 1, caption: "Cocktail complet au saveur du Brésil", alt: "Cocktail brésilien 4" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/buffet-crepes.jpg', width: 1, height: 1, caption: "Buffet crêpes au billig", alt: "Buffet crepes" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-reseau-entreprendre.jpg', width: 1, height: 1, caption: "Cocktail pour le réseau entreprendre (suite)", alt: "Cocktail reseau" },
      { src: 'https://static.cuistotducoin.com/img/gallery/cocktail/cocktail-vegetal.jpg', width: 1, height: 1, caption: "Cocktail végétal à la suite d'un atelier", alt: "Cocktail atelier" },
    ];

    const pricingCocktail = [
      {
        title: "Cocktail",
        price: '3',
        description: ['3€ la tapas, salée ou sucrée (1 tapas = 3 bouchées)', 'Composez votre cocktail en fonction de votre budget'],
        buttonText: 'Demander un devis'
      }
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
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Composez votre cocktail
        </Typography>
        <Grid className={classes.grid}>
          <Grid container justify="space-around">
            {pricingCocktail.map(pricing => (
              <Grid item key={pricing.title} xs={12} md={6} lg={4} className={classes.card}>
                <Card>
                  <CardHeader
                    title={pricing.title}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        {pricing.price}€
                </Typography>
                    </div>
                    {pricing.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Link href="https://landbot.io/u/H-117244-32JN5PQL01AGBAXB/index.html" className={classes.link}>
                      <Button fullWidth color="primary">
                        {pricing.buttonText}
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
