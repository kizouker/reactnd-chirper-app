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
    this.props.dispatch(handleInitialData());
  }

  render() {
 //   console.log(this.props.store)
    return ( 
    <div>
      
      {/* {this.props.loading === true
        ? null
        : <DashBoardView/> } */}
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> <Link to="/new">New Tweet</Link> <Link to="/dashboard">DashBoard</Link>
        </nav>     
          <Route path="/">
            <Tweet />
          </Route>
          <Route path="/new">
            <NewTweet/>
          </Route>
          <Route path="/dashboard">
            <DashBoardView/>
          </Route>  
      </div>
   </Router> 
    </div>)
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);