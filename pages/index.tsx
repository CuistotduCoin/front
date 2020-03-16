import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import cx from "classnames";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import MailchimpForm from "../components/MailchimpForm";
import Steps from "../components/Steps";
import FlipCardList from "../components/FlipCardList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    animLevitation: {
      animationDuration: "6s",
      animationName: "$animLevit",
      animationFillMode: "backwards",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite"
    },
    "@keyframes animLevit": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-12px)" },
      "100%": { transform: "translateY(0px)" }
    },
    animationDelay: {
      animationDelay: ".75s"
    },
    grid: {
      padding: theme.spacing(5)
    },
    marginLeft: {
      marginLeft: 75
    },
    marginLeftMax: {
      marginLeft: 125
    },
    marginRight: {
      marginRight: 75
    },
    marginRightMax: {
      marginRight: 125
    },
    typography: {
      marginTop: 15
    }
  })
);

export default function index() {
  const classes = useStyles();

  const values = [
    {
      icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
      title: "ECOUTE",
      content:
        "Notre équipe se tient toujours à votre disposition pour concocter avec vos l’événement qui vous ressemble."
    },
    {
      icon: (
        <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />
      ),
      title: "AUTHENTICITÉ",
      content:
        "Nous avons sélectionné des Cuistots du monde entier pour vous faire découvrir leurs cultures et leurs recettes familiales."
    },
    {
      icon: (
        <img src="https://static.cuistotducoin.com/img/home/ecologie.jpg" />
      ),
      title: "ECOLOGIE",
      content:
        "Afin de limiter notre impact écologique, nous ne travaillons qu’avec des matériaux recyclables et biodégradables."
    },
    {
      icon: <img src="https://static.cuistotducoin.com/img/home/partage.jpg" />,
      title: "PARTAGE",
      content: "Nous placerons toujours l'humain et les échanges avant tout !"
    }
  ];

  const products = [
    {
      title: "Traiteur",
      content: "-",
      image: "https://static.cuistotducoin.com/img/home/breakfast.jpg",
      link: "/cater"
    },
    {
      title: "Evenementiel",
      content: "-",
      image: "https://static.cuistotducoin.com/img/home/plateau-repas.jpg",
      link: "/event"
    },
    {
      title: "Atelier Teambuilding",
      content: "-",
      image: "https://static.cuistotducoin.com/img/home/repas-a-table.jpg",
      link: "/teambuilding"
    }
  ];

  const howItWorks = [
    {
      icon: <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />,
      title: "1. Vous indiquez vos besoins",
      content:
        "Un expert Cuistot du coin est à votre service pour recueillir votre besoin et identifie vos enjeux de cohésions, mais aussi vos préférences alimentaires de vos salariés et clients"
    },
    {
      icon: (
        <img src="https://static.cuistotducoin.com/img/home/authenticite.jpg" />
      ),
      title: "2. La cuisine s'active",
      content:
        "L'équipe de Cuistot du coin s'occupe de l'organisation, de la restauration et de la cohésion que ce soit pour une commande unique, un événement, un programme de restauration régulier ou encore un atelier de cuisine"
    },
    {
      icon: (
        <img src="https://static.cuistotducoin.com/img/home/ecologie.jpg" />
      ),
      title: "3. On s'occupe de tout",
      content:
        "On arrive sur le lieu de votre choix, à votre horaire et on s'occupe de tout ! Après chaque repas, nous recueillerons des commentaires qualitatifs et quantitatifs"
    }
  ];

  const urlMailChimp =
    "https://cuistotducoin.us12.list-manage.com/subscribe/post?u=892dbf9576b5acc9068d06a13&id=5e528d7fa8";

  const photos = [
    {
      src: "https://static.cuistotducoin.com/img/home/atelier-cacao.jpg",
      width: 800,
      height: 600,
      caption: "Atelier cacao",
      alt: "Atelier cacao"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/buffet-bresilien-3.jpg",
      width: 800,
      height: 600,
      caption: "Buffet-bresilien",
      alt: "Buffet bresilien"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/buffet-bresilien-1.jpg",
      width: 600,
      height: 600,
      caption: "Buffet-bresilien",
      alt: "Buffet bresilien"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/atelier-japonais.jpg",
      width: 600,
      height: 600,
      caption: "Atelier japonais",
      alt: "Atelier japonais"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/atelier-monde.jpg",
      width: 762,
      height: 600,
      caption: "Atelier monde",
      alt: "Atelier monde"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/atelier-cocktail.jpg",
      width: 800,
      height: 600,
      caption: "Atelier cocktail",
      alt: "Atelier cocktail"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/buffet-bresilien-2.jpg",
      width: 600,
      height: 600,
      caption: "Buffet-bresilien",
      alt: "Buffet bresilien"
    },
    {
      src: "https://static.cuistotducoin.com/img/home/atelier-bresilien.jpg",
      width: 800,
      height: 800,
      caption: "Atelier bresilien",
      alt: "Atelier bresilien"
    }
  ];

  return (
    <Layout
      position="absolute"
      color="secondary"
      component={
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html"
              target="_blank"
            >
              Essayez Cuistot du coin
            </Button>
          </Grid>
        </Grid>
      }
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Qu’est-ce que Cuistot du coin ?
        </Typography>
        <Typography variant="h5" align="center" component="h3" gutterBottom>
          Née de l'idée que les repas ne sont pas destinés à être dévoré seuls à
          votre bureau, Cuistot du coin vise à rendre votre service plus heureux
          grâce à des expériences partagées. Passez enfin plus de temps aves vos
          équipes !
        </Typography>
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Nos prestations
        </Typography>
        <Typography variant="h5" align="center" component="h3" gutterBottom>
          ----
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
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Comment ça marche
        </Typography>
        <Grid
          container
          justify="space-around"
          spacing={2}
          className={classes.grid}
        >
          <Steps steps={howItWorks} columns={3} />
        </Grid>
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Réunissez votre équipe pour améliorer la collaboration dans votre
          entreprise
        </Typography>
        <Typography variant="h5" align="center" component="h3" gutterBottom>
          Que ce soit pour un événement ponctuel ou des prestations récurrentes,
          nos Cuistot du coin sont la pour vous.
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
            Obtenir un devis
          </Button>
        </Grid>
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Du traiteur mais aussi des valeurs
        </Typography>
        <Grid
          container
          justify="space-around"
          spacing={2}
          className={classes.grid}
        >
          <Steps steps={values} columns={4} />
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={2}
        >
          <Button
            variant="contained"
            color="primary"
            href="/charter"
            target="_blank"
          >
            En savoir plus sur notre charte traiteur
          </Button>
        </Grid>

        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          Suivez notre aventure
        </Typography>
        <Typography variant="h5" align="center" component="h3" gutterBottom>
          Recevez notre actu et ne manquez pas nos prochains événements
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
        >
          <MailchimpSubscribe
            url={urlMailChimp}
            // tslint:disable-next-line: jsx-no-lambda
            render={({ subscribe, status, message }) => (
              <MailchimpForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={4}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            direction="column"
            className={classes.grid}
            spacing={2}
          >
            <Paper
              elevation={3}
              className={cx(classes.animLevitation, classes.marginRight)}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/arkea.jpg"
                alt="Logo d'Arkea"
                height={80}
                width={80}
              />
            </Paper>
            <Paper
              elevation={3}
              className={cx(
                classes.animLevitation,
                classes.marginLeftMax,
                classes.animationDelay
              )}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/ildys.jpg"
                alt="Logo d'Ildys"
                height={80}
                width={80}
              />
            </Paper>
            <Paper
              elevation={3}
              className={cx(classes.animLevitation, classes.marginRightMax)}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/triskalia.jpg"
                alt="Logo de Triskalia"
                height={80}
                width={80}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.grid}
            spacing={2}
          >
            <Typography
              variant="h3"
              align="center"
              component="h2"
              className={classes.typography}
              gutterBottom
            >
              Ces entreprises bretoises nous font déjà confiance !
            </Typography>
            <Typography variant="h5" align="center" component="h3" gutterBottom>
              Et ce n'est que le début. Rejoignez-nous !
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            direction="column"
            className={classes.grid}
            spacing={2}
          >
            <Paper
              elevation={3}
              className={cx(
                classes.animLevitation,
                classes.marginLeftMax,
                classes.animationDelay
              )}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/brest-metropole.jpg"
                alt="Logo de l'APM"
                height={80}
                width={80}
              />
            </Paper>
            <Paper
              elevation={3}
              className={cx(classes.animLevitation, classes.marginRightMax)}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/brittany-ferries.jpg"
                alt="Logo de l'APM"
                height={80}
                width={80}
              />
            </Paper>
            <Paper
              elevation={3}
              className={cx(
                classes.animLevitation,
                classes.marginLeft,
                classes.animationDelay
              )}
            >
              <img
                src="https://static.cuistotducoin.com/img/testimony/musee-beaux-arts-brest.jpg"
                alt="Logo de l'APM"
                height={80}
                width={80}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Grid container justify="space-around">
          <Button variant="contained" color="primary" href="/testimony">
            Voir plus de témoignages
          </Button>
        </Grid>
        <Typography
          variant="h3"
          align="center"
          component="h2"
          className={classes.typography}
          gutterBottom
        >
          FAQ
        </Typography>
        <Grid container justify="space-around">
          <Button variant="contained" color="primary" href="/faq">
            Voir plus de questions
          </Button>
        </Grid>
      </Container>
      <Gallery photos={photos} />
    </Layout>
  );
}
