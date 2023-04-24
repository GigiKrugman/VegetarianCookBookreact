import React from "react";

import Home from "./Home";
import Searched from "./SearchedComponent/Searched";
import DetailedRecipe from "./DetailedRecipe/DetailedRecipe";
import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/searched/:searched" element={<Searched />} />
      <Route path="/recipe/:id" element={<DetailedRecipe />} />
    </Routes>
  );
}
