import React, { Component } from 'react'
import {formatTweet, _saveTweet, _getUsers} from '../utils/_DATA.js'

class NewTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}; // spara state i store istället - vi vill ha kvar våra nya tweets

      // const tweet = {
      //     "8xf0y6ziyjabvozdd253nd": { // generate new key
      //       id: "8xf0y6ziyjabvozdd253nd",
      //       text: "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
      //       author: "sarah_edo",
      //       timestamp: 1518122597860,
      //       likes: ['tylermcginnis'],
      //       replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
      //       replyingTo: null,
      //     }
      //   }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      handleChange(event) {
        this.setState({value: event.target.value});
        //this.props.dispatch();
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        let val = this.state.value;
        let tweet = formatTweet( {users['tylermcginnis'].name, val, replyingTo=null});
        let users = _getUsers();

        const formattedTweet = formatTweet({
          users['tylermcginnis'].author,
          author,
          replyingTo
        })
    
        console.log(tweet);
        //_saveTweet(tweet);
        //formatTweet()
        
        event.preventDefault();
      }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>New tweet :</label>
            {/* <input name="text" type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <br></br>
            <textarea rows="4" cols="50" name="text" type="text" 
              value={this.state.value} onChange={this.handleChange} >
            </textarea>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default NewTweet;