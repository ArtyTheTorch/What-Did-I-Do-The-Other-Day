import React, {Component} from 'react';

class Note extends Component {
    render()
    {
        return (
            <div className='note'>
                <div className ='note-title'>
                    <label>{this.props.title}</label>
                    <button onClick={this.props.onDelete}> x </button>
                </div>
                <p className='note-contents'>{this.props.contents}</p>
                <label className='note-time'>{this.props.time}</label>
            </div>
        )
    }
}
export default Note