//the goal here is to create a sort of "Route path" without messing the App component and kkep it clean:

import React from "react";
import Navbar from "./Navbar";

import SearchBar from "./SearchBar";
//following a tryout component to check if i can manage to try an axios call!
import PopularVegetarians from "./PopularVegetarians";

export default function Pages() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <PopularVegetarians />
    </>
  );
}
