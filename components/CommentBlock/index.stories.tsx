import { storiesOf } from "@storybook/react";
import React from "react";
import CommentBlock from "./CommentBlock";

storiesOf("Cuistot/components/CommentBlock", module).add("default", () => (
  <CommentBlock
    comment="This was my first experience with EatWith and I’m pretty convinced this dining experience will not be outdone. Darling couple! Nice atmosphere! But the food -oh my, was as wonderful as you can imagine and served beautifully on handmade ceramic dishes. I can highly recommend this experience!!"
    date="25 juil. 2018"
    name="Michel"
    picture="https://picsum.photos/80/80/?random"
    stars={5}
  />
));
