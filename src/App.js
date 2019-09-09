import React from "react";

const Food = ({ name, pic }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={pic} alt={name} />
    </div>
  );
};

const foodLike = [
  {
    id: "1",
    name: "One",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: "2",
    name: "Two",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: "3",
    name: "Three",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        {foodLike.map(dish => (
          <Food key={dish.id} name={dish.name} pic={dish.image}></Food>
        ))}
      </div>
    );
  }
}

export default App;
