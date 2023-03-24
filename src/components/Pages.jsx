import React from "react";
//import { BrowserRouter } from "react-router-dom";

//import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import PopularVegetarians from "./PopularVegetarians";
// import About from "./About";
// import Faq from "./Faq";
//import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <>
      {/* //<Navbar /> */}

      <SearchBar />
      <PopularVegetarians />
    </>
  );
}
