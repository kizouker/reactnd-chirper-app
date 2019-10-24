import React from 'react'

import DashBoardView from './DashBoardView';
import NewTweetView from './NewTweetView'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'


class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData)
  }

  render() {
    console.log(this.props.store)
    return ( 
    <div>
      {this.props.loading === true
        ? null
        : <DashBoardView tweets={this.props.store.tweets}/> }
    {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Tweet</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </nav>
 
       
          <Route path="/">
            <Tweet />
          </Route>

          <Route path="/new">
            <NewTweet/>
          </Route>
          <Route path="/dashboard">
          </Route>  

    
      </div>
    </Router> */}
 
    </div>)
  
  }
}

function mapStateToProps({ authedUser }) {

  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);