import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      Vegetarianify!
      <div className="navbar--router--links">
        <p>About</p>
        <p>FAQ</p>
      </div>
    </div>
  );
};

export default Navbar;
