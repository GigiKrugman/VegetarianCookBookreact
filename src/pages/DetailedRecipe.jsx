import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaNutritionix } from "react-icons/fa";

//function helpful tp clear all the HTML rendered!
function stripHTMLTags(text) {
  const div = document.createElement("div");
  div.innerHTML = text;
  return div.textContent || div.innerText || "";
}

export default function DetailedRecipe() {
  const [details, setDetails] = useState();

  const apiKey = "d04c0ad217af403d8a6bd4fb1b8dc0f5";
  const params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      {details ? (
        <div key={details.id}>
          <h2 className="detail--card-title">{details.title}</h2>
          <div className="card--image--info">
            <img
              src={details.image}
              alt={details.title}
              className="detail--card-image"
            />
            <div className="detail--card--favicons">
              <IoIosTimer />
              <p>Preparation time: {details.readyInMinutes} minutes</p>
              <MdFavoriteBorder />
              <p>Vegetarian</p>
              <FaNutritionix />
              <p>Nutrition Score: {details.healthScore} / 10</p>
            </div>
          </div>

          <div className="info--recipe">
            <h3>{stripHTMLTags(details.summary)}</h3>
            <ol>
              {details.analyzedInstructions[0].steps.map((step) => {
                return <li key={step.number}>{step.step}</li>;
              })}
            </ol>
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return (
                  <li key={ingredient.id}>
                    <p>{ingredient.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
