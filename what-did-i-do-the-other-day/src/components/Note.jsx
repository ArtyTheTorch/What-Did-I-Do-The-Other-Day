import React, {Component} from 'react';
// *Define what a Note is:
// *Title:
// *Note:
// *Time that it was created:
class Note extends Component {
    render()
    {
        return (
            <div className='note'>
                <label className='note-title'>{this.props.title}</label>
                <p className='note-contents'>{this.props.contents}</p>
                <label className='note-time'>{this.props.time}</label>
            </div>
        )
    }
}
export default Note