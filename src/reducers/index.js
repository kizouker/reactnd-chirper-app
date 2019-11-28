import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';

// start all of the reducers
// to init state ...
export default combineReducers({
    authedUser,
    users,
    tweets
});