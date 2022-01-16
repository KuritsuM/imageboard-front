import { connect } from "react-redux";
import ThreadComponent from "./threadComponent";
import {setPosts} from "../redux/setPosts";
import setThreads from "../redux/setThreads";
import {getThreadsThunkCreator, createThreadThunkCreator} from "../redux/threadReducer";
import {addTextToForm, formUpdate} from "../redux/formReducer";

const mapStateToProps = (state) => {
    return {
        board: state.threads,
        forms: state.forms
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (board, threads) => {
            console.log('вызвано');
            dispatch(setThreads(board, threads));
        },
        getThreadsThunkCreator: getThreadsThunkCreator
    }
}*/

const ThreadComponentContainer = connect(mapStateToProps, {
    setThreads, getThreadsThunkCreator, createThreadThunkCreator,
    addTextToForm, formUpdate
})(ThreadComponent);


export default ThreadComponentContainer;