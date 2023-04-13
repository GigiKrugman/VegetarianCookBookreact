import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Error from "../pages/Error";

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [hasError, setHasError] = useState(false);
  let params = useParams();
  const apiKey = import.meta.env.VITE_API_KEY_SPOONACULAR;
  const recipeSearched = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}&diet=vegetarian`
      );

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const recipes = await response.json();
      setSearchedRecipes(recipes.results);

      if (recipes.results.length === 0) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    } catch (error) {
      setHasError(true);
    } finally {
      console.log("Fetch operation completed");
    }
  };

  useEffect(() => {
    recipeSearched(params.searched);
  }, [params.searched]);

  if (hasError) {
    return <Error />;
  }

  return (
    <div>
      <Link to="/">
        <MdKeyboardBackspace className="back-to-homepage" />
      </Link>
      <div className="searched--recipe-card">
        {searchedRecipes.map((item) => {
          return (
            <Link
              to={"/recipe/" + item.id}
              key={item.id}
              className="recipe-link--router"
            >
              <div className="single--recipe--searched-card">
                <img src={item.image} />
                <h3>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
