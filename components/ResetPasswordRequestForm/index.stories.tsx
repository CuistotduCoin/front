import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import ResetPasswordRequestForm from "./ResetPasswordRequestForm";

storiesOf("Cuistot/components/ResetPasswordRequestForm", module).add(
  "default",
  () => <ResetPasswordRequestForm />
);
