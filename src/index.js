import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

const router2 =  
    <Provider store={store}>
        <Router>
            <App/>            
        </Router>
    </Provider>;

const router =  
<Provider store={store}>
     <App/>            
</Provider>;

ReactDOM.render(router, document.getElementById('root'));



// ReactDOM.render(<App />, document.getElementById('root'))