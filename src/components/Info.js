import React from "react";
import prototype from "prop-types";
import "./Info.css";

Info.prototype = {
  id : prototype.number.isRequired,
  title : prototype.string.isRequired,
  year: prototype.number.isRequired,
  rating: prototype.number.isRequired,
  poster: prototype.string.isRequired,
  genres: prototype.arrayOf(prototype.string).isRequired
}

function Info({
  id,
  title,
  year,
  rating,
  summary,
  poster,
  genres
}){
  return <div className="infomation">
      <div className="movie">
        <img className="movie__img" src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year_rating">{year} | {rating}</h5>
          <ul className="movie__genres">
          {genres.map((genre, index )=> 
            <li key={index} className="genres__genre">{genre}</li>)
          }</ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </div>
}

export default Info;
