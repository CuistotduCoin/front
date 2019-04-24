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
        date: "vendredi 19 avril, 15h-16h45",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-chocolat-detente.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier enfant : Gâteau au chocolat & détente",
        nameCook: "Anne",
        price: 30,
        spot: "Comme les grands, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/fCR02c",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 20 avril, 9h30-13h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-paques.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Pièce en chocolat pour Pâques",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/pBE4rj",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 27 avril, 14h-17h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-macarons.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Macarons",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/BBlIht",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 27 avril, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-cupcake-etoile.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Parents / Enfants : Cupcake",
        nameCook: "Audrey",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/dhQMEX",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "vendredi 24 mai, 17h-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de galettes + Repas",
        nameCook: "Nadine",
        price: 30,
        spot: "Terre D'Embruns, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/m29858",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 25 mai, 10h-13h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/hayet-tadjine.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/hayet.jpg",
        name: "Tadjine",
        nameCook: "Hayet",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/qjgFFz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 25 mai, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-fete-des-meres.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier enfant inédit : Spécial fête des Mères",
        nameCook: "Audrey",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/BBBJqE",
        type: "Atelier collectif"
      },
    ];

    const privateWorkshops = [
      {
        availableSeat: 6,
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-cupcake-etoile.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "Parents / Enfants",
        price: 40,
        spot: "Brest et alentour",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/dhQMEX",
        type: "Atelier privatif"
      },
      {
        availableSeat: 6,
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "Initiation au tournage de galettes + Repas",
        price: 30,
        spot: "Brest et alentour",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/m29858",
        type: "Atelier privatif"
      },
      {
        availableSeat: 6,
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/hayet-tadjine.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "Tadjine",
        price: 35,
        spot: "Brest et alentour",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/qjgFFz",
        type: "Atelier privatif"
      },
      {
        availableSeat: 6,
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-fete-des-meres.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "Atelier enfant inédit : Spécial fête des Mères",
        price: 30,
        spot: "Brest et alentour",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/BBBJqE",
        type: "Atelier privatif"
      }
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
          </Tabs>
          {tab === 0 && <WorkshopCardList workshops={workshops} ads={ads} />}
          {tab === 1 && <WorkshopCardList workshops={privateWorkshops} ads={ads} />}
        </Grid>
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
