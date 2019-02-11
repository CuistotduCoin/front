import { storiesOf } from "@storybook/react";
import React from "react";
import SearchForm from "./SearchForm";

storiesOf("Cuistot/components/SearchForm", module).add("default", () => (
  <SearchForm apiKey="ffc36feb6e9df06e1c3c4549b5af2b31" appId="latency" />
));
