import React from "react";
import MovieDetails from "./components/Details";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

export const API_KEY = "dfeec259763db793e5d62e3dcc7b18b6";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route exact path="details/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
