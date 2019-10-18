import { receiveUsers} from "./users"
import { receiveTweets } from "./tweets"
import { getInitialData } from "./utils/_DATA.js"


let handleInitialData = () => {
return (dispatch) => {
    return getInitialData()
        .then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
        })
    }
}


