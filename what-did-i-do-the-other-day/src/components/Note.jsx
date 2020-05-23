import React, {Component} from 'react';
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
*/
class Note extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        labelText: ''
      };
    }
  
     handleChange = (event) => {
        this.setState({value: event.target.value})
     }
  
    handleSubmit = (event) => {
        this.setState({labelText: this.state.value})
        event.preventDefault()
        event.stopPropagation()
    }

    handleClear = (event) => {
        this.setState(
            {labelText: '', value: ''}
        )
        event.preventDefault();
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>What you type here:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit" />

                <p>Will go here: {this.state.labelText}</p>
                <button onClick={this.handleClear}>Clear
                </button>
            </form>
        );
    }
}

  export default Note