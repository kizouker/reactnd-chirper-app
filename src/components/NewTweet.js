import React, { Component } from 'react'
import {formatTweet, _saveTweet, _getUsers} from '../utils/_DATA.js'
import { createTweet } from '../actions/tweets.js';

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
        
      }
    
      handleSubmit(event) {
        let val = this.state.value;
        alert('A name was submitted: ' + value);
        let users = _getUsers();

        let tweet = formatTweet( {
            author :  users['tylermcginnis'].author,
            text: val,
            replyingTo : null
          });
       
          this.props.dispatch(createTweet(this.props.tweets, tweet))
        console.log(tweet);
        _saveTweet(tweet);
        
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

export default connect(mapStateToProps)(NewTweet);

function mapStateToProps( {tweets} ){
  return { 
      tweets: tweets
    }
  };
