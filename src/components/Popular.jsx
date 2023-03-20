import { useEffect, useState } from "react";

import React from "react";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=d04c0ad217af403d8a6bd4fb1b8dc0f5&number=4`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id} className="card--recipe">
            <p>{recipe.title}</p>
            <img src={recipe.image} />
          </div>
        );
      })}
    </div>
  );
}
