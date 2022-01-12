import setThreads, {SET_THREADS} from "./setThreads";
import {getThreads} from "../api/api";


export const threadReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_THREADS: {
            let stateCopy = {...state};
            stateCopy[action.board] = action.posts;
            return stateCopy;
        }
    }
    return state;
}

export const getThreadsThunkCreator = (board) => {
    return dispatch => {
        getThreads(board).then(data => {
            dispatch(setThreads(board, data.data.threads))
        });
    }
}
