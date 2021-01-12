import * as types from "../types";

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null,
    required: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }

        case types.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }

        case types.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
            }

        case types.EDIT_POST:
            return {
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.payload.id){
                        
                        console.log("--", post)
                        return{
                            ...post,
                            ...action.payload,
                        }
                    }
                    console.log(post)
                    return post
                })
            }
        default:
            return state;
    }
}