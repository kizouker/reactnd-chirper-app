import React, { Component } from 'react'



class NewTweet extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>New tweet :</label>
            <input name="text" type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default NewTweet;