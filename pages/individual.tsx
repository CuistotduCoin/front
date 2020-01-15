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
        date: "Samedi 18 Janvier, 10h00-12h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-galette-des-rois.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Adultes - Galette des Rois",
        nameCook: "Audrey",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/ldY9Fp",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 18 Janvier, 16h00-18h30",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/takako-sushis.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/takako.jpg",
        name: "Atelier Japonais - Sushis & Cie",
        nameCook: "Takako",
        price: "COMPLET",
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/jMWdgG",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 25 Janvier, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-bonbon-chocolat.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Pâtisserie - Bonbons au chocolat",
        nameCook: "Ronan",
        price: "50",
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/pQgqMG",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 25 Janvier, 10h00-12h00",
        duration: 2,
        image: "https://static.cuistotducoin.com/img/workshops/farah-mezze.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/farah.jpg",
        name: "Atelier Libanais - Mezzé",
        nameCook: "Farah",
        price: "COMPLET",
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/dXZxzX",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 1er Février, 10h00-12h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-granola.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Parents/Enfants - Petit Dej' Energie",
        nameCook: "Anne",
        price: 40,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/NEEsQV",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 1er Février, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-bien-etre.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Healthy - Apéro Oméga et Vitamines",
        nameCook: "Anne",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/EW38IZ",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 8 Février, 9h30-13h30",
        duration: 4,
        image:
          "https://static.cuistotducoin.com/img/workshops/ronan-guimauves.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/ronan.jpg",
        name: "Pâtisserie - Guimauves et pâte de fruits",
        nameCook: "Ronan",
        price: "50",
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/hE8IGn",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 22 Février, 10h00-12h00",
        duration: 2,
        image: "https://static.cuistotducoin.com/img/workshops/farah-mezze.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/farah.jpg",
        name: "Atelier Libanais - Mezzé",
        nameCook: "Farah",
        price: "COMPLET",
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/f9xSFd",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 22 Février, 10h00-13h00",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/nadine-crepes-ble-noir.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier Galettes et repas",
        nameCook: "Nadine",
        price: 35,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/qYuFL3",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 22 Février, 14h00-18h00",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/fabien-pain-maison.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Pains Santé",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/ziKHbl",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Mercredi 26 Février, 14h00-16h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-bien-etre.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Enfants - Apéro en Couleur",
        nameCook: "Anne",
        price: 30,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/ZOkOq5",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 29 Février, 10h00-12h30",
        duration: 3,
        image: "https://static.cuistotducoin.com/img/workshops/hayet-couscous.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/hayet.jpg",
        name: "Atelier Algérien - Couscous Végétarien",
        nameCook: "Hayet",
        price: 35,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/MXiy2V",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 29 Février, 14h00-16h00",
        duration: 2,
        image: "https://static.cuistotducoin.com/img/workshops/nadine-crepes-froment.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/nadine.jpg",
        name: "Atelier Crêpes et tartinades",
        nameCook: "Nadine",
        price: 30,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/xRqk8B",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 7 Mars, 14h00-18h00",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/fabien-petits-gateaux.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Petits Gâteaux",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/TiLPJU",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 14 Mars, 10h00-12h00",
        duration: 2,
        image: "https://static.cuistotducoin.com/img/workshops/farah-mezze.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/farah.jpg",
        name: "Atelier Libanais - Mezzé",
        nameCook: "Farah",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/PQlxaz",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 27 Mars, 17h30-20h30",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/luis-cannelloni.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier Italien - Cannelloni",
        nameCook: "Luis",
        price: 50,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/LlpZc0",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 4 Avril, 9h30-13h30",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/fabien-pates.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Les pâtes du quotidien",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/OWajez",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 10 Avril, 17h30-20h30",
        duration: 3,
        image:
          "https://static.cuistotducoin.com/img/workshops/luis-agnolotti.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/luis.jpg",
        name: "Atelier Italien - Agnolotti",
        nameCook: "Luis",
        price: 50,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/hzYZw5",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Vendredi 17 Avril, 18h00-20h00",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/hayet-chorba.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/hayet.jpg",
        name: "Atelier Algérien - Chorba & Cie",
        nameCook: "Hayet",
        price: 35,
        spot: "Cuisinella, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/qu5PQE",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 25 Avril, 14h00-18h00",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/fabien-flans.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Flans en folie",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/XdaZBy",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "Samedi 16 Mai, 14h00-18h00",
        duration: 4,
        image: "https://static.cuistotducoin.com/img/workshops/fabien-viennoiseries.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/fabien.jpg",
        name: "Atelier Boulangerie - Viennoiseries",
        nameCook: "Fabien",
        price: 50,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/SGFeU1",
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
