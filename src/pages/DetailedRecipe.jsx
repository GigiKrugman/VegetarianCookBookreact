import { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { BiLeaf } from "react-icons/bi";
import { FaNutritionix } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";

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
      <Link to="/">
        <MdKeyboardBackspace className="back-to-homepage" />
      </Link>
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
              <p>
                <span>Preparation time</span>: {details.readyInMinutes} minutes
              </p>
              <BiLeaf />
              <p>
                <span>Vegetarian</span>
              </p>
              <FaNutritionix />
              <p>
                <span>Nutrition Score</span>: {details.healthScore} / 10
              </p>
            </div>
          </div>

          <div className="info--recipe--container">
            <h3 className="info--recipe--summary">
              {stripHTMLTags(details.summary)}
            </h3>
            <div className="info--ingredients--container">
              <h4>Ingredients:</h4>
              <ul>
                {details.extendedIngredients.map((ingredient) => {
                  return (
                    <div className="info--recipe--ingredients">
                      <li key={ingredient.id}>
                        <p>{ingredient.name}</p>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="info--instructions--container">
              <h4>Instructions:</h4>
              <ol>
                {details.analyzedInstructions[0].steps.map((step) => {
                  return (
                    <div className="info--recipe--instructions">
                      <li key={step.number}>{step.step}</li>
                    </div>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
