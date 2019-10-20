import { receiveUsers} from "./users"
import { receiveTweets } from "./tweets"
import { getInitialData } from "../utils/api"
import { setAuthedUsers } from "./authedUsers"


const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
return (dispatch) => {
    return getInitialData()
        .then(({users, tweets, id}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUsers(AUTHED_ID));
        })
    }
}


