import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const apiKey = "d04c0ad217af403d8a6bd4fb1b8dc0f5";
  const recipeSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&diet=vegetarian`
    );
    const recipes = await data.json();

    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    recipeSearched(params.searched);
  }, [params.searched]);

  return (
    <div className="searched--recipe-card">
      {searchedRecipes.map((item) => {
        return (
          <Link to={"/recipe/" + item.id} key={item.id}>
            <div className="single--recipe--searched-card">
              <img src={item.image} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
