import React, {Component} from 'react';
import Note from './Note';
import CounterContainer from './CounterContainer';


class CalendarGrid extends Component {
    render() { 
        return (
            <div className="App">
                <Note />
                <Note />
                <CounterContainer />
            </div>
        )
    }
}

export default CalendarGrid