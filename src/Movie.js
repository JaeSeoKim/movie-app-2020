import React from "react";
import prototype from "prop-types";
import "./Movie.css"

Movie.prototype = {
  id : prototype.number.isRequired,
  title : prototype.string.isRequired,
  year: prototype.number.isRequired,
  rating: prototype.number.isRequired,
  poster: prototype.string.isRequired
}

function Movie({
  title,
  year,
  rating,
  summary,
  poster
}){
  return <div class="movie">
      <img class="movie__img" src={poster} alt={title} title={title}/>
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year_rating">{year} | {rating}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
}

export default Movie;