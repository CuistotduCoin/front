import { storiesOf } from "@storybook/react";
import React from "react";
import WorkshopListItem from "./WorkshopListItem";

const stories = storiesOf("Cuistot/components/WorkshopListItem", module);

stories.add("default", () => {
  const workshop = {
    name: "Faire son pain maison",
    cook: {
      gourmet: {
        first_name: 'Charles',
        last_name: 'Dupont',
      },
    },
    duration: 60,
    date: new Date().toISOString(),
    images: [
      { key: 'https://picsum.photos/120/120/?random' }
    ],
    price: 50,
    kitchen: {
      name: "Schmidt, Brest"
    },
    min_gourmet: 4,
    max_gourmet: 8,
    description: 'Atelier test'
  };

  return <WorkshopListItem workshop={workshop} />;
});
