import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import AccountDropdown from "./AccountDropdown";

storiesOf("Cuistot/components/AccountDropdown", module).add("default", () => (
  <AccountDropdown />
));
