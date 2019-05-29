import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from "react";
import Layout from "../components/Layout";
import WorkshopCardList from "../components/WorkshopCardList";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1300
  },
  tabs: {

  }
});

export interface IIndividualProps {
  classes?: any;
}

interface IIndividualState {
  tab: number;
}

export class Individual extends React.Component<IIndividualProps, IIndividualState> {
  constructor(props: IIndividualProps) {
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

    const workshops = [
      {
        availableSeat: 6,
        date: "samedi 22 juin, 9h30-14h30",
        duration: 5,
        image:
          "https://static.cuistotducoin.com/img/workshops/michel-decouverte-ayurvedique.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/michel.jpg",
        name: "Atelier Cuisine Ayurvédique",
        nameCook: "Michel",
        price: 50,
        spot: "chez Michel, Plougastel Daoulas",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/bmhROM",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 29 juin, 14h30-16h30",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de crêpes",
        nameCook: "Nadine",
        price: 25,
        spot: "Terre D'Embruns, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/bQ53gx",
        type: "Atelier collectif"
      }
    ];

    const privateWorkshops = [
    ];

    const privateCook = [
    ];

    const ads = [
      {
        title: "Offrez une carte cadeau à votre proche",
        subtitle: "Il disposera d’une année pour participer à l’atelier de son choix !"
      },
      {
        title: "Offre étudiante à Brest",
        subtitle: "Sous présentation de ta carte étudiante, paye ton premier atelier de cuisine collectif à 5€ !"
      },
      {
        title: "Carte CEZAM",
        subtitle: "Bénéficiez de -10% sur tous nos ateliers !"
      }
    ];

    return (
      <Layout>
        <Grid className={classes.grid}>
          <Tabs value={tab} onChange={this.handleChange} centered={true}>
            <Tab label="Atelier collectif" />
            <Tab label="Atelier privatif" />
            <Tab label="Cuistot à domicile" />
          </Tabs>
          {tab === 0 && <WorkshopCardList workshops={workshops} ads={ads} />}
          {tab === 1 && <WorkshopCardList workshops={privateWorkshops} ads={ads} />}
          {tab === 2 && <WorkshopCardList workshops={privateCook} ads={ads} />}
        </Grid>
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
