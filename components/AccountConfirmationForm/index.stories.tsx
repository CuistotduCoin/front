import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import AccountConfirmationForm from "./AccountConfirmationForm";

storiesOf("Cuistot/components/AccountConfirmationForm", module).add(
  "default",
  () => <AccountConfirmationForm />
);
