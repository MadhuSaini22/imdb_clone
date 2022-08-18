import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="mainContainer">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="downContainer">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route
              path="movie/:id"
              element={<h1>Movie Detail Page</h1>}
            ></Route>
            <Route
              path="movies/:type"
              element={<MovieList/>}
            ></Route>
            <Route path="/*" element={<h1>404 Error</h1>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
