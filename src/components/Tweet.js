import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render() {
    const { tweet } = this.props

    if (tweet === null) {
      return <p>This Tweet doesn't existd</p>
    }
    return (
      <div className="tweet">
       Tweet
       {console.log(this.props.store.tweets)}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, tweets}, {id}){
  const tweet = tweets[id]

  return {
    authedUser,
    tweet : formatTweet(tweet, users[tweet.author], authedUser)
  }
}

function mapStateToProps2({authedUser, users, tweets}, {id}){
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyTo] : null

  return {
    authedUser,
    tweet : tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    : null
  }
}




export default connect(mapStateToProps2)(Tweet);