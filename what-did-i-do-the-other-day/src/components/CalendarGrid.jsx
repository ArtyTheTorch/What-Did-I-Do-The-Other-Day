import React, {Component} from 'react';
import NoteMaker from './NoteMaker';
import Note from './Note';


class CalendarGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesList: []
        }
    }

    handleSubmit = (note) => {
        this.setState( {
            notesList: [...this.state.notesList, note]
        } )
    }

    render() { 
        return (
            <div className="App">
                { this.state.notesList.map((note, index) => {
                    console.log(index)
                    return <Note title = {note.title} contents = {note.contents} time = {note.time} key = {note.title + index}/>        
                })
                }
                {/* {notesList.map((comp, i) => React.createElement(comp, { key: i}))} */}
                {/* Make a Map Function that reads over noteList that returns a Note Component */}
                <div className="notes" onSubmit = {this.handleSubmit}>{/*notesList */}</div>
                <NoteMaker handleSubmit = {this.handleSubmit} />
            </div>
        )
    }
}

export default CalendarGrid