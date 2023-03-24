import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  //const [input, setInput] = useState("");

  return (
    <form className="search--form">
      <FaSearch className="search--lens" />
      <input type="text" className="input--search-bar"></input>
    </form>
  );
}
