import React from "react";
import IMG from "../assets/Images/cooking-recipes.png";

export default function Loading() {
  return (
    <div className="loading--phase">
      <h2>Loading your recipes...</h2>
      <img src={IMG} />
    </div>
  );
}
