import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4dc1bb11`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(
    (searchValue) => {
      getMovieRequest(searchValue);
    },
    [searchValue]
  );

  return (
    <div className="App d-flex ">
      <div className="container-fluid d-flex row movie-app  ">
        <div className="d-flex gap-5 header col">
          <MovieListHeading heading="movies" className="text-light" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="d-flex">
          <MovieList movies={movies} className="d-flex" />
        </div>
      </div>
    </div>
  );
}

export default Movies;
