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
        date: "Samedi 23 Novembre, 14h-18h",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/fabien-viennoiseries.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Viennoiseries",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/cesGux",
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
      },
      {
        availableSeat: 8,
        date: "Samedi 7 Décembre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-buche-mogador.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Noël - Bûche Mogador Chocolat Passion",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/PPyTQl",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 7 Décembre, 10h00-12h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-biscuit-noel.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Enfants - Biscuits de Noël",
        nameCook: "Audrey",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/qQ0f4n",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 7 Décembre, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-chocolat-detente.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Enfants - Gâteau du potager",
        nameCook: "Anne",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/b1Uz62",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 7 Décembre, 16h00-18h30",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/takako-sushis.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/takako.jpg",
        name: "Atelier Sushis & Cie",
        nameCook: "Takako",
        price: 50,
        spot: "Schimdt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/Y9hIN9",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 14 Décembre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-buche-royal-choco.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Noël - Bûche Royal Chocolat et Caramel",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/w972JA",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 14 Décembre, 10h00-12h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-bien-etre.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Apéro Coloré",
        nameCook: "Anne",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/PLH71Y",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 14 Décembre, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-mousse-au-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Parents/Enfants - Mousse au Chocolat",
        nameCook: "Anne",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/hmbnCr",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 14 Décembre, 14h00-18h00",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/fabien-noel.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Pain d'Epices et Spritz",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/EFbY9d",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Mercredi 18 Décembre, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-maison-pain-epices.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Enfants - Maison en Pain d'Epices",
        nameCook: "Audrey",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/yHLa5G",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 21 Décembre, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-buche-vanille.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Noël - Bûche Vanille Framboise",
        nameCook: "Ronan",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/xJRkPz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 21 Décembre, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-maison-pain-epices.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Enfants - Maison en Pain d'Epices",
        nameCook: "Audrey",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/oVj49e",
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
