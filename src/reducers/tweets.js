import { RECEIVE_TWEETS } from '../actions/tweets'
import { CREATE_TWEET } from '../actions/tweets'

export default function tweets(state = {}, action){
    switch(action.type){
        case RECEIVE_TWEETS : 
            return {
                ...state, // the current state spreaded - since we can't mutate 'state'
                ...action.tweets, // the data, the tweets from the actionis spreaded as well
            }
        case CREATE_TWEET :
            return {
          ...state,
          ...action.tweets,
  
             //   ...action.tweets, 
               [action.tweet.id]: action.tweet,
            }
        default : 
            return state
    }
}

