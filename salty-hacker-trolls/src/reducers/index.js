import {
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    SET_USER_ID,
    ADD_FAVORITE
} from '../actions'

const initialState = {
    comments: [
        {
        id: 1, 
        comment_uuid: 342184384, 
        troll_name: "cable_corey_cracker1784", 
        is_salty: 1, 
        comment_text: "random text here goes one two three four five"
        } 
    ],
    isLoading: false,
    error: '',
    userID: 0,
    favorites: []
}

export const reducer = (state = initialState, {type, payload}) => {
    
    switch(type) {
        case FETCH_COMMENTS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: payload,
                isLoading: false,
                error: ''
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case SET_USER_ID:
            return {
                ...state,
                userID: payload
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }
        
        default:
            return state;
    }
}