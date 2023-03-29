// import Pages from "./components/Pages";
// import { BrowserRouter } from "react-router-dom";
//import "./index.css";
import "./index.css";
//import { BrowserRouter } from "react-router-dom";
// import SearchBar from "./assets/CSS/SearchBar.css";
// import Navbar from "./assets/CSS/Navbar.css";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <SearchBar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
