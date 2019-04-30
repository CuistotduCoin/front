import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Charity from "mdi-material-ui/Charity";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import Mood from "mdi-material-ui/EmoticonOutline";
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
    padding: theme.spacing(3)
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

interface IBuffetProps {
  classes?: any;
}

export class Buffet extends React.Component<IBuffetProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      { icon: <Mood fontSize="large" />, title: 'Vous allez plaire', content: `Cuisiner est une activité accessible à tous et qui permet de partager des moments conviviaux tout en découvrant des saveurs d’ici et d’ailleurs, des savoir-faire authentiques et des recettes chargées d’histoire.` },
      { icon: <EmoticonCool fontSize="large" />, title: 'Soyez serein', content: `Nous sélectionnons les ateliers les plus adaptés et nous nous chargeons de toute l’organisation. Les salariés participant aux ateliers n’ont plus qu’à se rendre aux fourneaux, à enfiler le tablier et à partager un moment convivial et savoureux !` },
      { icon: <Charity fontSize="large" />, title: `Un accompagnement au top`, content: `Un membre de l’équipe reste à votre écoute sur la période des inscriptions aux ateliers. Il répond à toutes vos questions et s’assure du bon déroulé des ateliers.` }
    ];

    const stepsFAQ = [
      {
        title: 'Prenons rendez-vous !',
        content: `Nous venons à votre rencontre pour échanger de vives voix sur le fonctionnement de votre CE, cerner vos attentes et vous présenter nos ateliers.`
      },
      {
        title: 'Choisissons des formats d’ateliers adaptés',
        content: `Initiation ou approfondissement, conviez vos salariés à découvrir nos différents univers culinaires lors d’ateliers conviviaux. Les gourmets partagent une dégustation ou un repas à l’issue des ateliers.`
      },
      {
        title: `Découvrez nos univers culinaires`,
        content: `Invitez vos salariés à voyager par le biais de la cuisine et à s’ouvrir à de nouveaux horizons en leur faisant découvrir nos différents univers autour de la cuisine du monde, du terroir, du bien-être, de la boulangerie et de la pâtisserie. Les petits gourmets sont aussi conviés lors d’ateliers ludiques et créatifs avec leurs parents.`
      },
      {
        title: 'Découvrez nos lieux partenaires',
        content: `Nous dénichons des lieux adaptés et chaleureux pour inviter vos salariés à partager des moments conviviaux aux fourneaux lors de ces ateliers privatisés.`
      },
      {
        title: `Construisons un programme d’ateliers sur mesure pour votre CE.`,
        content: `Nous échangeons sur la période à laquelle vous souhaitez proposer cette activité. Nous définissons les modalités de participation aux ateliers : budget, nombre d’ateliers envisagés, jours et horaires, lieux, nombre de participants minimum pour maintenir l’atelier et maximum par atelier pour privilégier une ambiance conviviale et la bonne implication de chacun. Selon vos souhaits et en fonction de la disponibilité de nos cuistots, nous vous faisons parvenir une proposition de devis adaptée avec un descriptif détaillé des ateliers et les informations pratiques à transmettre aux personnes inscrites.`
      },
      {
        title: 'Nous vous apportons un accompagnement personnalisé',
        content: `Une fois le programme des ateliers validé, vous n’avez plus qu’à le partager au sein de votre entreprise et à inviter les salariés à s’y inscrire. Nous suivons avec vous les inscriptions et vous proposons des points réguliers pour confirmer les dates proposées, envisager le report de certaines ou au contraire prévoir de nouvelles sessions.`
      },
      {
        title: `Gardons le contact à l’issue des ateliers`,
        content: `Un retour est fait après chaque atelier pour s’assurer de son bon déroulé et vous transmettre une sélection de photos prises en atelier. Nous revenons à votre rencontre à l’issue de la période des ateliers pour faire le bilan et éventuellement poursuivre le voyage des papilles en proposant aux salariés de nouveaux univers.`
      }
    ];

    const testimonies = [
      {
        context: "Atelier pour une équipe de 25 collaborateurs",
        comment: `On a proposé des ateliers de cuisine du monde à nos salariés. ils étaient très satisfaits et ont découvert de nouvelles saveurs. Le but est maintenant de prolonger l’opération en proposant de nouveaux ateliers. L’offre est très adaptée, variée. Les salariés se retrouvent en atelier dans une ambiance conviviale. En 3 mots : de la passion, du voyage et des rencontres.`,
        image:
          "https://static.cuistotducoin.com/img/testimony/arkea.jpg",
        name: "CE Arkea",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 70 collaborateurs",
        comment: `Que des retours positifs concernant le cuistot et la soirée. Très bonne prestation.
        L’Atelier a été apprécié par tout le monde, que ce soit l’activité où la bonne humeur du cuistot. Les plats dégustés lors du repas en fin d’atelier étaient très bons.`,
        image:
          "https://static.cuistotducoin.com/img/testimony/ixblue.jpg",
        name: "CE Ixblue",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurs",
        comment: "Les participants se sont amusés et se sont régalés lors de l’atelier de cuisine japonaise.",
        image:
          "https://static.cuistotducoin.com/img/testimony/apacib.jpg",
        name: "APACIB",
        rating: 5
      }
    ];

    const photos = [
      { src: 'https://static.cuistotducoin.com/img/gallery/work-council/atelier-cacao.jpg', width: 1, height: 1, caption: "Atelier cacao", alt: "Atelier cacao" },
      { src: 'https://static.cuistotducoin.com/img/gallery/work-council/atelier-patisserie.jpg', width: 1, height: 1, caption: "Atelier patisserie", alt: "Atelier patisserie" },
      { src: 'https://static.cuistotducoin.com/img/gallery/work-council/atelier-sushi-maki.jpg', width: 1, height: 1, caption: "Atelier sushi et maki", alt: "Atelier sushi et maki" },
      { src: 'https://static.cuistotducoin.com/img/gallery/work-council/degustation-apres-atelier.jpg', width: 1, height: 1, caption: "Dégustation après un atelier créole", alt: "Dégustation après un atelier créole" },
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
          Comment ça marche ?
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
