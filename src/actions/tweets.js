export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const CREATE_TWEET = 'CREATE_TWEET';

export function receiveTweets(tweets){
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function createTweet(tweets, tweet){
    return {
        type: CREATE_TWEET,
        tweets, 
        tweet
    }
}