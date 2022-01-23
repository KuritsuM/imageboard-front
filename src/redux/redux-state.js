import {applyMiddleware, combineReducers, createStore} from "redux";
import {threadReducer} from "./threadReducer";
import {postsReducer} from "./postsReducer";
import {formReducer} from "./formReducer";
import {loginReducer} from "./loginReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    threads: threadReducer,
    posts: postsReducer,
    forms: formReducer,
    login: loginReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;