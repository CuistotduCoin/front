import { storiesOf } from "@storybook/react";
import React from "react";
import Gallery from "./Gallery";

const stories = storiesOf("Cuistot/components/Gallery", module);
stories.add("default", () => {

  return <Gallery />;
});
