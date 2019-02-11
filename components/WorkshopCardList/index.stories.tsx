import { storiesOf } from "@storybook/react";
import React from "react";
import WorkshopCardList from "./WorkshopCardList";

const stories = storiesOf("Cuistot/components/WorkshopCardList", module);

stories.add("default", () => {
  const workshops = [
    {
      availableSeat: 8,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Faire son pain maison",
      nameCook: "Fabien",
      price: 50,
      rating: 4,
      ratingNumber: 7,
      spot: "Schmidt, Brest",
      totalSeat: 8,
      typeform: "https://cuistotducoin.typeform.com/to/RpiaBS"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Découverte de la cuisine indienne",
      nameCook: "Shyam",
      price: 35,
      rating: 4.6,
      ratingNumber: 8,
      spot: "Arthur Bonnet, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/qgukpu"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Coxinhas & Caipirinha",
      nameCook: "Valquiria",
      price: 35,
      spot: "Arthur Bonnet, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/fivZ7h"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Cake Design : Pâte à sucres",
      nameCook: "Audrey",
      price: 45,
      spot: "Audrey, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/RjVIV7"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "À la découverte du sarrasin",
      nameCook: "Anaelle",
      price: 25,
      spot: "Anaelle, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/U3mOaj"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Sushis, makis et temaris",
      nameCook: "Takako",
      price: 40,
      spot: "Schmidt, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/ywYxcY"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Cacao cru",
      nameCook: "Ahmed",
      price: 25,
      spot: "Cuisinella, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/EWUT4t"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "pour Enfants : Pâte à tartiner maison",
      nameCook: "Anne",
      price: 25,
      spot: "Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/O0N0S8"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Découverte de la cuisine ayurvédique",
      nameCook: "Michel",
      price: 40,
      spot: "Michel, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/wDNHki"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Macarons",
      nameCook: "Ronan",
      price: 50,
      spot: "Schmidt, Brest",
      totalSeat: 6,
      typeform: "https://cuistotducoin.typeform.com/to/h1OXxP"
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Découverte de la cuisine végétale crue",
      nameCook: "Mikaelle",
      price: 60,
      spot: "Ô-Shun, Brest",
      totalSeat: 6,
      typeform: ""
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Entre ici et ailleurs",
      nameCook: "Ahmed",
      price: 35,
      spot: "Schmidt, Brest",
      totalSeat: 6,
      typeform: ""
    },
    {
      availableSeat: 6,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Inspiration Africaine",
      nameCook: "Ahmed",
      price: 35,
      spot: "Schmidt, Brest",
      totalSeat: 6,
      typeform: ""
    },
    {
      availableSeat: 8,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Recyclez son pain : stop au gaspi",
      nameCook: "Fabien",
      price: 45,
      spot: "Arthur Bonnet, Brest",
      totalSeat: 8,
      typeform: ""
    },
    {
      availableSeat: 12,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "A la découverte des vins naturels",
      nameCook: "Gaetan",
      price: 40,
      spot: "Soif de Vins, Brest",
      totalSeat: 12,
      typeform: ""
    },
    {
      availableSeat: 5,
      date: "à venir",
      image: "https://picsum.photos/360/192/?random",
      imageCook: "https://picsum.photos/60/60/?random",
      name: "Kouign Amann",
      nameCook: "Christian",
      price: 40,
      spot: "C Chocolat, Brest",
      totalSeat: 5,
      typeform: ""
    }
  ];

  return <WorkshopCardList workshops={workshops} />;
});
