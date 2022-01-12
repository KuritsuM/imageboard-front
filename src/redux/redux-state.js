import {applyMiddleware, combineReducers, createStore} from "redux";
import {threadReducer} from "./threadReducer";
import {postsReducer} from "./postsReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    threads: threadReducer,
    posts: postsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;