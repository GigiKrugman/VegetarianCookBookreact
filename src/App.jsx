import "./index.css";
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
