import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatTweet } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import NewTweet from './NewTweet'

class Tweet extends Component {
  constructor(props){
    super(props);
    this.state = {
      like : true,
      reply : true
    };
    this.toggleLike = this.toggleLike.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }
  toggleLike = () => {
  //  let currentState = this.state.like;
    this.setState( state => ({  like : !state.like,
                               }));

    // let className = this.state.like ? 'classLike' : 'classNotLike';
    console.log("Toggle like: " + this.state.like);
  }

  handleReply = () => {
    console.log("reply");
    this.setState( state => ({  reply : !state.reply,
                                }));
   
  
  }
  render() {
    const { like, reply } = this.state;
    // const { tweet } = this.props
    // const { id, timestamp, author } = this.props

    if (this.props.tweet === null || this.props.tweet === undefined) {
      return <p>This Tweet is empty</p>
    }   
    return (
      <div className="tweet">
       Tweet
       <div> T id: {this.props.tweet.id} </div>
       <div> T author: {this.props.tweet.author} </div>
       <div> T timestamp: {this.props.tweet.timestamp} </div>
       <div> T text : {this.props.tweet.text} </div>
     
      <button id="reply" onClick={this.handleReply}> 
        <TiArrowBackOutline/> 
      </button>
      { reply && (<NewTweet/>) }

      <button id="likeId" onClick={this.toggleLike}>   
        { like && (<TiHeartFullOutline/>) 
        } 
        { !like && (<TiHeartOutline/>) 
        } 
      </button>
    </div>
    )
  }
}
/**
 * 
 * @param {Tweet Page View Requirements

    is located at /tweet/:id
    shows an individual tweet
        the author
        the time stamp
        a reply button - with the number of replies (if higher than 0)
        a like button - with the number of likes (if higher than 0)
    has a reply form
    shows all replies

} param0 
 * @param {*} param1 
 */

function mapStateToProps({authedUser, users, tweets}, {id}){
  const tweet = tweets[id] 
  const parentTweet = tweet ? tweets[tweet.replyTo] : null

  return {
    authedUser,
    tweet : tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    : null
  }
}

export default connect(mapStateToProps)(Tweet);