import React from "react";
//import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
//import Navbar from "./Navbar";
// import SearchBar from "../components/SearchBar";
// import PopularVegetarians from "../components/PopularVegetarians";
// import About from "./About";
// import Faq from "./Faq";
import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <>
      {/* //<Navbar /> */}
      <Home />
      {/* <SearchBar />
      <PopularVegetarians /> */}
    </>
  );
}
