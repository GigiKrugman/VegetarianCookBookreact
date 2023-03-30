import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

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
          <h3>{details.title}</h3>
          <div className="card--image--info">
            <img src={details.image} alt={details.title} />
          </div>

          <div className="info--recipe">
            <p>{stripHTMLTags(details.summary)}</p>
            <ol>{stripHTMLTags(details.instructions)} </ol>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
