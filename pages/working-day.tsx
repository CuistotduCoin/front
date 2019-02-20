import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Mood from "@material-ui/icons/Mood";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import MathCompass from "mdi-material-ui/MathCompass";
import React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import StaticSteper from "../components/StaticSteper";
import TestimonySlider from "../components/TestimonySlider";
import ThreeSteps from "../components/ThreeSteps";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing.unit * 3
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 30,
    width: "calc(100% - 100px)",
  }
});

interface IBuffetProps {
  classes?: any;
}

export class Buffet extends React.Component<IBuffetProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      { icon: <Mood />, title: 'Engagement', content: "Nous préparons une recette adaptée pour motiver vos équipes lors de réunions de travail. De l’accueil soigné dans nos lieux partenaires à l’organisation des salles de travail en passant par la mise en place de buffets pour vous restaurer et savourer des recettes authentiques. Et si le temps le permet, passez aux fourneaux avec vos collaborateurs pour faire le plein de motivation." },
      { icon: <MathCompass />, title: 'Sur mesure', content: "Nous nous adaptons à vos impératifs : budgets, contraintes horaires, secteurs géographiques. faîtes-nous part du nombre de collaborateurs que vous souhaitez réunir et du contexte de ces temps forts et nous personnalisons nos propositions." },
      { icon: <EmoticonCool />, title: 'Sérénité', content: "Nous prenons en main l’organisation de ces temps en équipe de A à Z. ne vous souciez de rien et soyez serein ! Vous n’avez plus qu’à préparer vos temps de travail avec vos équipes." }
    ];

    const stepsFAQ = [
      {
        title: 'Faîtes-nous part de vos attentes en rendez-vous ou lors d’un échange téléphonique.',
        content: `Indiquez-nous la date, l’heure et le nombre de collaborateurs que vous souhaitez réunir autour d’un repas convivial. Précisez- nous le contexte de ce buffet et le budget alloué à cette prestation.`
      },
      {
        title: 'Plutôt cuisine du monde ou cuisine terroir ?',
        content: `Indiquez-nous les saveurs qui vous inspirent ou laissez-nous vous faire la surprise !`
      },
      {
        title: `Vous êtes tranquille, on s'occupe de tout`,
        content: `Dès réception de votre demande, nous construisons une proposition sur mesure pour répondre à vos attentes et selon la disponibilité de nos cuistots. Si besoin, nous dénichons un lieu chaleureux pour vous réunir le temps du repas. Le jour J, nous assurons la livraison et si besoin la mise en place et le service. Nous veillons à privilégier des mets qui se dégustent facilement autour d’un buffet convivial pour limiter les déchets et le gaspillage.`
      },
    ];

    const testimonies = [
      {
        context: "Atelier pour une équipe de 25 collaborateurs",
        comment: "Grand merci pour votre prestation. Les retours sont top et correspondent vraiment aux attentes de mon associé et moi même, bravo.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/cadiou.jpg",
        name: "Cabinet Bourhis",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 70 collaborateurs",
        comment: "Génial ! Merci pour cette prestation.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/brest-metropole.jpg",
        name: "Apside",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurs",
        comment: "L'équipe a apprécié toutes les prestations de Cuistot du coin. Le buffet : original et très bon et l'atelier : ambiance détendue où chacun a trouvé sa place. Le lieu où se sent vite très bien. Merci pour cette respiration.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/arkea.jpg",
        name: "CM Arkea",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurss",
        comment: "Lieu magnifique, prestation au top. Tout était parfait : l'atelier, l'animation, l'organisation ainsi que le lieu.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/cadiou.jpg",
        name: "Lidl",
        rating: 5
      }
    ];

    const photos = [
      { src: 'https://static.cuistotducoin.com/img/gallery/working-day/atelier-entreprise.jpg', width: 1, height: 1, caption: "Atelier en entreprise", alt: "Atelier en entreprise" },
      { src: 'https://static.cuistotducoin.com/img/gallery/working-day/atelier-et-travail.jpg', width: 1, height: 1, caption: "Atelier suivi d'une location d'une salle de réunion", alt: "Atelier et travail" },
      { src: 'https://static.cuistotducoin.com/img/gallery/working-day/galerie.jpg', width: 1, height: 1, caption: "Atelier dans une gallerie", alt: "Atelier gallerie" },
      { src: 'https://static.cuistotducoin.com/img/gallery/working-day/presentation-entreprise.jpg', width: 1, height: 1, caption: "Présentation d'entreprise après un atelier", alt: "Présentation entreprise" },
    ];

    return (
      <Layout valueProposition="Concoctez avec nous une expérience culinaire authentique et gourmande pour vos salariés !"
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
          className={classes.grid}
        >
          <ThreeSteps steps={steps} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
        >
          Comment ça marche
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
        >
          <StaticSteper steps={stepsFAQ} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
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

export default withStyles(styles as any)(Buffet as any) as any;
