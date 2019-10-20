import React, { Component } from 'react'
import Tweet from './Tweet';
import TweetList from './TweetList';
import Navigation from './Navigation';

class DashBoardView extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
     DashBoardView
      </div>
    )
  }
}

export default DashBoardView;

function mapStateToProps( {tweets} ){
  return { tweetIds: Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
  };
