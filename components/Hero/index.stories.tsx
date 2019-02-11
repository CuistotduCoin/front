import { storiesOf } from "@storybook/react";
import SearchForm from "../../components/SearchForm";
import React from "react";
import Hero from "./Hero";

storiesOf("Cuistot/components/Hero", module).add("default", () => (
  <Hero
    imageURL="https://picsum.photos/1000/300/?random"
    videoURL="http://thenewcode.com/assets/videos/polina.mp4"
    valueProposition="Proposition de valeur"
    description="description"
    searchForm={
      <SearchForm apiKey="ffc36feb6e9df06e1c3c4549b5af2b31" appId="latency" />
    }
  />
));
