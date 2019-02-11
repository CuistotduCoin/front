import { storiesOf } from "@storybook/react";
import React from "react";
import BookForm from "./BookForm";

storiesOf("Cuistot/components/BookForm", module).add("default", () => (
  <BookForm availableSeat={7} price={25} endDate={4} />
));
