import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";
import WorkshopCardList from "../components/WorkshopCardList";

const styles = (theme: Theme) => ({});

export interface IIndividualProps {
  classes?: any;
}

export class Individual extends React.Component<IIndividualProps, {}> {
  public render() {
    const { classes } = this.props;

    const workshops = [
      {
        availableSeat: 6,
        date: "samedi 23 mars, 10h-12h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de galettes + Repas",
        nameCook: "Nadine",
        price: 30,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/ypvH53"
      },
      {
        availableSeat: 0,
        date: "vendredi 29 mars, 17h30-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/luis-pizza-tiramisu.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier approfondissement à la cuisine italienne",
        nameCook: "Luis",
        price: 50,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/O2QlLL"
      },
      {
        availableSeat: 0,
        date: "samedi 30 mars, 9h30-13h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-tarte-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Revisite de la tarte au chocolat",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/xkQuu1"
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
        availableSeat: 8,
        date: "samedi 6 avril, 10h-13h",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/karim-tiep.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/karim.jpg",
        name: "Cuisine Africaine - Tiep",
        nameCook: "Karim",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/Q3Mz5I"
      },
      {
        availableSeat: 6,
        date: "samedi 6 avril, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de crêpes",
        nameCook: "Nadine",
        price: 25,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/DRfUsS"
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
        date: "samedi 13 avril, 10h-12h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Initiation au tournage de galettes + Repas",
        nameCook: "Nadine",
        price: 30,
        spot: "Schmidt, Brest",
        totalSeat: 6,
        typeform: "https://cuistotducoin.typeform.com/to/cR7RRd"
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
        <WorkshopCardList workshops={workshops} ads={ads} />
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
