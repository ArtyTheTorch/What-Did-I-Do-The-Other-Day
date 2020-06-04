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

    onDelete = (index) => {
        const prevNotes = Object.assign([], this.state.notesList)
        //filter way of deleting a Note component from the Array
        let moddifiedNotes= prevNotes.filter( function(element) {return prevNotes.indexOf(element) !== index })
        
        // let moddifiedNotes = []
        // //forEach way of deleteing a Note Component from the Array
        // prevNotes.forEach(element => {
        //     if(prevNotes.indexOf(element) !== index) {
        //         moddifiedNotes.push(element)
        //     }
        // });
        
        this.setState( {
            notesList: moddifiedNotes
        } )
    }

    render() { 
        return (
            <div className="App">
                { this.state.notesList.map((note, index) => {
                    return <Note 
                        title={note.title}
                        contents={note.contents}
                        time={note.time}
                        key={note.title + index}
                        onDelete={() => this.onDelete(index)}/>        
                })
                }
                <NoteMaker handleSubmit = {this.handleSubmit} />
            </div>
        )
    }
}

export default CalendarGrid