export const SET_POSTS = 'SET_POSTS';

export const setPosts = (board, thread, posts) => {
    return {
        type: SET_POSTS,
        board: board,
        thread: thread,
        posts: posts,
    }
}