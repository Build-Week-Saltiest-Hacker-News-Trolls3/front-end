import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchComments = () => dispatch => {
    dispatch({ type: FETCH_COMMENTS_START })
    axiosWithAuth()
        .get('/api/trolls/comments')
        .then( res => {
            console.log('FetchComments Res', res)
            dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: res.data });
        })
        .catch( err => {
            console.log('error', err);
            dispatch({ type: FETCH_COMMENTS_FAILURE, payload: err.response })
        });
}

export const SET_USER_ID = 'SET_USER_ID';

export const setUserID = (userID) => {
    console.log('setUserID action called')
    return { type: SET_USER_ID, payload: userID}
}

