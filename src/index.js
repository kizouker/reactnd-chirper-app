import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'

// init the store - start all reducers and all middleware
const store = createStore(reducer, middleware)

// Use provider to be able to pass the store to all children
// Use router for links
const router =  
    <Provider store={store}>
        <Router>
            <App/>            
        </Router>
    </Provider>;

ReactDOM.render(router, document.getElementById('root'));