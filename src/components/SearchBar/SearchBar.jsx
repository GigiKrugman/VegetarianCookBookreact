import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/searched/" + encodeURIComponent(data.searchInput));
  };

  return (
    <form className="search--form" onSubmit={handleSubmit(onSubmit)}>
      <FaSearch className="search--lens" />
      <input
        {...register("searchInput")}
        type="text"
        placeholder="Search Recipe"
        className="input--search-bar"
      />
      <div></div>
    </form>
  );
}
