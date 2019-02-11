import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from "@material-ui/core/Stepper";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import React from "react";
import Slider from "react-slick";
import Layout from "../../components/Layout";
import StarRating from "../../components/StarRating";

const styles = (theme: Theme) => ({
  '@global': {
    ".slick-prev:before, .slick-next:before": {
      color: "black"
    }
  },
  cell: {
    cursor: "grab"
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 75,
    width: "calc(100% - 120px)",
  },
  sliderImage: {
    height: 100,
    width: 100
  },
  stepper: {
    backgroundColor: "#fafafa"
  }
});

interface IBuffetProps {
  classes?: any;
}

export class Buffet extends React.Component<IBuffetProps, {}> {
  public render() {
    const { classes } = this.props;
    const sliderSettings = {
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ],
      slidesToScroll: 3,
      slidesToShow: 3
    };

    const participants = [
      {
        context: "Buffet aux couleurs de la cuisine antillaise pour 50 collaborateurs",
        comment: "Très bien !",
        image:
          "https://static.cuistotducoin.com/img/business/participants/cadiou.jpg",
        name: "Cedre",
        rating: 5
      },
      {
        context: "Buffet aux couleurs de la cuisine antillaise pour 50 collaborateurs",
        comment: "Très bonnes saveurs. Cuisine de qualité.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/brest-metropole.jpg",
        name: "Seimi",
        rating: 5
      },
      {
        context: "Buffet aux couleurs de la cuisine brésilienne pour 15 collaborateurs",
        comment: "L'équipe a apprécié toutes les prestations de Cuistot du coin. Le buffet : original et très bon et l'atelier : ambiance détendue où chacun a trouvé sa place. Le lieu où on se sent vite très bien. Merci pour cette respiration",
        image:
          "https://static.cuistotducoin.com/img/business/participants/arkea.jpg",
        name: "Arkea",
        rating: 5
      }
    ];

    return (
      <Layout valueProposition="Concoctez avec nous une expérience culinaire authentique et gourmande pour vos salariés !"
        component={
          <Grid
            container={true}
            justify="space-around"
            className={classes.grid}
          >
            <Grid item={true}>
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
          spacing={16}
          className={classes.grid}
        >
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
              >
                Originalité
              </Typography>
              <Typography variant="body1" align="justify">
                Réveillez vos papilles en dégustant des recettes authentiques aux couleurs de la cuisine du monde. Chaque buffet est une invitation au voyage.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
              >
                Convivialité
              </Typography>
              <Typography variant="body1" align="justify">
                Dégustez les préparations de nos cuistots en toute simplicité. Privilégiez ainsi les échanges lors de repas décontractés et chaleureux.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              direction="column"
            >
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
              >
                Sérénité
              </Typography>
              <Typography variant="body1" align="justify">
                Nous nous occupons de l’organisation de A à Z. Faîtes-nous part de vos attentes et régalez-vous.
              </Typography>
            </Grid>
          </Grid>
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
          spacing={16}
          className={classes.grid}
        >
          <Stepper orientation="vertical" className={classes.stepper}>
            <Step active={true}>
              <StepLabel>Faîtes-nous part de vos souhaits</StepLabel>
              <StepContent>
                <Typography>Indiquez-nous la date, l’heure et le nombre de collaborateurs que vous souhaitez réunir autour d’un repas convivial.
                Précisez-nous le contexte de ce buffet et le budget alloué à cette prestation.</Typography>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>Plutôt cuisine du monde ou cuisine terroir ?</StepLabel>
              <StepContent>
                <Typography>Indiquez-nous les saveurs qui vous inspirent ou laissez-nous vous faire la surprise !</Typography>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>Vous êtes tranquille, on s'occupe de tout</StepLabel>
              <StepContent>
                <Typography>Dès réception de votre demande, nous construisons une proposition sur mesure pour répondre à vos attentes et selon la disponibilité de nos cuistots.
                Si besoin, nous dénichons un lieu chaleureux pour vous réunir le temps du repas.
                Le jour J, nous assurons la livraison et si besoin la mise en place et le service.
                Nous veillons à privilégier des mets qui se dégustent facilement autour d’un buffet convivial pour limiter les déchets et le gaspillage.</Typography>
              </StepContent>
            </Step>
          </Stepper>
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
          <Slider {...sliderSettings}>
            {participants.map((participant, index) => (
              <Grid key={index} className={classes.cell}>
                <Typography variant="subtitle1">{participant.name}</Typography>
                <Typography variant="subtitle2">{participant.context}</Typography>
                <img
                  src={participant.image}
                  alt={participant.name}
                  className={classes.sliderImage}
                />
                <Typography variant="body1">{participant.comment}</Typography>
                <StarRating rating={participant.rating} />
              </Grid>
            ))}
          </Slider>
        </div>
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Buffet as any) as any;
