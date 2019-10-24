import React, { Component } from 'react'
import Tweet from './Tweet';
import TweetList from './TweetList';
import Navigation from './Navigation';
import { connect } from 'react-redux'


class DashBoardView extends Component {
  render() {
    console.log(this.props.store.tweets)
    return (
      <div>
        <h3 className='center'> Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              <div>
                TWEET id: {id}
              </div>
              <Tweet id={id}/>
            </li>
          ))}
          </ul>
     DashBoardView
      </div>
    )
  }
}

export default connect(mapStateToProps)(DashBoardView);

function mapStateToProps( {tweets} ){
  return { tweetIds: Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
  };
