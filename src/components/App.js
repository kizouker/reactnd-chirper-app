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
          <h3>Menu</h3>     
        </div>

        <div class="column side">
        <h2>Side</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas sit amet pretium urna. Vivamus venenatis velit 
          nec neque ultricies, eget elementum magna tristique. 
          Quisque vehicula, risus eget aliquam placerat, purus 
          leo tincidunt eros, eget luctus quam orci in velit. 
          Praesent scelerisque tortor sed accumsan convallis.  
          </p>   
        </div>

        <div class="column middle">
        <h2>middle</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas sit amet pretium urna. Vivamus venenatis velit 
          nec neque ultricies, eget elementum magna tristique. 
          Quisque vehicula, risus eget aliquam placerat, purus 
          leo tincidunt eros, eget luctus quam orci in velit. 
          Praesent scelerisque tortor sed accumsan convallis.  
          </p>   
        </div>

        <div class="column side">
        <h2>Side</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas sit amet pretium urna. Vivamus venenatis velit 
          nec neque ultricies, eget elementum magna tristique. 
          Quisque vehicula, risus eget aliquam placerat, purus 
          leo tincidunt eros, eget luctus quam orci in velit. 
          Praesent scelerisque tortor sed accumsan convallis.  
          </p>   
        </div>


        <div class="footer">
          <h3>footer</h3>
          <p>
          Quisque vehicula, risus eget aliquam placerat, purus 
          leo tincidunt eros, eget luctus quam orci in velit. 
          </p>
        </div>
       
       // <DashBoardView> </DashBoardView>
       // <NewTweetView></NewTweetView>
        <TweetView></TweetView>
        -->
      </div>
    )
  }
}

export default App;