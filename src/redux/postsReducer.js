import {SET_POSTS, setPosts} from "./setPosts";
import {createPost, getPosts} from "../api/api";

const ADD_POST = 'ADD_POST';

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

        case ADD_POST: {
            let stateCopy = {...state};

            stateCopy[action.board][action.thread].posts = [...stateCopy[action.board][action.thread].posts];
            stateCopy[action.board][action.thread].posts.push(action.post);

            return stateCopy;
        }
    }
    return state;
}

export const addPost = (board, thread, post) => {
    return {
        type: ADD_POST,
        board: board,
        thread: thread,
        post: post
    }
};

export const getPostsThunkCreator = (board, threadId) => {
    return dispatch => {
        getPosts(threadId).then(posts => {
            dispatch(setPosts(board, threadId, posts.data));
        });
    }
}

export const createPostThunkCreator = (board, threadId, post) => {
    return dispatch => {
        createPost(post).then(newPost => {
            dispatch(addPost(board, threadId, newPost.data))
        });
    }
}
