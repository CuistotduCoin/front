import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import teal from "@material-ui/core/colors/teal";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NoSsr from "@material-ui/core/NoSsr";
import Paper from "@material-ui/core/Paper";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AccountTie from "mdi-material-ui/AccountTie";
import HomeAccount from "mdi-material-ui/HomeAccount";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { compose } from "recompose";
import FlipCard from "../components/FlipCard";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import Link from "../components/Link";
import MailchimpForm from "../components/MailchimpForm";
import Steps from "../components/Steps";

//import get from "lodash.get";
//import { graphql } from "react-apollo";
//import { withData } from "../decorators";
//import { GetWorkshops } from "../queries";

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
  box: {
    lineHeight: 0,
    margin: theme.spacing(1)
  },
  backgroundImageBack: {
    backgroundColor: teal[800],
    height: "100%",
    width: "100%"
  },
  flipBoard3DEffect: {
    transform: "translateZ(90px) scale(.91)",
    margin: theme.spacing(1)
  },
  grid: {
    padding: theme.spacing(3)
  },
  gridFlipBox: {
    height: "100%"
  },
  negativeMargin: {
    marginTop: -100
  },
  tabsColor: {
    backgroundColor: "#fafafa"
  },
  title: {
    marginTop: theme.spacing(7)
  },
  typography: {
    marginTop: 15
  },
  withBackground: {
    backgroundImage:
      "url(https://static.cuistotducoin.com/img/home/nos-destinations.jpg)",
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
  padding: {
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

class NewHome extends React.Component<IIndexProps, IIndexState> {
  public static getInitialProps = async () => ({
    static: "not-static"
  });

  constructor(props: IIndexProps) {
    super(props);

    this.state = {
      tab: 0
    };
  }

  // @ts-ignore
  public handleChange = (event, tab: number) => {
    this.setState({ tab });
  };

  public render() {
    const { classes } = this.props;
    const { tab } = this.state;

    const values = [
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/ecoute.jpg" />
        ),
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
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/partage.jpg" />
        ),
        title: "PARTAGE",
        content:
          "Que vous réserviez un buffet ou un atelier, nous placerons toujours l'humain et les échanges avant tout !"
      }
    ];

    const destinations = [
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/moyen-orient.jpg" />
        ),
        title: "Moyen Orient"
      },
      {
        icon: <img src="https://static.cuistotducoin.com/img/home/asie.jpg" />,
        title: "Asie"
      },
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/amerique-du-nord.jpg" />
        ),
        title: "Amerique du Nord"
      },
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/afrique.jpg" />
        ),
        title: "Afrique"
      },
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/europe.jpg" />
        ),
        title: "Europe"
      },
      {
        icon: (
          <img src="https://static.cuistotducoin.com/img/home/amerique-du-sud.jpg" />
        ),
        title: "Amérique du Sud"
      }
    ];

    const testimonies = [
      {
        name: "Pierre Guilcher",
        content: `Un très bon moment partagé par le  groupe dans un nouveau lieu d'exception.`,
        image: "https://static.cuistotducoin.com/img/testimony/apm.jpg"
      },
      {
        name: "André Abiven",
        content: `Organisation sans défaut. Nous étions attendus et tout était fin prêt. Et l'atelier était mené par une cuisinière attentive et souriante. Très belle soirée pour l'ensemble des personnes.`,
        image: "https://static.cuistotducoin.com/img/testimony/arkea.jpg"
      },
      {
        name: "Isabelle Février",
        content: `Des produits de qualité, des saveurs exquises, une présentation respectueuse du développement durable, un personnel très sympathique et disponible.`,
        image:
          "https://static.cuistotducoin.com/img/testimony/musee-beaux-arts-brest.jpg"
      },
      {
        name: "Julie Courmarcel",
        content: `Prestation parfaite sur tous les points, depuis le début de nos échanges, jusqu'au jour J, et même après :). tant sur le point relationnel qu'organisationnel. Merci pour tout, vous avez grandement participé à la réussite de notre événement !"`,
        image: "https://static.cuistotducoin.com/img/testimony/ildys.jpg"
      },
      {
        name: "Christine Walid",
        content: `Créatifs, originaux, éthiques et durables.`,
        image:
          "https://static.cuistotducoin.com/img/testimony/brest-metropole.jpg"
      },
      {
        name: "Claire Etuebbe",
        content: `Une prestation de qualité ! Tout était parfait : Le lieu, l'accueil, le déjeuner, l'activité ... Merci !`,
        image:
          "https://static.cuistotducoin.com/img/testimony/brittany-ferries.jpg"
      },
      {
        name: "Florence Mirgon",
        content: `Original, gourmand, frais, healthy food.`,
        image: "https://static.cuistotducoin.com/img/testimony/triskalia.jpg"
      }
    ];

    const generalTestimonies = [
      {
        image: "https://static.cuistotducoin.com/img/testimony/lidl.jpg"
      },
      {
        image: "https://static.cuistotducoin.com/img/testimony/bourhis.jpg"
      },
      {
        image: "https://static.cuistotducoin.com/img/testimony/seimi.jpg"
      },
      {
        image: "https://static.cuistotducoin.com/img/testimony/apside.jpg"
      },
      {
        image: "https://static.cuistotducoin.com/img/testimony/ixblue.jpg"
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

    const productsB2B = [
      {
        title: "Accueil gourmand",
        content:
          "Accueil gourmand lors de vos séminaires ou goûter pour une pause réconfortante avec vos équipes, faites appel à Cuistot du Coin.",
        image: "https://static.cuistotducoin.com/img/home/breakfast.jpg",
        link: "/breakfast",
        linkAs: "/breakfast"
      },
      {
        title: "Cocktails et réceptions",
        content:
          "Cocktail apéritif, déjeunatoire ou dinatoire concocté par nos cuistots. Surprenez vos invités !",
        image: "https://static.cuistotducoin.com/img/home/cocktail.jpg",
        link: "/cocktail-business",
        linkAs: "/cocktail-business"
      },
      {
        title: "Repas à table",
        content:
          "Entrée plat et dessert pour vos équipes pour vos petits et grands événements.",
        image: "https://static.cuistotducoin.com/img/home/repas-a-table.jpg",
        link: "/lunch",
        linkAs: "/lunch"
      },
      {
        title: "Plateau repas",
        content: `Pas le temps de vous déplacer au resto ? Nous vous apportons votre repas pour un voyage des papilles à l'intérieur de vos bureaux !`,
        image: "https://static.cuistotducoin.com/img/home/plateau-repas.jpg",
        link: "/lunch",
        linkAs: "/lunch"
      },
      {
        title: "Buffet",
        content:
          "Surprenez vos convives avec nos buffets aux saveurs de la cuisine du monde.",
        image: "https://static.cuistotducoin.com/img/home/buffet.jpg",
        link: "/lunch",
        linkAs: "/lunch"
      },
      {
        title: "Ateliers teambuilding",
        content: `Atelier de cuisine de 4 à 100 personnes en compagnie d’un de nos Cuistots d’ici ou d’ailleurs. Idéal pour la cohésion d'équipe !`,
        image:
          "https://static.cuistotducoin.com/img/home/atelier-teambuilding.jpg",
        link: "/teambuilding",
        linkAs: "/teambuilding"
      }
    ];

    const productsB2C = [
      {
        title: "Ateliers collectif",
        content: `Evadez vous et faites le plein de découvertes culinaires aux côtés d’autres passionnés de cuisine`,
        image:
          "https://static.cuistotducoin.com/img/home/atelier-collectif.jpg",
        link: "/individual?tabName=collective",
        linkAs: "/individual/collective"
      },
      {
        title: "Ateliers privatifs",
        content: `Proposez une activité originale à vos amis et votre famille et réalisez un atelier de cuisine et partez à l’aventure avec l’un nos cuistots`,
        image: "https://static.cuistotducoin.com/img/home/atelier-privatif.jpg",
        link: "/individual?tabName=private",
        linkAs: "/individual/private"
      },
      {
        title: "Cuistot à domicile",
        content: `Mettez les pieds sous la table et laissez vous transporter vers de nouvelles destinations`,
        image:
          "https://static.cuistotducoin.com/img/home/cuistot-a-domicile.jpg",
        link: "/individual?tabName=privatecook",
        linkAs: "/individual/privatecook"
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
                Obtenir un devis
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
            Bienvenue à bord du vol Cuistot du Coin en partance pour un voyage
            des papilles !
          </Typography>
          <Grid container justify="space-around" className={classes.grid}>
            <Grid item>
              <img src="https://static.cuistotducoin.com/img/home/savourez.jpg" />
              <Typography
                variant="h3"
                align="center"
                component="h3"
                color="secondary"
              >
                SAVOUREZ
              </Typography>
            </Grid>
            <Grid item>
              <img src="https://static.cuistotducoin.com/img/home/explorez.jpg" />
              <Typography
                variant="h3"
                align="center"
                component="h3"
                color="secondary"
              >
                EXPLOREZ
              </Typography>
            </Grid>
            <Grid item>
              <img src="https://static.cuistotducoin.com/img/home/partagez.jpg" />
              <Typography
                variant="h3"
                align="center"
                component="h3"
                color="secondary"
              >
                PARTAGEZ
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" align="center" component="h3" gutterBottom>
            Lors de votre séjour vous aurez le choix de découvrir{" "}
            <b>11 destinations culinaires</b>.
          </Typography>
          <Typography variant="h5" align="center" component="h3" gutterBottom>
            Au programme de cette aventure nous mettrons à l'honneur :<br />
            <b>
              le voyage des papilles, la découverte de nouvelles saveurs et la
              convivialité lors de vos événements
            </b>
          </Typography>
          <Typography
            variant="h2"
            align="center"
            component="h2"
            gutterBottom
            className={classes.title}
          >
            AU MENU
          </Typography>
          <Grid container justify="space-around" className={classes.grid}>
            <Paper className={classes.tabsColor}>
              <Tabs
                value={tab}
                onChange={this.handleChange}
                indicatorColor="primary"
              >
                <Tab label="Entreprise" icon={<AccountTie />} />
                <Tab label="Particulier" icon={<HomeAccount />} />
              </Tabs>
            </Paper>
          </Grid>
          {this.state.tab === 0 && (
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className={classes.grid}
              spacing={2}
            >
              {this.createCard(productsB2B, classes)}
            </Grid>
          )}
          {this.state.tab === 1 && (
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className={classes.grid}
              spacing={2}
            >
              {this.createCard(productsB2C, classes)}
            </Grid>
          )}
        </Container>
        <Typography
          variant="h2"
          align="center"
          component="h2"
          gutterBottom
          className={classes.withBackground}
        >
          NOS DESTINATIONS
        </Typography>
        <Container maxWidth="lg">
          <div className={classes.negativeMargin}>
            <Grid
              container
              justify="space-around"
              spacing={2}
              className={classes.grid}
            >
              {destinations.map((destination, key) => (
                <Grid item xs={12} sm={4} key={key}>
                  <Paper>
                    <Grid
                      container
                      justify="space-around"
                      alignItems="center"
                      direction="column"
                    >
                      {destination.icon}
                      <Typography variant="h6" component="h3" gutterBottom>
                        {destination.title}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
          <Typography
            variant="h2"
            align="center"
            component="h2"
            gutterBottom
            className={classes.typography}
          >
            NOS VALEURS
          </Typography>
          <Grid
            container
            justify="space-around"
            spacing={2}
            className={classes.grid}
          >
            <Steps steps={values} columns={4} />
          </Grid>
          <Typography
            variant="h2"
            align="center"
            component="h2"
            gutterBottom
            className={classes.title}
          >
            ILS NOUS FONT CONFIANCE
          </Typography>
          <NoSsr>
            <Container maxWidth="md" className={classes.container}>
              {testimonies.map((testimonie, key) => (
                <>
                  <Grid container direction="column" className={classes.grid}>
                    <Grid
                      container
                      direction={key % 2 === 0 ? "row" : "row-reverse"}
                      alignItems="flex-end"
                    >
                      <Box boxShadow={1} className={classes.box}>
                        <img key={key} src={testimonie.image} />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        color="secondary"
                      >
                        {testimonie.name}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        variant="body1"
                        align={key % 2 === 0 ? "left" : "right"}
                      >
                        {testimonie.content}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Container>
            <Typography align="center">Et d'autres encore...</Typography>
          </NoSsr>
          <Grid
            container
            justify="space-around"
            spacing={2}
            className={classes.grid}
          >
            {generalTestimonies.map((testimonie, key) => (
              <Box boxShadow={1} key={key} className={classes.box}>
                <img src={testimonie.image} />
              </Box>
            ))}
          </Grid>
          <Typography
            variant="h2"
            align="center"
            component="h2"
            gutterBottom
            className={classes.title}
          >
            SUIVEZ NOTRE AVENTURE
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
        <Gallery photos={photos} />
      </Layout>
    );
  }

  private createCard = (products, classes) => {
    return (
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.grid}
        spacing={2}
      >
        {products.map((product, key) => (
          <Grid item sm={4} xs={12} key={key}>
            <Link href={product.link} as={product.linkAs}>
              <FlipCard
                front={
                  <div
                    className={classes.backgroundImageFront}
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <Grid
                      container
                      alignContent="center"
                      justify="center"
                      className={classes.gridFlipBox}
                    >
                      <Grid item className={classes.flipBoard3DEffect}>
                        <Typography
                          variant="h3"
                          align="center"
                          className={classes.typoFlipBoardTitle}
                        >
                          {product.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                }
                back={
                  <div className={classes.backgroundImageBack}>
                    <Grid
                      container
                      alignContent="center"
                      justify="center"
                      className={classes.gridFlipBox}
                    >
                      <Grid item className={classes.flipBoard3DEffect}>
                        <Typography
                          variant="h5"
                          align="center"
                          className={classes.typoFlipBoardTitle}
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          align="center"
                          className={classes.typoFlipBoardSubtitle}
                          gutterBottom
                        >
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
                }
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };
}

const enhance = compose(
  withStyles(styles as any)
);

export default enhance(NewHome);