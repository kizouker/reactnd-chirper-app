import { receiveUsers} from "./users"
import { receiveTweets } from "./tweets"
import { getInitialData } from "./utils/_DATA.js"
import { setAuthedUsers } from "./authedUsers"


const AUTHED_ID = 'tylermcginnis';

let handleInitialData = () => {
return (dispatch) => {
    return getInitialData()
        .then(({users, tweets, id}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUsers(AUTHED_ID));
        })
    }
}


