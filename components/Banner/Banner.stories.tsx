import { storiesOf } from "@storybook/react";
import React from "react";
import Banner from "./Banner";

storiesOf("Cuistot/components/Banner", module)
  .addDecorator(story => (
    <Banner />
  ))
  .add("default", () => <Banner />);
