import { storiesOf } from "@storybook/react";
import React from "react";

import Payment from "./Payment";

storiesOf("Cuistot/pages/Payment", module).add("default", () => (
  <Payment
    name="Atelier Sushis, Makis et Témaris"
    nameCook="Takako"
    date="Samedi 19 Juin 2018, à 14h"
    price="50"
  />
));
