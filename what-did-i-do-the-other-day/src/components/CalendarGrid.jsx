import React, {Component} from 'react';
import NoteMaker from './NoteMaker';
import WeekView from './WeekView';
import moment from 'moment';

class CalendarGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesList: [],
            selectedDate: moment().format('MM/DD/YYYY')
        }
    }

    handleSubmit = (note) => {
        const newNote = {...note, day: this.state.selectedDate}
        this.setState( {
            notesList: [...this.state.notesList, newNote]
        } )
    }

    onDelete = (index) => {
        const prevNotes = Object.assign([], this.state.notesList)
        let moddifiedNotes = []

        prevNotes.forEach((element, elementOfIndex) => {
            if(index !== elementOfIndex ){
                moddifiedNotes.push(element)
            }
        });

        this.setState( {
            notesList: moddifiedNotes
        } )
    }

    handleSelectDate = (date) => {
        console.log(date)
        this.setState( {
            selectedDate: date
        } )
    }

    render() { 
        return (
            <div className="App">
                <WeekView handleSelectDate={this.handleSelectDate} selectedDate={this.state.selectedDate} notesList={this.state.notesList}/>
                <div className='input-stuff'>
                   <NoteMaker handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default CalendarGrid