import React, {Component} from 'react';

/*TODO: 
*TIME - MomentJS
*/
class NoteMaker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        contents: '',
        time: ''
      };
    }
  
     handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
     }
  
    createNote = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
    }

    handleClear = (event) => {
        this.setState(
            {title: '', contents: '', time: ''}
        )
        event.preventDefault();
    }
  
    render() {
        return (
            <form className = 'note-maker' onSubmit={this.createNote}>
                <label>Title:
                    <textarea id = 'title' value={this.state.title} onChange={this.handleChange}/>
                </label>
                <label>Contents:
                    <textarea id = 'contents' value={this.state.contents} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
                <button onClick={this.handleClear}>Clear
                </button>
            </form>
        );
    }
}

  export default NoteMaker