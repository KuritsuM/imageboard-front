export const SET_THREADS = 'SET_THREADS';

const setThreads = (board, posts) => {
    return {
        type: SET_THREADS,
        board: board,
        posts: posts
    }
}

export default setThreads;