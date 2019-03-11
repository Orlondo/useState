import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.addHandler = this.addHandler.bind(this);
  }

  state = {
    count: 0
  }

  addHandler(props) {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className="App">
        <h1>useState</h1>
        <div>The current count is { this.state.count }</div>
        <button onClick={ this.addHandler }>+</button>
      </div>
    );
  }
}

export default App;
