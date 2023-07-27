import React from "react";

function MovieBookCard({ movie }) {
  return (
    <article className="card-block movie" id={movie.imdbID}>
      <h3 className="gradient-heading-yb">{movie.Title}</h3>
      <div className="section-separetor"></div>
      <img src={movie.Poster} alt={movie.Title} />
    </article>
  );
}

export default MovieBookCard;
