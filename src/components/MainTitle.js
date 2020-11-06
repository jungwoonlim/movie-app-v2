import React from "react";
import PropTypes from "prop-types";
import "./MainTitle.css";

const MainTitle = ({ id, title, poster }) => {
  return (
    <div className="title__movie">
      <img src={poster} alt={title} title={title}></img>
    </div>
  );
};

MainTitle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MainTitle;
