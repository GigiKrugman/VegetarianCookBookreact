import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../src/components/PopularVegetarian/Popular.css";
import "./assets/CSS/Searched.css";

import "../src/pages/DetailedRecipe/Detail.css";
import "../src/components/SearchBar/SearchBar.css";
import "../src/components/Loading/Loading.css";
import "../src/pages/ErrorComponent/Error.css";

//import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
