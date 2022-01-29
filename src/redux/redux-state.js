import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {threadReducer} from "./threadReducer";
import {postsReducer} from "./postsReducer";
import {formReducer} from "./formReducer";
import {loginReducer} from "./loginReducer";
import thunk from "redux-thunk";
import {moderatorCheckboxesReducer} from "./moderatorCheckboxesReducer";


const reducers = combineReducers({
    threads: threadReducer,
    posts: postsReducer,
    forms: formReducer,
    login: loginReducer,
    moderCheckboxes: moderatorCheckboxesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;