import { storiesOf } from "@storybook/react";
import React from "react";
import WorkshopCard from "./WorkshopCard";

storiesOf("Cuistot/components/WorkshopCard", module).add("default", () => (
  <WorkshopCard
    price={20}
    name="Atelier Sushis, Makis et Témaris"
    nameCook="Takako"
    date="Samedi 19 Juin 2018, à 14h"
    image="https://picsum.photos/400/194/?random"
    imageCook="https://picsum.photos/40/40/?random"
    rating={4.1}
    ratingNumber={7}
    availableSeat={6}
    spot="Arthur Bonnet, Brest"
    totalSeat={6}
    totalDate={3}
    duration={2}
  />
));
