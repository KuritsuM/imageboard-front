import {SET_POSTS} from "./setPosts";

export const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_POSTS: {
            let stateCopy = {...state};

            stateCopy[action.board] = {};
            stateCopy[action.board][action.thread.id] = action.thread;
            stateCopy[action.board][action.thread.id]['posts'] = action.posts;

            return stateCopy;
        }
    }
    return state;
}
