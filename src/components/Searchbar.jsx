import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Searched from "../pages/Searched";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + encodeURIComponent(input));
  };

  return (
    <form className="search--form" onSubmit={submitHandler}>
      <FaSearch className="search--lens" />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="input--search-bar"
        value={input}
      />
      <div></div>
    </form>
  );
}
