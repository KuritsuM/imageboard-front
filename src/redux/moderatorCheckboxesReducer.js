
import {deletePosts} from "../api/api";

const CHECKED_POST = 'CHECKED_POST';
const UNCHECKED_POST = 'UNCHECKED_POST';
const REMOVE_ALL = 'REMOVE_ALL';

export const moderatorCheckboxesReducer = (state = { posts: [], threads: [] }, action) => {
    switch (action.type) {
        case CHECKED_POST: {
            let stateCopy = {...state};

            if (stateCopy.posts.indexOf(action.post) === -1) {
                stateCopy.posts.push(action.post)
            }

            return stateCopy;
        }
        case UNCHECKED_POST: {
            let stateCopy = {...state};

            let index = stateCopy.posts.indexOf(action.post);

            if (index !== -1) {
                stateCopy.posts.splice(index, 1);
            }

            return stateCopy;
        }
        case REMOVE_ALL: {
            let stateCopy = {...state};

            stateCopy.posts = [];
            stateCopy.threads = [];

            return stateCopy;
        }
    }

    return state;
}

const addCheckedPost = (postId) => {
    return {
        type: CHECKED_POST,
        post: postId
    }
}

const removeCheckedPost = (postId) => {
    return {
        type: UNCHECKED_POST,
        post: postId
    }
}

const removeAllCheckboxes = () => {
    return {
        type: REMOVE_ALL
    }
}

export const addCheckedThunkCreator = (postId) => {
    return dispatch => {
        dispatch(addCheckedPost(postId));
    }
}

export const removeCheckedThunkCreator = (postId) => {
    return dispatch => {
        dispatch(removeCheckedPost(postId));
    }
}

export const deletePostsAction = (posts) => {
    return dispatch => {
        posts.forEach((postId) => {
            deletePosts(postId)
                .then(r => {
                    console.log(r);
                })
        })

        dispatch(removeAllCheckboxes());
    }
}