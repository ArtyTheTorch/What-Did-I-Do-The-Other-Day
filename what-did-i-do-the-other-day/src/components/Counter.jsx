import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count : 0
    }
    handleClick = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1
        }))
      }
    handleReset = () => {
        this.setState({count : 0})
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

export default Counter