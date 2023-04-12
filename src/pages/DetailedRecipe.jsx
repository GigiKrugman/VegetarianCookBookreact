import { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { BiLeaf } from "react-icons/bi";
import { FaNutritionix } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import Loading from "../components/Loading";

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
              <p className="recipe-info">
                <IoIosTimer />
                <span>Preparation time</span>: {details.readyInMinutes} minutes
              </p>

              <p className="recipe-info">
                <BiLeaf />
                <span>Vegetarian</span>
              </p>

              <p className="recipe-info">
                <FaNutritionix />
                <span>Nutrition Score</span>: {details.healthScore} points
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
                    <div>
                      <li
                        key={ingredient.id}
                        className="info--recipe--ingredients"
                      >
                        <p>
                          {ingredient.name} -
                          {Math.round(ingredient.measures.metric.amount)}
                          {ingredient.measures.metric.unitShort}
                        </p>
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
                    <div>
                      <li
                        key={step.number}
                        className="info--recipe--instructions"
                      >
                        {step.step}
                      </li>
                    </div>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
