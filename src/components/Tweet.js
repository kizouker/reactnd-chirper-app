import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render() {
    // const { tweet } = this.props
    // const { id, timestamp, author } = this.props

    if (this.props.tweet === null) {
      return <p>This Tweet doesn't existd</p>
    }
    return (
      <div className="tweet">
       Tweet
       <div> T id: {this.props.tweet.id} </div>
       <div> T author: {this.props.tweet.author} </div>
       <div> T timestamp: {this.props.tweet.timestamp} </div>
       <div> reply button</div>
       <div> like button  </div> */}
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
// function mapStateToProps({authedUser, users, tweets}, {id}){
//   const tweet = tweets[id]
  

//   return {
//     authedUser,
//     tweet : formatTweet(tweet, users[tweet.author], authedUser)
//   }

// argumentet här är de som skickas in till reducern?


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