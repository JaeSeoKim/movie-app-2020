import React from "react";
import prototype from "prop-types";

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
  poster
}){
  return <div>
    <img src={poster} alt={title}/>
    <h4>{title}</h4>
    <h5>{year}</h5>
    <h5>{rating}</h5>
    </div>
}

export default Movie;