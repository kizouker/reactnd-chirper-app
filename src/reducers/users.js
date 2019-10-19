import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS : 
            return {
                ...state, // the current state spreaded - since we can't mutate 'state'
                ...action.users,
            }
        default : 
            return state
    }
    
}