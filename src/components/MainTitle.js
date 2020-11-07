import React from "react";
import PropTypes from "prop-types";
import "./MainTitle.css";

const MainTitle = ({ id, title, poster, clickHander }) => {
  return (
    <div className="title__movie">
      <img
        src={poster}
        id={id}
        alt={title}
        title={title}
        onClick={clickHander}
      ></img>
    </div>
  );
};

MainTitle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MainTitle;
