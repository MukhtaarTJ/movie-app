import React from "react";

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="justify-content-start m-3 col image-container movie-app">
          <img src={movie.Poster} alt="" />
          <div className="overlay d-flex align-items-center justify-contents-center"></div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
