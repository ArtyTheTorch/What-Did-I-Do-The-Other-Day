import React, {Component} from 'react';
import NoteMaker from './NoteMaker';
import Note from './Note';


class CalendarGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesList: [<Note />,<Note />]
        }
    }

    handleSubmit = (note) => {
        //this.state.notesList //figureout what needs to go here
    }

    render() { 
        return (
            <div className="App">
                <Note title = 'Something' note = 'More stuff goes here' time = 'yesterday'/>
                
                {/* {notesList.map((comp, i) => React.createElement(comp, { key: i}))} */}
                {/* Make a Map Function that reads over noteList that returns a Note Component */}
                <div className="notes" onSubmit = {this.handleSubmit}>{/*notesList */}</div>
                <NoteMaker />
            </div>
        )
    }
}

export default CalendarGrid