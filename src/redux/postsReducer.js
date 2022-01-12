import {SET_POSTS, setPosts} from "./setPosts";
import {getPosts} from "../api/api";

export const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_POSTS: {
            let stateCopy = {...state};

            console.log('тут1');
            console.log(stateCopy[action.board]);
            console.log('тут2');
            console.log(state[action.board]);

            if (stateCopy[action.board] !== undefined) {
                stateCopy[action.board] = {...state[action.board]};
                console.log('тут');
                console.log(stateCopy[action.board] = {...state[action.board]});
            } else {
                stateCopy[action.board] = {};
            }
            stateCopy[action.board][action.thread] = action.posts.thread;
            stateCopy[action.board][action.thread]['posts'] = action.posts.posts;// = action.posts.posts;

            return stateCopy;
        }
    }
    return state;
}

export const getPostsThunkCreator = (board, thread) => {
    return dispatch => {
        getPosts(thread).then(posts => {
            dispatch(setPosts(board, thread, posts.data));
        });
    }
}
