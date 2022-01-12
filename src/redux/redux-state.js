import {combineReducers, createStore} from "redux";
import {threadReducer} from "./threadReducer";
import {postsReducer} from "./postsReducer";


const reducers = combineReducers({
    threads: threadReducer,
    posts: postsReducer,
});

const store = createStore(reducers);

export default store;