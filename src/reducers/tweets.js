import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets(state = {}, action){
    switch(action.type){
        case RECEIVE_TWEETS : 
            return {
                ...state, // the current state spreaded - since we can't mutate 'state'
                ...action.tweets,
            }
        default : 
            return state
    }
    
}