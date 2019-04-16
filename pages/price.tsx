import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from "@material-ui/core/Typography";
import React from "react";
import Layout from "../components/Layout";

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
  gridContainer: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
});

interface IPriceProps {
  classes?: any;
}

interface IPriceState {
  tab: number;
}

export class Price extends React.Component<IPriceProps, IPriceState> {
  constructor(props: IPriceProps) {
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

        <Tabs value={tab} onChange={this.handleChange} centered={true}>
          <Tab label="Atelier collectif" />
          <Tab label="Atelier privatif" />
          <Tab label="Cocktail" />
          <Tab label="Box Repas" />
          <Tab label="Journée complete" />
        </Tabs>
        {tab === 0 && this.renderPricingCollectiveWorkshop(classes)}
        {tab === 1 && this.renderPricingPrivateWorkshop(classes)}
        {tab === 2 && this.renderPricingCocktail(classes)}
        {tab === 3 && this.renderPricingMeal(classes)}
        {tab === 4 && this.renderPricingWorkingDay(classes)}
      </Layout >
    );
  }

  public renderPricingCollectiveWorkshop(classes) {
    const pricingCollectiveWorkshop = [
      {
        title: "Atelier de cuisine de 2H",
        price: '35',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
      {
        title: "Atelier cuisine de 3H",
        price: '50',
        description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
        buttonText: 'Get started'
      },
      {
        title: 'Atelier parents - enfants',
        price: '40',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      },
      {
        title: 'Atelier technique',
        price: '50',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      }
    ];

    return (
      <>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Nous organisons des ateliers collectifs dans nos lieux partenaires :
        </Typography>
        {this.renderGrid(classes, pricingCollectiveWorkshop)}
      </>
    );
  }

  public renderPricingPrivateWorkshop(classes) {
    const pricingPrivateWorkshop = [
      {
        title: "Atelier cocktail d'1H",
        price: '30',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
      {
        title: "Atelier de cuisine de 2H",
        price: '50',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
      {
        title: "Atelier cuisine de 3H",
        price: '65',
        description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
        buttonText: 'Get started'
      },
      {
        title: 'Atelier parents - enfants',
        price: '50',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      },
      {
        title: 'Atelier technique',
        price: '65',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      }
    ];

    return (
      <>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Nous organisons des ateliers privatifs chez vous, dans votre entreprise ou dans nos lieux partenaires, sur demande :
        </Typography>
        {this.renderGrid(classes, pricingPrivateWorkshop)}
      </>
    );
  }

  public renderPricingCocktail(classes) {
    const pricingCocktail = [
      {
        title: "Cocktail apéritif",
        price: '15',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
      {
        title: "Cocktail déjeunatoire ou dinatoire",
        price: '18',
        description: ['Assortiment de tapas salées et sucrées', '10 GB of storage', 'Help center access', 'Priority email support'],
        buttonText: 'Get started'
      },
      {
        title: "Cocktail déjeunatoire ou dinatoire gourmand",
        price: '23',
        description: ['Assortiment de tapas salées et sucrées ou tapase salée', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      },
      {
        title: "Atelier suivi d'un repas à table",
        price: '65',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      }
    ];

    return (
      <>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Nous organisons vos cocktails apéritifs, déjeunatoires ou dinatoires :
        </Typography>
        {this.renderGrid(classes, pricingCocktail)}
      </>
    );
  }

  public renderPricingMeal(classes) {
    const pricingMeal = [
      {
        title: "Cuistot Box",
        price: '15',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
    ];

    return (
      <>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Nous vous envoyons vos repas individuels en entreprise :
        </Typography>
        {this.renderGrid(classes, pricingMeal)}
      </>
    );
  }

  public renderPricingWorkingDay(classes) {
    const pricingWorkingDay = [
      {
        title: "Café d'accueil ou goûter",
        price: '5',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free'
      },
      {
        title: "Repas",
        price: '15',
        description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
        buttonText: 'Get started'
      },
      {
        title: "Activité atelier de cuisine",
        price: '30',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      },
      {
        title: "Location",
        price: '65',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us'
      }
    ];

    return (
      <>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
          className={classes.typography}
        >
          Nous organisons vos journées d'entreprises :
        </Typography>
        {this.renderGrid(classes, pricingWorkingDay)}
      </>
    );
  }

  private renderGrid(classes, pricing) {
    return (
      <Grid className={classes.grid}>
        <Grid container justify="space-around" className={classes.gridContainer}>
          {pricing.map(pricing => (
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
                <CardActions className={classes.cardActions}>
                  <Button fullWidth color="primary">
                    {pricing.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles as any)(Price as any) as any;
