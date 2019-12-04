import React, { Component } from 'react'
import {formatTweet, _saveTweet, _getUsers} from '../utils/_DATA.js'
import { createTweet } from '../actions/tweets.js';
import { connect } from 'react-redux'

class NewTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}; // spara state i store istället - vi vill ha kvar våra nya tweets   

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        let val = this.state.value;
        alert('A name was submitted: ' + val);
        let users = this.props.users;
        console.log(users);
        let tweet = formatTweet( {
          //author :  users['tylermcginnis'].name,
            author :  users['tylermcginnis'].id,
            text: val,
            replyingTo : null
          });
        // export function formatTweet (tweet, author, authedUser, parentTweet)
          console.log(tweet);
          this.props.dispatch(createTweet(this.props.tweets, tweet))         
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

function mapStateToProps( {tweets, users} ){
  return { 
      tweets: tweets,
      users : users
    }
  };
