import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    number: 0
  };
  add = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  minus = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The number is: {this.state.number}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
