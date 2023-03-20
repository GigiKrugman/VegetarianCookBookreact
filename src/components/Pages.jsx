//the goal here is to create a sort of "Route path" without messing the App component and kkep it clean:

import React from "react";
import Navbar from "./Navbar";
import Popular from "./Popular";
import VegetarianPopulars from "./VegetarianPopulars";

export default function Pages() {
  return (
    <>
      <Navbar />
      <Popular />
      <VegetarianPopulars />
    </>
  );
}
