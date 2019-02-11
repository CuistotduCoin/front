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
        context: "Atelier pour une équipe de 25 collaborateurs",
        comment: `On a proposé des ateliers de cuisine du monde à nos salariés. ils étaient très satisfaits et ont découvert de nouvelles saveurs. Le but est maintenant de prolonger l’opération en proposant de nouveaux ateliers. L’offre est très adaptée, variée. Les salariés se retrouvent en atelier dans une ambiance conviviale. En 3 mots : de la passion, du voyage et des rencontres.`,
        image:
          "https://static.cuistotducoin.com/img/business/participants/arkea.jpg",
        name: "CE Arkea",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 70 collaborateurs",
        comment: `Que des retours positifs concernant le cuistot et la soirée. Très bonne prestation.
        L’Atelier a été apprécié par tout le monde, que ce soit l’activité où la bonne humeur du cuistot. Les plats dégustés lors du repas en fin d’atelier étaient très bons.`,
        image:
          "https://static.cuistotducoin.com/img/business/participants/brest-metropole.jpg",
        name: "CE Ixblue",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurs",
        comment: "Les participants se sont amusés et se sont régalés lors de l’atelier de cuisine japonaise.",
        image:
          "https://static.cuistotducoin.com/img/business/participants/arkea.jpg",
        name: "APACIB",
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
                Vous allez plaire !
              </Typography>
              <Typography variant="body1" align="justify">
                Cuisiner est une activité accessible à tous et qui permet de partager des moments conviviaux tout en découvrant des saveurs d’ici et d’ailleurs, des savoir-faire authentiques et des recettes chargées d’histoire.
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
                Soyez serein !
              </Typography>
              <Typography variant="body1" align="justify">
                Nous sélectionnons les ateliers les plus adaptés et nous nous chargeons de toute l’organisation. Les salariés participant aux ateliers n’ont plus qu’à se rendre aux fourneaux, à enfiler le tablier et à partager un moment convivial et savoureux !
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
                Un accompagnement au top !
              </Typography>
              <Typography variant="body1" align="justify">
                Un membre de l’équipe reste à votre écoute sur la période des inscriptions aux ateliers. Il répond à toutes vos questions et s’assure du bon déroulé des ateliers.
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
          Comment ça marche ?
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
              <StepLabel>Prenons rendez-vous !</StepLabel>
              <StepContent>
                <Typography>Nous venons à votre rencontre pour échanger de vives voix sur le fonctionnement de votre CE, cerner vos attentes et vous présenter nos ateliers.</Typography>
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
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={16}
          className={classes.grid}
        >
          <Typography
            variant="h5"
            align="center"
            component="h2"
            gutterBottom
            className={classes.typography}
          >
            Nous construisons un programme d’ateliers sur mesure pour votre CE.
        </Typography>
          <Typography variant="body1" paragraph>
            Nous échangeons sur la période à laquelle vous souhaitez proposer cette activité.
            Nous définissons les modalités de participation aux ateliers : budget, nombre d’ateliers envisagés, jours et horaires, lieux, nombre de participants minimum pour maintenir l’atelier et maximum par atelier pour privilégier une ambiance conviviale et la bonne implication de chacun.
        </Typography>
          <Typography variant="body1" paragraph>
            Selon vos souhaits et en fonction de la disponibilité de nos cuistots, nous vous faisons parvenir une proposition de devis adaptée avec un descriptif détaillé des ateliers et les informations pratiques à transmettre aux personnes inscrites.
        </Typography>
          <Typography
            variant="h5"
            align="center"
            component="h2"
            gutterBottom
            className={classes.typography}
          >
            Nous vous apportons un accompagnement personnalisé.
        </Typography>
          <Typography variant="body1" paragraph>
            Une fois le programme des ateliers validé, vous n’avez plus qu’à le partager au sein de votre entreprise et à inviter les salariés à s’y inscrire.
            Nous suivons avec vous les inscriptions et vous proposons des points réguliers pour confirmer les dates proposées, envisager le report de certaines ou au contraire prévoir de nouvelles sessions.
        </Typography>
          <Typography variant="body1" paragraph>
            Un retour est fait après chaque atelier pour s’assurer de son bon déroulé et vous transmettre une sélection de photos prises en atelier. Nous revenons à votre rencontre à l’issue de la période des ateliers pour faire le bilan et éventuellement poursuivre le voyage des papilles en proposant aux salariés de nouveaux univers.
        </Typography>
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
