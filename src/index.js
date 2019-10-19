import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'


const store = createStore(
    reducer
)


const router =  
    <Provider store={store}>
        <Router>
            <App/>            
        </Router>
    </Provider>;

ReactDOM.render(router, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'))