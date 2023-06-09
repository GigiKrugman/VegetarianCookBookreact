import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import ClientApi from "../../components/Api/ClientApi";
import Error from "../ErrorComponent/Error";
import Loading from "../../components/Loading/Loading";

export default function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [hasError, setHasError] = useState(false);
  let params = useParams();
  const apiKey = import.meta.env.VITE_API_KEY_SPOONACULAR;
  const recipeSearched = async (name) => {
    try {
      const recipes = await ClientApi.searchRecipes(name); // Use ClientApi method
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
      {searchedRecipes ? (
        <div className="searched--recipe-card">
          {searchedRecipes.map((item) => {
            return (
              <Link
                to={"/recipe/" + item.id}
                key={item.id}
                className="recipe-link--router"
              >
                <div className="single--recipe--searched-card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
