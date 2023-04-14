import { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import DetailedRecipe from "../pages/DetailedRecipe";
import Error from "../pages/Error";

export default function PopularVegetarians() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.spoonacular.com/recipes/random",
          {
            headers: {
              Accept: "application/json",
            },
            params: {
              apiKey: import.meta.env.VITE_API_KEY_SPOONACULAR,
              tags: "vegetarian",
              number: 6,
            },
          }
        );
        console.log(res.data);
        setPopular(res.data.recipes);
      } catch (error) {
        <Error />;
      }
    };
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
