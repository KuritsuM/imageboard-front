import setThreads, {SET_THREADS} from "./setThreads";
import {createThread, getThreads} from "../api/api";

export const ADD_THREAD = 'ADD_THREAD';

export const threadReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_THREADS: {
            let stateCopy = {...state};

            stateCopy[action.board] = action.posts;

            return stateCopy;
        }
        case ADD_THREAD: {
            let stateCopy = {...state};

            stateCopy[action.board] = [...stateCopy[action.board]];
            stateCopy[action.board].push(action.thread);

            return stateCopy;
        }
    }
    return state;
}

export const addThread = (board, thread) => {
    return {
        type: ADD_THREAD,
        board: board,
        thread: thread
    }
}

export const getThreadsThunkCreator = (board) => {
    return dispatch => {
        getThreads(board).then(data => {
            dispatch(setThreads(board, data.data.threads))
        });
    }
}

export const createThreadThunkCreator = (board, thread) => {
    return dispatch => {
        createThread(thread).then(response => {
            dispatch(addThread(board, response.data))
        });
    }
}
