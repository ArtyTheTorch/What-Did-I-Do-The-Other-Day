import React, {Component} from 'react';
import Counter from './Counter';

class CounterContainer extends Component{
    render() { 
        return (
            <div className="counter-container">
                <Counter />
            </div>
        )
    }
}


export default CounterContainer