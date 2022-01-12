import { connect } from "react-redux";
import ThreadComponent from "./threadComponent";
import {setPosts} from "../redux/setPosts";
import setThreads from "../redux/setThreads";
import {getThreadsThunkCreator} from "../redux/threadReducer";

const mapStateToProps = (state) => {
    return {
        board: state.threads
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
    setThreads, getThreadsThunkCreator
})(ThreadComponent);


export default ThreadComponentContainer;