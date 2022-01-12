import {SET_THREADS} from "./setThreads";


export const threadReducer = (state = {
}, action) => {
    switch (action.type) {
        case SET_THREADS: {
            let stateCopy = {...state};
            stateCopy[action.board] = action.posts;
            return stateCopy;
        }
    }
    return state;
}