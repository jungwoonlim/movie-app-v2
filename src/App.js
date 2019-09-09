import React from "react";

const Food = ({ name, pic }) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={pic} />
    </div>
  );
};

const foodLike = [
  {
    name: "1",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "2",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "3",
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
          <Food name={dish.name} pic={dish.image}></Food>
        ))}
      </div>
    );
  }
}
// map ex)
// const arr = [1,2,3,4];
// const mapArr = arr.map(x=>x*2);
// console.log(mapArr);
// -> [2,4,6,8]

export default App;
