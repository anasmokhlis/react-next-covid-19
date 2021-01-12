import * as types from "../types";
import axios from "axios";

export const fetchPosts = () => async dispatch => {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: types.GET_POSTS,
        payload: [
            {id: 0, name: '1sr post'},
            {id: 1, name: '2nd post'},
            {id: 2, name: '3rd post'},
        ]
        // payload: res.data
    })

}

export const addPost = (post) => async dispatch => {
    dispatch({
        type: types.ADD_POST,
        payload: post
    })
}

export const deletePost = (id) => async dispatch => {
    dispatch({
        type: types.DELETE_POST,
        payload: id
    })
}

export const editPost = (id) => async dispatch => {
    dispatch({
        type: types.EDIT_POST,
        payload: id
    })
}