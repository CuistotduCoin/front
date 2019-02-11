import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";

storiesOf("Cuistot/components/ResetPasswordForm", module).add("default", () => (
  <ResetPasswordForm />
));
