import Button from '@material-ui/core/Button';
import teal from "@material-ui/core/colors/teal";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from "@material-ui/core/Typography";
import get from "lodash.get";
import AccountTie from "mdi-material-ui/AccountTie";
import HomeAccount from "mdi-material-ui/HomeAccount";
import React from "react";
import { graphql } from "react-apollo";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { compose } from "recompose";
import FlipCard from '../components/FlipCard';
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import Link from "../components/Link";
import MailchimpForm from "../components/MailchimpForm";
import Steps from "../components/Steps";
import { withData } from "../decorators";
import { GetWorkshops } from "../queries";

const styles = (theme: Theme) => ({
  backgroundImageFront: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    zIndex: -1
  },
  backgroundImageBack: {
    backgroundColor: teal[800],
    height: "100%",
    width: "100%"
  },
  card: {
    maxWidth: 310,
    margin: theme.spacing(2)
  },
  cardBig: {
    maxWidth: 482,
    margin: theme.spacing(2)
  },
  flipBoard3DEffect: {
    transform: "translateZ(90px) scale(.91)",
    margin: theme.spacing(1)
  },
  media: {
    height: 140,
  },
  grid: {
    padding: theme.spacing(3)
  },
  gridFlipBox: {
    height: "100%"
  },
  image: {
    height: "100%",
    maxWidth: 320,
    width: "100%"
  },
  negativeMargin: {
    marginTop: -100
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 30,
    width: "calc(100% - 100px)"
  },
  typography: {
    marginTop: 15
  },
  withBackground: {
    backgroundImage: 'url(https://picsum.photos/1600/200)',
    color: "white",
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(14)
  },
  typoFlipBoardTitle: {
    color: "white",
    textShadow: "1px 1px #585A5A",
    textTransform: "uppercase"
  },
  typoFlipBoardSubtitle: {
    color: "white"
  },
  link: {
    padding: theme.spacing(1)
  }
});

interface IIndexProps {
  classes?: any;
  history: any;
}

interface IIndexState {
  tab: number;
}


export class Index extends React.Component<IIndexProps, IIndexState> {
  constructor(props: IIndexProps) {
    super(props);

    this.state = {
      tab: 0
    };

  }

  public handleChange = (event, tab: number) => {
    this.setState({ tab });
  };

  public render() {
    const { classes } = this.props;
    const { tab } = this.state;

    const steps = [
      { icon: <img src="https://picsum.photos/200" />, title: 'ECOUTE', content: "Notre équipe se tient toujours à votre disposition pour concocter avec vos l’événement qui vous ressemble." },
      { icon: <img src="https://picsum.photos/200" />, title: 'AUTHENTICITÉ', content: "Nous avons sélectionné des Cuistots du monde entier pour vous faire découvrir leurs cultures et leurs recettes familiales." },
      { icon: <img src="https://picsum.photos/200" />, title: 'ECOLOGIE', content: "Afin de limiter notre impact écologique, nous ne travaillons qu’avec des matériaux recyclables et biodégradables." },
      { icon: <img src="https://picsum.photos/200" />, title: 'PARTAGE', content: "Que vous réserviez un buffet ou un atelier, nous placerons toujours l'humain et les échanges avant tout !" }
    ];

    const destinations = [
      { icon: <img src="https://picsum.photos/200" />, title: 'Moyen Orient' },
      { icon: <img src="https://picsum.photos/200" />, title: 'Asie' },
      { icon: <img src="https://picsum.photos/200" />, title: 'Amerique du Nord' },
      { icon: <img src="https://picsum.photos/200" />, title: 'Afrique' },
      { icon: <img src="https://picsum.photos/200" />, title: 'Europe' },
      { icon: <img src="https://picsum.photos/200" />, title: 'Amérique du Sud' }
    ];

    const testimonies = [
      {
        context: "Buffet aux couleurs de la cuisine brésilienne pour 15 collaborateurs",
        comment: "L'équipe a apprécié toutes les prestations de Cuistot du coin. Le buffet : original et très bon et l'atelier : ambiance détendue où chacun a trouvé sa place. Le lieu où on se sent vite très bien. Merci pour cette respiration",
        image:
          "https://static.cuistotducoin.com/img/testimony/arkea.jpg",
        name: "Arkea",
        rating: 5
      },
      {
        context: "Atelier, repas, location et réunion pour une équipe de 15 collaborateurs",
        comment: "Lieu magnifique, prestation au top. Tout était parfait : l'atelier, l'animation, l'organisation ainsi que le lieu.",
        image:
          "https://static.cuistotducoin.com/img/testimony/lidl.jpg",
        name: "Lidl",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 25 collaborateurs",
        comment: "Grand merci pour votre prestation. Les retours sont top et correspondent vraiment aux attentes de mon associé et moi même, bravo.",
        image:
          "https://static.cuistotducoin.com/img/testimony/bourhis.jpg",
        name: "Cabinet Bourhis",
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
        context: "Atelier pour une équipe de 70 collaborateurs",
        comment: "Génial ! Merci pour cette prestation.",
        image:
          "https://static.cuistotducoin.com/img/testimony/apside.jpg",
        name: "Apside",
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
    ];

    const urlMailChimp =
      "https://cuistotducoin.us12.list-manage.com/subscribe/post?u=892dbf9576b5acc9068d06a13&id=5e528d7fa8";

    const photos = [
      { src: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', width: 800, height: 600, caption: "Atelier cacao", alt: "Atelier cacao" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-3.jpg', width: 800, height: 600, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-1.jpg', width: 600, height: 600, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-japonais.jpg', width: 600, height: 600, caption: "Atelier japonais", alt: "Atelier japonais" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-monde.jpg', width: 762, height: 600, caption: "Atelier monde", alt: "Atelier monde" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-cocktail.jpg', width: 800, height: 600, caption: "Atelier cocktail", alt: "Atelier cocktail" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-2.jpg', width: 600, height: 600, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-bresilien.jpg', width: 800, height: 800, caption: "Atelier bresilien", alt: "Atelier bresilien" },
    ];

    const productsB2B = [
      { title: 'Accueil gourmand', content: 'Accueil gourmand lors de vos séminaires ou goûter pour une pause réconfortante avec vos équipes, faites appel à Cuistot du Coin.', image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg', link: '/breakfast', linkAs: '/breakfast' },
      { title: 'Cocktails et réceptions', content: 'Cocktail apéritif, déjeunatoire ou dinatoire concocté par nos cuistots. Surprenez vos invités !', image: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-1.jpg', link: '/cocktail-business', linkAs: '/cocktail-business' },
      { title: 'Repas à table', content: 'Entrée plat et dessert pour vos équipes pour vos petits et grands événements.', image: 'https://static.cuistotducoin.com/img/home/lunch.jpg', link: '/lunch', linkAs: '/lunch' },
      { title: 'Plateau repas', content: `Pas le temps de vous déplacer au resto ? Nous vous apportons votre repas pour un voyage des papilles à l'intérieur de vos bureaux !`, image: 'https://static.cuistotducoin.com/img/home/lunch.jpg', link: '/lunch', linkAs: '/lunch' },
      { title: 'Buffet', content: 'Surprenez vos convives avec nos buffets aux saveurs de la cuisine du monde.', image: 'https://static.cuistotducoin.com/img/home/lunch.jpg', link: '/lunch', linkAs: '/lunch' },
      { title: 'Ateliers teambuilding', content: `Atelier de cuisine de 4 à 100 personnes en compagnie d’un de nos Cuistots d’ici ou d’ailleurs. Idéal pour la cohésion d'équipe !`, image: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', link: '/teambuilding', linkAs: '/teambuilding' },
    ];

    const productsB2C = [
      { title: 'Ateliers collectif', content: `Proposez une activité originale à vos amis et votre famille et réalisez un atelier de cuisine et partez à l’aventure avec l’un nos cuistots`, image: 'https://static.cuistotducoin.com/img/home/atelier-japonais.jpg', link: '/individual?tabName=collective', linkAs: '/individual/collective' },
      { title: 'Ateliers privatifs', content: `Evadez vous et faites le plein de découvertes culinaires aux côtés d’autres passionnés de cuisine`, image: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', link: '/individual?tabName=private', linkAs: '/individual/private' },
      { title: 'Cuistot à domicile', content: `Mettez les pieds sous la table et laissez vous transporter vers de nouvelles destinations`, image: 'https://static.cuistotducoin.com/img/home/privatechef.jpg', link: '/individual?tabName=privatecook', linkAs: '/individual/privatecook' },
    ];

    return (
      <Layout position="absolute" color="secondary" component={
        <Grid container justify="space-around" className={classes.grid}>
          <Grid item>
            <Button variant="contained" color="secondary" href="https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html" target="_blank">
              Obtenir un devis
            </Button>
          </Grid>
        </Grid>
      }>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" component="h2" className={classes.typography} gutterBottom>
            Bienvenue à bord du vol CDC en partance pour un voyage des papilles !
        </Typography>
          <Grid container justify="space-around" className={classes.grid}>
            <Grid item>
              <img src="https://picsum.photos/300" />
              <Typography variant="h3" align="center" component="h3" color="secondary">
                SAVOUREZ
            </Typography>
            </Grid>
            <Grid item>
              <img src="https://picsum.photos/300" />
              <Typography variant="h3" align="center" component="h3" color="secondary">
                EXPLOREZ
            </Typography>
            </Grid>
            <Grid item>
              <img src="https://picsum.photos/300" />
              <Typography variant="h3" align="center" component="h3" color="secondary">
                PARTAGEZ
            </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" align="center" component="h3" gutterBottom>
            Lors de votre séjour vous aurez le choix de découvrir <b>11 destinations culinaires</b>.
        </Typography>
          <Typography variant="h5" align="center" component="h3" gutterBottom>
            Au programme de cette aventure nous mettrons à l'honneur :<br /><b>le voyage des papilles, la découverte de nouvelles saveurs et la convivialité lors de vos événements</b>
          </Typography>
          <Typography variant="h2" align="center" component="h2" gutterBottom className={classes.typography} style={{ "margin-top": "20px" }}>
            AU MENU
        </Typography>
          <Tabs value={tab} onChange={this.handleChange} centered={true} indicatorColor="primary" textColor="primary">
            <Tab label="Entreprise" icon={<AccountTie />} />
            <Tab label="Particulier" icon={<HomeAccount />} />
          </Tabs>
          {
            this.state.tab === 0 &&
            <Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
              {this.createCard(productsB2B, classes)}
            </Grid>
          }
          {
            this.state.tab === 1 &&
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className={classes.grid}
              spacing={2}
            >
              {this.createCard(productsB2C, classes)}
            </Grid>
          }
          <Typography variant="h5" align="center" component="h2" gutterBottom className={classes.withBackground}>
            Nos destinations
        </Typography>
          <div className={classes.negativeMargin}>
            <Grid container justify="space-around" spacing={2} className={classes.grid}>
              {
                destinations.map((destination, key) => (
                  <Grid item xs={12} sm={4} key={key}>
                    <Paper>
                      <Grid container justify="space-around" alignItems="center" direction="column">
                        {destination.icon}
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                        >
                          {destination.title}
                        </Typography>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </div>
          <Typography variant="h5" align="center" component="h2" gutterBottom className={classes.typography}>
            Nos valeurs
        </Typography>
          <Grid container justify="space-around" spacing={2} className={classes.grid}>
            <Steps steps={steps} columns={4} />
          </Grid>
          <Typography variant="h5" align="center" component="h2" gutterBottom className={classes.typography}>
            Ils nous font confiance
        </Typography>
          <Grid container justify="space-around" spacing={2} className={classes.grid}>
            tte
          </Grid>
          <Typography variant="h5" align="center" component="h2" gutterBottom className={classes.typography}>
            Suivez notre aventure !
        </Typography>
          <Typography variant="body1" align="center" component="h2" gutterBottom className={classes.typography}>
            Recevez notre actu et ne manquez pas nos prochains événements
        </Typography>
          <Grid container justify="space-around" alignItems="center" className={classes.grid} spacing={2}>
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
        </Container>
        <Gallery photos={photos} />
      </Layout >
    );
  }

  private createCard = (products, classes) => {
    return (
      <Grid container justify="space-around" alignItems="center" className={classes.grid}>
        {
          products.map((product, key) => (
            <Link className={classes.link} key={key} href={product.link} as={product.linkAs}>
              <FlipCard
                front={
                  <div className={classes.backgroundImageFront} style={{ backgroundImage: `url(${product.image})` }}>
                    <Grid container alignContent="center" justify="center" className={classes.gridFlipBox}>
                      <Grid item className={classes.flipBoard3DEffect}>
                        <Typography variant="h5" align="center" className={classes.typoFlipBoardTitle}>
                          {product.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                }
                back={
                  <div className={classes.backgroundImageBack}>
                    <Grid container alignContent="center" justify="center" className={classes.gridFlipBox}>
                      <Grid item className={classes.flipBoard3DEffect}>
                        <Typography variant="h5" align="center" className={classes.typoFlipBoardTitle}>
                          {product.title}
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.typoFlipBoardSubtitle} gutterBottom>
                          {product.content}
                        </Typography>
                        <Grid container justify="space-around">
                          <Button variant="contained" color="secondary">
                            Obtenir plus d'infos
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                } />
            </Link>
          ))
        }
      </Grid>
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

export default enhance(Index);
