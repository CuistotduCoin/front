import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const styles = (theme: Theme) => ({
  card: {
    width: 300
  },
  cardHeader: {
    background: "rgba(0, 0, 0, 0.4)",
    color: "fff",
    height: 60,
    marginTop: -60
  },
  cardShortContent: {
    height: 80
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  media: {
    height: 135
  },
  title: {
    color: "white"
  },
  typography: {
    marginTop: 15
  }
});

export interface IIndividualProps {
  classes?: any;
}

export class Individual extends React.Component<IIndividualProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout
        valueProposition="Participez à des ateliers de cuisine authentiques et en toute convivialité !"
        description="Ateliers de Cuisine, Dégustations, Repas authentiques et conviviaux"
        showSearchForm={true}
      >
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
                Diversité
              </Typography>
              <Typography variant="body1" align="justify">
                Ateliers de cuisine, dégustation, buffets, repas. Nous organisons une expérience culinaire qui vous ressemble.
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
                Pour toutes les occassions
              </Typography>
              <Typography variant="body1" align="justify">
                Une fête d'anniversaire, une communion, une soirée thématique, une grande fête de famille, toutes les occasions sont bonnes pour célébrer et surtout en profiter !
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
                Vous serez les bienvenus chez nos partenaires sélectionnés avec soin. Itinérants, nous intervenons aussi à votre domicile.
              </Typography>
            </Grid>
          </Grid>
          <Banner title="Offre étudiante à Brest" subtitle="Sous présentation de ta carte étudiante, paye votre premier atelier de cuisine collectif à 5€ !" />
          <Banner title="Carte CEZAM" subtitle="Bénéficiez de -10% sur tous nos ateliers !" />
          <Banner title="Offrez une carte cadeau à votre proche" subtitle="Il disposera d’une année pour participer à l’atelier de son choix !" />
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
