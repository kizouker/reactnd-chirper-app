import { AUTHED_USER } from '../actions/authedUsers'

export default function authedUsers(state = null, action){
    switch(action.type){
        case AUTHED_USER: 
            return action.id
        default : 
            return state
    }
}