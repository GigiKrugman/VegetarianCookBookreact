import React from "react";
import styled from "styled-components";
import { useState } from "react";
//import { BsSearch } from "react-icons/fa";

export default function SearchBar() {
  //const [input, setInput] = useState("");

  return (
    <form className="search--form">
      <input type="text" className="input--search-bar"></input>
    </form>
  );
}
