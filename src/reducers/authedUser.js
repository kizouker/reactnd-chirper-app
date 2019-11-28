import { AUTHED_USER } from '../actions/authedUsers'

//the state is run in order from combineReducers - state is set to null
export default function authedUsers(state = null, action){
    switch(action.type){
        case AUTHED_USER: 
            return action.id
        default : 
            return state
    }
}