import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import get from "lodash.get";
import Link from "next/link";
import React from "react";
import { graphql } from "react-apollo";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { compose } from "recompose";
import Gallery from "../../components/Gallery";
import Layout from "../../components/Layout";
import MailchimpForm from "../../components/MailchimpForm";
import TestimonySlider from "../../components/TestimonySlider";
import { withData } from "../../decorators";
import { GetWorkshops } from "../../queries";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  image: {
    height: "100%",
    maxWidth: 320,
    width: "100%"
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 30,
    width: "calc(100% - 100px)",
  },
  typography: {
    marginTop: 15
  }
});

interface IHomeProps {
  classes?: any;
  history: any;
}

export class Home extends React.Component<IHomeProps, {}> {
  public render() {
    const urlMailChimp =
      "https://cuistotducoin.us12.list-manage.com/subscribe/post?u=892dbf9576b5acc9068d06a13&id=5e528d7fa8";
    const { classes } = this.props;

    const testimonies = [
      {
        context: "banquet",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        image:
          "https://static.cuistotducoin.com/img/business/participants/arkea.jpg",
        name: "Arkea",
        rating: 5
      },
      {
        context: "test",
        comment: "Lorem ipsum dolor sit amet",
        image:
          "https://static.cuistotducoin.com/img/business/participants/brest-metropole.jpg",
        name: "Brest metropole et ville",
        rating: 5
      },
      {
        context: "test 3",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:
          "https://static.cuistotducoin.com/img/business/participants/cadiou.jpg",
        name: "Cadiou",
        rating: 5
      },
      {
        context: "test 4",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:
          "https://static.cuistotducoin.com/img/business/participants/fortuneo.jpg",
        name: "Fortuneo",
        rating: 5
      },
      {
        context: "test 5",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image:
          "https://static.cuistotducoin.com/img/business/participants/gl-events.jpg",
        name: "Gl events",
        rating: 5
      },
      {
        context: "test 6 test 7",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
        image:
          "https://static.cuistotducoin.com/img/business/participants/hippocampe.jpg",
        name: "Agence Hippocampe",
        rating: 5
      }
    ];

    const photos = [
      { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 1, height: 1, caption: "Test", alt: "test" },
      { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 1, height: 1 },
      { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 1, height: 1 },
    ];

    return (
      <Layout
        valueProposition="Cuistot du Coin, le renouveau du traiteur événementiel"
        description="Buffet cocktail, ateliers de cuisine, journée de séminaire... Pour que tous vos événements vous ressemble !"
      >
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Un traiteur authentique et convivial
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          className={classes.typography}
        >
          Ras le bol des traiteurs traditionnels ? Avec nos cuistots, nous développons une nouvelle approche du métier de traiteur et imaginons des prestations qui vous ressemblent.
        </Typography>
        <Grid
          container
          justify="space-around"
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
                Un service sur mesure
              </Typography>
              <Typography variant="body1" align="justify">
                De l’organisation d’un atelier, du repas, à la journée au complet, nous concoctons avec vous une expérience culinaire unique et savoureuse.
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
                Les meilleurs cuistots
              </Typography>
              <Typography variant="body1" align="justify">
                Nous offrons une diversité d’univers culinaires authentiques aux côtés des meilleurs traiteurs indépendants, artisans et commerçants locaux.
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
                Des lieux adaptés
              </Typography>
              <Typography variant="body1" align="justify">
                Nous dénichons des lieux atypiques et chaleureux adaptés à vos événements. Itinérants, nous intervenons aussi dans vos entreprises ou à votre domicile.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={16}
        >
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <img
                className={classes.image}
                alt="Atelier Cuistot du Coin"
                src="https://static.cuistotducoin.com/img/business/organisez.jpg"
              />
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              align="center"
              component="h2"
              gutterBottom
            >
              Vous êtes une entreprise
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom={true}>
              Réunissez vos collaborateurs et partagez des moments conviviaux le temps d’un repas ou à l’occasion d’une journée de travail, rythmée par un atelier de cuisine inspirant et privilégiant la cohésion d’équipe. Nous organisons de A à Z vos événements.
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Link href="/business" passHref>
                <Button variant="contained" color="secondary">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={16}
        >
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              align="center"
              component="h2"
              gutterBottom
            >
              Vous êtes un particulier
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom={true}>
              Petits et grands, amateurs ou passionnés avertis, participez à un atelier de cuisine pour percer les secrets de recettes authentiques. Cuisine du monde, bien-être, terroir, boulangerie, pâtisserie : il y en a pour tous les goûts. Organisez avec vos proches un atelier à domicile. Réunissez-vous autour d’un buffet authentiques en toutes occasions.
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Link href="/individual" passHref>
                <Button variant="contained" color="secondary">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <img
                className={classes.image}
                alt="Atelier Cuistot du Coin"
                src="https://static.cuistotducoin.com/img/business/passez-a-table.jpg"
              />
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
          Ils nous font confiance :
        </Typography>
        <div className={classes.slider}>
          <TestimonySlider testimonies={testimonies} />
        </div>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Suivez notre aventure !
        </Typography>
        <Typography
          variant="body1"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Recevez notre actu et ne manquez pas nos prochains événements
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
          spacing={16}
        >
          <Grid item sm={6} xs={12}>
            <MailchimpSubscribe
              url={urlMailChimp}
              render={({ subscribe, status, message }) => (
                <MailchimpForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </Grid>
        </Grid>
        <Gallery photos={photos} />
      </Layout >
    );
  }
}

const enhance = compose(
  withData,
  graphql(GetWorkshops, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      workshops: get(props, 'data.getWorkshops.workshops') || []
    }),
  }),
  withStyles(styles as any),
);

export default enhance(Home);
