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
        date: "samedi 6 avril, 9h30-14h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/michel-decouverte-ayurvedique.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/michel.jpg",
        name: "Atelier + Dégustation : Cuisine ayurvédique",
        nameCook: "Michel",
        price: 40,
        spot: "Michel, Plougastel",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/hsumHc"
      },
      {
        availableSeat: 6,
        date: "samedi 6 avril, 10h-13h",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/vanessa-poulet-colombo.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/vanessa.jpg",
        name: "Repas Antillais",
        nameCook: "Vanessa",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/zrj25z"
      },
      {
        availableSeat: 6,
        date: "samedi 6 avril, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-cupcakes-paques.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier enfant : Cupcakes de Pâques",
        nameCook: "Audrey",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/EGTYOu"
      },
      {
        availableSeat: 6,
        date: "samedi 13 avril, 10h-13h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/anuja-initiation-cuisine-mauricienne.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anuja.jpg",
        name: "Initiation à la cuisine Mauricienne",
        nameCook: "Anuja",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/QyyRzR"
      },
      {
        availableSeat: 6,
        date: "samedi 19 avril, 15h-16h45",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier enfant : Gâteau au chocolat & détente",
        nameCook: "Anne",
        price: 30,
        spot: "Comme les grands, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/fCR02c"
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
        typeform: "https://cuistotducoin.typeform.com/to/pBE4rj"
      },
      {
        availableSeat: 6,
        date: "samedi 20 avril, 10h-13h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/paule-charlotte-initiation.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/paule-charlotte.jpg",
        name: "Atelier initiation à la cuisine Ivoirienne",
        nameCook: "Paule Charlotte",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/iGOu9g"
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
        typeform: "https://cuistotducoin.typeform.com/to/BBlIht"
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
        typeform: "https://cuistotducoin.typeform.com/to/dhQMEX"
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
        typeform: "https://cuistotducoin.typeform.com/to/qjgFFz"
      },
    ];

    const privateWorkshops = [];

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
