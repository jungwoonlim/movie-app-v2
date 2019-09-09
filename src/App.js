import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {
    id: "1",
    name: "One",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 1.1
  },
  {
    id: "2",
    name: "Two",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 2.2
  },
  {
    id: "3",
    name: "Three",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 3.3
  }
];

const Food = ({ name, pic, rating }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={pic} alt={name} />
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        {foodLike.map(dish => (
          <Food
            key={dish.id}
            name={dish.name}
            pic={dish.image}
            rating={dish.rating}
          ></Food>
        ))}
      </div>
    );
  }
}

export default App;
