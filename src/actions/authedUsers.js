export const AUTHED_USER = 'AUTHED_USER';

export function setAuthedUsers(id){
    return {
        type: AUTHED_USER,
        id
    }
}