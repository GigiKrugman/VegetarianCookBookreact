import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  //const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    //navigate(`/recipes/${input}`);
  };

  return (
    <form className="search--form">
      <FaSearch className="search--lens" />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="input--search-bar"
        value={input}
      ></input>
    </form>
  );
}
