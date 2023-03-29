import React from "react";

import Home from "./Home";
import Searched from "./Searched";

import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/searched/:searched" element={<Searched />} />
    </Routes>
  );
}
