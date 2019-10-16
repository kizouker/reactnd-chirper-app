import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom';

const router =  <Router>
                    <App/>     
                </Router>;

ReactDOM.render(router, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'))