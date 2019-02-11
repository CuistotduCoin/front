import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Snackbar from "./Snackbar";

storiesOf("Cuistot/components/Snackbar", module)
  .add("info", () => <Snackbar open message="Une info !" />)
  .add("warning", () => (
    <Snackbar open message="Un warning !" variant="warning" />
  ))
  .add("success", () => (
    <Snackbar open message="Un success !" variant="success" />
  ))
  .add("error", () => <Snackbar open message="Une erreur !" variant="error" />);
