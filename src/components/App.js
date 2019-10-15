import React from 'react'

import DashBoardView from './DashBoardView';
import NewTweetView from './NewTweetView'
import TweetView from './TweetView'


class App extends React.Component {
  render() {
    return (
      <div>
        <div class="header">
          <h1>Twitter clone - Chirper</h1>     
        </div>
        <div class="topnav">
          <h1>Menu</h1>     
        </div>

        
        
        <DashBoardView> </DashBoardView>
        <NewTweetView></NewTweetView>
        <TweetView></TweetView>
      </div>
    )
  }
}

export default App;