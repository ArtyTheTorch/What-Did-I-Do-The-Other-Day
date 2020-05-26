import React, {Component} from 'react';
import NoteMaker from './NoteMaker';
import CounterContainer from './CounterContainer';


class CalendarGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesList: []
        }
    }

    handleSubmit = (note) => {
        //this.state.notesList //figureout what needs to go here
    }

    render() { 
        return (
            <div className="App">
                {/* Make a Map Function that reads over noteList that returns a Note Component */}
                <NoteMaker />
                <CounterContainer />
            </div>
        )
    }
}

export default CalendarGrid