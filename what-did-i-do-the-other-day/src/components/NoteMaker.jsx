import React, {Component} from 'react';
import Note from './Note';
/*TODO: 
*Define what a Note is:
*Title:
*Note:
*Time that it was created:
*
*When i hit submit, we create a new "note" and that note is displayed above.
*This component is now going to be Form and it will create notes
*Learn how to use the Map funciton with react
*Use the map function with on of our container components.
*Look up - Prop drilling/Passing Props down
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
        console.log(event.target)
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
                {/* <textarea id = 'potato' value={this.state.potato} onChange={this.handleChange}/> */}
                <input type="submit" value="Submit" />
                <button onClick={this.handleClear}>Clear
                </button>
                {/* <Note title = 'BAM!' /> */}
            </form>
        );
    }
}

  export default NoteMaker