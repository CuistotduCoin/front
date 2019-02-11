import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import StarRating from "./StarRating";

const stories = storiesOf("Cuistot/components/StarRating", module);
stories.add("default", () => {
  const defaultValue = 3;
  const options = {
    max: 5,
    min: 0,
    range: true,
    step: 0.5
  };

  return <StarRating rating={number("Rating", defaultValue, options)} />;
});
