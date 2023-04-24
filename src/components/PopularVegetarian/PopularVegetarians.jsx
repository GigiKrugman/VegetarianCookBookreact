import { useState, useEffect } from "react";
import axios from "axios";
import ClientApi from "../Api/ClientApi";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import DetailedRecipe from "../../pages/DetailedRecipe/DetailedRecipe";
import Error from "../../pages/ErrorComponent/Error";

export default function PopularVegetarians() {
  const [popular, setPopular] = useState([]);

  const fetchData = async () => {
    try {
      const res = await ClientApi.fetchPopularRecipes();
      console.log(res);
      setPopular(res.recipes);
    } catch (error) {
      <Error />;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="popular--section">
      <h3>Popular Vegetarian Picks:</h3>
      <div className="card--receipes--container">
        {popular.map((recipe) => {
          return (
            <div key={recipe.id} className="card--container--popular">
              <Link to={"/recipe/" + recipe.id}>
                <div className="card--receipes">
                  <img src={recipe.image} alt={recipe.title} />
                  <h4>{recipe.title}</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
