import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count : 0
    }
  }

  increment = () => {
    const count = this.state.count
    this.setState({count: count + 1})
  }

  decrement = () => {
    const count = this.state.count
    this.setState({count: count - 1})
  }

  reset = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <div>
          <input type='button' onClick={this.increment} value='+'></input>
          <input type='button' onClick={this.decrement} value='-'></input>
          <input type='button' onClick={this.reset} value='reset'></input>
        </div>
      </div>
    );
  }
}

export default App;
