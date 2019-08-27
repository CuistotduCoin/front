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
        date: "samedi 28 Septembre, 10h-12h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/anne-granola.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/anne.jpg",
        name: "Atelier Enfant : P'tit Dej",
        nameCook: "Anne",
        price: 30,
        spot: "Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/lborJZ",
        type: "Atelier collectif"
      },
      {
        availableSeat: 8,
        date: "samedi 14 Septembre, 9h-14h",
        duration: 5,
        image:
          "https://static.cuistotducoin.com/img/workshops/kevin-brassage.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/kevin.jpg",
        name: "Atelier Brassage de Bière",
        nameCook: "Kevin",
        price: 65,
        spot: "The Corner, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/yueZfu",
        type: "Atelier collectif"
      },
      {
        availableSeat: 6,
        date: "samedi 28 Septembre, 14h-16h",
        duration: 2,
        image:
          "https://static.cuistotducoin.com/img/workshops/audrey-cupcake.jpg",
        imageCook: "https://static.cuistotducoin.com/img/cooks/audrey.jpg",
        name: "Atelier Cupcakes : Parents/enfants",
        nameCook: "Audrey",
        price: 40,
        spot: "Schmidt, Brest",
        totalSeat: 8,
        typeform: "https://cuistotducoin.typeform.com/to/upuPXF",
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
