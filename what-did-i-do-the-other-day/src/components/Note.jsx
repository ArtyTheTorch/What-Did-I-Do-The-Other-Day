import React, {Component} from 'react';
// *Define what a Note is:
// *Title:
// *Note:
// *Time that it was created:
class Note extends Component {
    render()
    {
        return (
            <div className='note' class = 'note'>
                <label class='note-title'>{this.props.title}</label>
                <p class='note-contents'>{this.props.note}</p>
                <label class='note-time'>{this.props.time}</label>
            </div>
        )
    }
}
export default Note