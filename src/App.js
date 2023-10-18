import React from "react";
import Movies from "./movies";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="links">
        <Link
          to="/"
          className="link"
          style={{ color: "white", fontSize: "25px", marginLeft: "120px" }}>
          Home
        </Link>

        <Link
          to="/movies"
          className="link"
          style={{ color: "white", fontSize: "25px", marginLeft: "auto" }}>
          My movies
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
