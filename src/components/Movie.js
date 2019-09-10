import React from "react";
import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={poster}></img>
      <p>{summary}</p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
