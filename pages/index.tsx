import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from "@material-ui/core/Typography";
import get from "lodash.get";
import HowToReg from "mdi-material-ui/AccountCheck";
import AccountTie from "mdi-material-ui/AccountTie";
import HomeAccount from "mdi-material-ui/HomeAccount";
import MathCompass from 'mdi-material-ui/MathCompass'
import StoreMallDirectory from "mdi-material-ui/Store";
import React from "react";
import { graphql } from "react-apollo";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { compose } from "recompose";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import Link from "../components/Link";
import MailchimpForm from "../components/MailchimpForm";
import TestimonySlider from "../components/TestimonySlider";
import ThreeSteps from "../components/ThreeSteps";
import { withData } from "../decorators";
import { GetWorkshops } from "../queries";

const styles = (theme: Theme) => ({
  card: {
    maxWidth: 310,
    margin: theme.spacing(2)
  },
  cardBig: {
    maxWidth: 482,
    margin: theme.spacing(2)
  },
  media: {
    height: 140,
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
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
    marginTop: 35
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
      { icon: <MathCompass fontSize="large" />, title: 'Un service sur mesure', content: "De l’organisation d’un atelier, du repas, à la journée au complet, nous concoctons avec vous une expérience culinaire unique et savoureuse." },
      { icon: <HowToReg fontSize="large" />, title: 'Les meilleurs cuistots', content: "Nous offrons une diversité d’univers culinaires authentiques aux côtés des meilleurs traiteurs indépendants, artisans et commerçants locaux." },
      { icon: <StoreMallDirectory fontSize="large" />, title: 'Des lieux adaptés', content: "Nous dénichons des lieux atypiques et chaleureux adaptés à vos événements. Itinérants, nous intervenons aussi dans votre entreprise ou à votre domicile." }
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
      { src: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', width: 1, height: 1, caption: "Atelier cacao", alt: "Atelier cacao" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-3.jpg', width: 1, height: 1, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-1.jpg', width: 1, height: 1, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-japonais.jpg', width: 1, height: 1, caption: "Atelier japonais", alt: "Atelier japonais" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-monde.jpg', width: 1, height: 1, caption: "Atelier monde", alt: "Atelier monde" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-cocktail.jpg', width: 1, height: 1, caption: "Atelier cocktail", alt: "Atelier cocktail" },
      { src: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-2.jpg', width: 1, height: 1, caption: "Buffet-bresilien", alt: "Buffet bresilien" },
      { src: 'https://static.cuistotducoin.com/img/home/atelier-bresilien.jpg', width: 1, height: 1, caption: "Atelier bresilien", alt: "Atelier bresilien" },
    ];

    const productsB2B = [
      { title: 'Ateliers teambuilding', content: `Nos ateliers de cuisine sont idéals pour les équipes de 4 à 100 personnes. Tous vos collaborateurs seront réunis autour d’un ou plusieurs de nos Cuistots pour concocter avec eux des plats d’ici et d’ailleurs.`, image: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', link: '/teambuilding' },
      { title: 'Cocktails et réceptions', content: `A l’occasion de vos événements, faites confiance à nos Cuistots pour faire voyager les papilles de vos collaborateurs. A partir de 3€ par personne, laissez-vous tenter par l’originalité et surprenez vos invités.`, image: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-1.jpg', link: '/cocktail-business' },
      { title: 'Pauses gourmandes', content: `Accueillez vos collaborateurs sur une note sucrée avant de commencer vos séminaires. Ou alors détendez vous lors d’une pause goûter lors de vos journées d’équipe.`, image: 'https://static.cuistotducoin.com/img/home/breakfast.jpg', link: '/breakfast' },
      { title: 'Déjeuner', content: `Notre solution de plateau repas adapté à votre entreprise. Dites-nous l’univers culinaire que vous souhaitez et nous vous apporterons des petits-plats fait maison directement au bureau.`, image: 'https://static.cuistotducoin.com/img/home/lunch.jpg', link: '/lunch' },
      { title: 'Evenement sur mesure', content: `Concoctez avec nous votre événement 100% sur-mesure (inauguration, noël, bilan positif, etc.). On s’occupe de tout : de la location du lieu, à l’animation de votre événement en passant par le service traiteur.`, image: 'https://static.cuistotducoin.com/img/home/atelier-cocktail.jpg', link: '/events-business' }
    ]

    const productsB2C = [
      { title: 'Ateliers privatifs', content: ``, image: 'https://static.cuistotducoin.com/img/home/atelier-cacao.jpg', link: '/individual#private' },
      { title: 'Cocktails et réceptions', content: ``, image: 'https://static.cuistotducoin.com/img/home/buffet-bresilien-3.jpg', link: '/cocktail' },
      { title: 'Ateliers collectif', content: ``, image: 'https://static.cuistotducoin.com/img/home/atelier-japonais.jpg', link: '/individual#collective' },
      { title: 'Cuistot à domicile', content: ``, image: 'https://static.cuistotducoin.com/img/home/privatechef.jpg', link: '/individual#privatecook' },
      { title: 'Evenement sur mesure', content: ``, image: 'https://static.cuistotducoin.com/img/home/atelier-cocktail.jpg', link: '/events' }
    ]

    return (
      <Layout>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          className={classes.typography}
        >
          Que vous soyez une entreprise ou un particulier, nous révélons les saveurs et les talents pour vous garantir une expérience traiteur authentique et conviviale !
        </Typography>
        <Typography
          variant="body2"
          align="center"
          component="h3"
          gutterBottom
        >
          D'ailleurs, vous êtes une entreprise ou un particulier ?
        </Typography>
        <Tabs value={tab} onChange={this.handleChange} centered={true} indicatorColor="primary" textColor="primary"        >
          <Tab label="Entreprise" icon={<AccountTie />} />
          <Tab label="Particulier" icon={<HomeAccount />} />
        </Tabs>
        {this.state.tab === 0 &&
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.grid}
            spacing={2}
          >
            {this.createCard(productsB2B, classes)}
          </Grid>
        }
        {this.state.tab === 1 &&
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
        <Grid
          container
          justify="space-around"
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
          Ils nous font confiance
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
          spacing={2}
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

  private createCard = (products, classes) => {
    return (
      <>
        {
          products.map((product, key) => (
            <Link className={classes.link} key={key} href={product.link}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                  />
                  <CardContent>
                    <Typography align="center" variant="h5" component="h2" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography align="justify" variant="body2" color="textSecondary" component="p">
                      {product.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))
        }
      </>
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
