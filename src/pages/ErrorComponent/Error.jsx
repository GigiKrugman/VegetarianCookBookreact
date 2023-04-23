import React from "react";
import ErrorImg from "../../assets/Images/ErrorCB.png";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <Link to="/">
        <MdKeyboardBackspace className="back-to-homepage" />
      </Link>

      <div className="error--page">
        <h1>Whooooops...look like the research didn't give any luck!</h1>
        <p>
          Please try again with a different keyword (we have plenty of yuuuummy
          recipes waiting for you)
        </p>
        <img src={ErrorImg} />
      </div>
    </div>
  );
}
