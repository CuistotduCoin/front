import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import Layout from "../components/Layout";
import WorkshopCardList from "../components/WorkshopCardList";

const styles = () => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1300
  }
});

interface IIndividualProps {
  classes?: any;
  tab: number;
}

interface IIndividualState {
  tab: number;
}

class Individual extends React.Component<IIndividualProps, IIndividualState> {
  public static getInitialProps({ query: { tabName } }) {
    let tab = 0;
    switch (tabName) {
      case "collective":
        tab = 0;
        break;
      case "private":
        tab = 1;
        break;
      case "privatecook":
        tab = 2;
        break;
    }
    return { tab: tab };
  }

  // Use something like that :
  // https://fr.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
  constructor(props: IIndividualProps) {
    super(props);
    this.state = props;
  }

  // @ts-ignore
  public handleChange = (event, tab: number) => {
    this.setState({ tab });
    // @ts-ignore
    let nameTab = "/individual";
    switch (tab) {
      case 0:
        nameTab = "/individual/collective";
        break;
      case 1:
        nameTab = "/individual/private";
        break;
      case 2:
        nameTab = "/individual/privatecook";
        break;
    }
  };

  public render() {
    const { classes } = this.props;
    const { tab } = this.state;

    // @ts-ignore
    const workshops = [
      {
        availableSeat: 8,
        date: "Vendredi 18 Octobre, 17h-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier et repas galettes",
        nameCook: "Nadine",
        price: 35,
        spot: "Terre d'Embruns, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/KTvBNX",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 19 Octobre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-royal-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Atelier Pâtisserie : Royal Chocolat",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/q9e8vL",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 19 Octobre, 10h-13h",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/karim-tiep.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/karim.jpg",
        name: "Atelier Tiep",
        nameCook: "Karim",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/Z0lqdB",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 25 Octobre, 17h30-20h30",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/luis-agnolotti.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier Italien : Agnolotti &Cie",
        nameCook: "Luis",
        price: 50,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/TzKnPz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 26 Octobre, 10h-12h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-burger-revisite.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Enfant : Burger Revisité",
        nameCook: "Anne",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/WoBoNv",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 26 Octobre, 14h30-16h30",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier et goûter crêpes",
        nameCook: "Nadine",
        price: 30,
        spot: "Terre d'Embruns, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/Nr0odU",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Mercredi 30 Octobre, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-halloween.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier Enfant - Spécial Halloween",
        nameCook: "Audrey",
        price: 30,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/M7rqKl",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Jeudi 31 Octobre, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-halloween.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Parents/Enfants - Spécial Halloween",
        nameCook: "Anne",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/Kmt9KS",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 9 Novembre, 10h-12h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-apero-healthy.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Apéro Healthy",
        nameCook: "Anne",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/GTXVdE",
        type: "Atelier collectif"
      },
      {
        availableSeat: 100,
        date: "Jeudi 14 Novembre, 19h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/cuistot-du-coin-challenge.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/cuistot-du-coin.jpg",
        name: "Etudiant Brestois - Challenge Culinaire",
        nameCook: "Cuistot du Coin",
        price: 0,
        spot: "RU de Kergoat, Brest",
        totalSeat: 100,
        typeform: "https://cuistotducoin.typeform.com/to/GcKZD1",
        type: "Evénement Etudiant"
      },
      {
        availableSeat: 8,
        date: "Samedi 16 Novembre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-macarons.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Atelier Pâtisserie : Macarons",
        nameCook: "Ronan",
        price: "Complet",
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/tyNGwM",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 16 Novembre, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-briochettes.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier Enfant : Briochettes",
        nameCook: "Audrey",
        price: 30,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/JHW9Td",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 22 Novembre, 17h30-20h30",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/luis-pizza-tiramisu.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier Italien : Pizza &Cie",
        nameCook: "Luis",
        price: 50,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/JZXof1",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 23 Novembre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-bonbon-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Atelier Pâtisserie : Bonbons Chocolat",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/D9T8mc",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 23 Novembre, 14h30-16h30",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier et goûter crêpes",
        nameCook: "Nadine",
        price: 30,
        spot: "Terre d'Embruns, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/kUjdUz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 30 Novembre, 10h-12h",
        duration: 2,
        image: "https://static.cuistotducoin.com/img/workshops/farah-mezze.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/farah.jpg",
        name: "Atelier Libanais : Mezzé",
        nameCook: "Farah",
        price: "Complet",
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/d2b9TN",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 30 Novembre, 9h30-13h30",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/ronan-cake.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Atelier Pâtisserie : Cakes",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/JwqP1i",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 6 Décembre, 17h-20h",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier et repas galettes",
        nameCook: "Nadine",
        price: 35,
        spot: "Terre d'Embruns, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/si0jAA",
        type: "Atelier collectif"
      }
    ];

    const privateWorkshops = [
      {
        availableSeat: 6,
        image:
          "https://static.cuistotducoin.com/img/workshops/atelier-privatif.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "L'atelier sur-mesure",
        nameCook: "notre cuistot !",
        spot: "autour de Brest",
        totalSeat: 6,
        typeform: "https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html",
        type: "Atelier privatif"
      }
    ];

    const privateCook = [
      {
        availableSeat: 6,
        image:
          "https://static.cuistotducoin.com/img/workshops/cuistot-a-domicile.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/generique.jpg",
        name: "Prestation sur-mesure",
        nameCook: "notre cuistot !",
        spot: "autour de Brest",
        totalSeat: 6,
        typeform: "https://landbot.io/u/H-214796-F8FY3NT3A55SSFET/index.html",
        type: "Cuistot à domicile"
      }
    ];

    const ads = [
      {
        title: "Offrez une carte cadeau à votre proche",
        subtitle:
          "Il disposera d’une année pour participer à l’atelier de son choix !"
      },
      {
        title: "Offre étudiante à Brest",
        subtitle:
          "Sous présentation de ta carte étudiante, paye ton premier atelier de cuisine collectif à 5€ !"
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
          {tab === 1 && (
            <WorkshopCardList workshops={privateWorkshops} ads={ads} />
          )}
          {tab === 2 && <WorkshopCardList workshops={privateCook} ads={ads} />}
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Individual as any) as any;
