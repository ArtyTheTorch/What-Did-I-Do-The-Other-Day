import React, {Component} from 'react';
/*TODO: 
*Read about how to create a controlled component

*Figure out how to take in text, within an textarea input (HTML)
* - Get it set up so you can have a user input text
* - Button that takes the text in the input and put it into an HTML tag as a DIV OR A P
* - Hint: Your  input is a conduit for the user to write something into the state
* - The button that you hit, needs to clear out the input & remove the text
*/
class Note extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        labelText: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
    }
  
     handleChange(event) {
        this.setState({value: event.target.value})
     }
  
    handleSubmit(event) {
        this.setState(
            labelText => ({labelText: this.state.value})
        )
      event.preventDefault();
    }

    handleClear = (event) => {
        this.setState(
            labelText => ({labelText : ''}),
            value => ({value : ''})
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

                <p onChange={this.handleSubmit}>Will go here: {this.state.labelText}
                </p>
                <button onClick={this.handleClear}>Clear
                </button>
            </form>
        );
    }
}

  export default Note