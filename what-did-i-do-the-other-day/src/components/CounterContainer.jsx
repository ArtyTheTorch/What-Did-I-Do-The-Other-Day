import React, {Component} from 'react';

// *Create a counter, EX: once you click a button five times have it show a message on the screen. Showing how to manipulate state
// *Add a button
// *add an X button to reset the game
// *2 states: (Int)Count, (Bool)whether or not to show the message

class CounterContainer extends Component{
    render() { 
        return (
            <div className="counter-container">
                <Counter />
            </div>
        )
    }
}

class Counter extends Component{
    state = {
        count : 0
    }
    handleClick = () => {
        this.setState((prevState, { count }) => ({
          count: prevState.count + 1
        }))
      }
    handleReset = () => {
        this.setState(count => ({
            count : 0
        })
        )
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.count}
            </button>
            <button onClick={this.handleReset}>
                X
            </button>
            </div>
        )
    }
}
export default CounterContainer