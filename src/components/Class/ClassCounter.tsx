import React, { Component } from 'react'

type CounterProps = {
  message: string
}
type CounterState = {
  count: number
}


export default class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }
  handleClickIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  handleClickDecrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <div><button onClick={this.handleClickIncrease}>Increment</button>
        <button onClick={this.handleClickDecrease}>Decrease</button>
        {this.props.message}
        {this.state.count}
      </div>
    )
  }
}
