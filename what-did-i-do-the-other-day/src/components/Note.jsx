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
                <p class='note-contents'>Something in the Note</p>
                <label class='note-time'>The time is NOW</label>
            </div>
        )
    }
}
export default Note