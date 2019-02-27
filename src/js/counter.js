import React, {Component} from 'react'

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <span style={{padding:"0px 10px"}}>Count: {this.state.count} </span>
        <button onClick={this.handleClick.bind(this)}>increment</button>
      </div>
    );
  }
}
