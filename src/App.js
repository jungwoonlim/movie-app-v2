import React from "react";

const Food = ({ menu }) => {
  return <h1>I like {menu}</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Food menu="1"></Food>
        <Food menu="2"></Food>
        <Food menu="3"></Food>
        <Food menu="4"></Food>
      </div>
    );
  }
}

export default App;
