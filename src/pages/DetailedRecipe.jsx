import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

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
          <img src={details.image} alt={details.title} />
          <div className="info--recipe">
            <p>{details.summary}</p>
            <p>{details.instructions}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
