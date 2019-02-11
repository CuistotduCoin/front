import { storiesOf } from "@storybook/react";
import React from "react";

import Workshop from "./Workshop";

storiesOf("Cuistot/pages/Workshop", module).add("default", () => (
  <Workshop
    price={20}
    name="Atelier Sushis, Makis et Témaris"
    nameCook="Takako"
    furtherInformation="petit lorem ipsum"
    descriptionWorkshop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    descriptionCook="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    date="Samedi 19 Juin 2018, à 14h"
    mainPhoto="https://picsum.photos/1000/300/?random"
    photos={[
      {
        id: 1,
        image: "https://picsum.photos/200/116.5/?random",
        name: "photo 1"
      },
      {
        id: 2,
        image: "https://picsum.photos/200/116.5/?random",
        name: "photo 2"
      },
      {
        id: 3,
        image: "https://picsum.photos/200/116.5/?random",
        name: "photo 3"
      }
    ]}
    comments={[
      {
        comment:
          "This was my first experience with EatWith and I’m pretty convinced this dining experience will not be outdone. Darling couple! Nice atmosphere! But the food -oh my, was as wonderful as you can imagine and served beautifully on handmade ceramic dishes. I can highly recommend this experience!!",
        date: "25 juil. 2018",
        id: 1,
        name: "Michel",
        picture: "https://picsum.photos/80/80/?random",
        stars: 5
      },
      {
        comment:
          "Doblemente surprised us with original dishes and wine pairings! Very nice experience, cosy atmosphere, you can see that they really enjoy to host people and try to make us as comfortable as possible! If you are looking for a different experience than just a restaurant table, you wont regret it. The guitar and pure voice was the perfect way to close the night! Recommendable!",
        date: "30 juil. 2018",
        id: 2,
        name: "Robert",
        picture: "https://picsum.photos/80/80/?random",
        stars: 5
      },
      {
        comment:
          "La comida maravillosa, el ambiente estupendo, la música una gozada. 100% recomendable.",
        date: "2 juil. 2018",
        id: 3,
        name: "Rachid",
        picture: "https://picsum.photos/80/80/?random",
        stars: 5
      }
    ]}
    imageCook="https://picsum.photos/40/40/?random"
    rating={4.1}
    ratingNumber={7}
    availableSeat={6}
    minSeat={2}
    maxSeat={6}
    spot="Arthur Bonnet, Brest"
    totalSeat={6}
    totalDate={3}
    dayEndBook={3}
    eventType="Atelier collectif"
    cuisineType="Japonais"
    timeEvent="20:00 - 22:30"
  />
));
