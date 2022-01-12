import { connect } from "react-redux";
import ThreadComponent from "./threadComponent";
import setThreads from "../redux/setThreads";

const mapStateToProps = (state) => {
    return {
        board: state.threads
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (board, threads) => {
            dispatch(setThreads(board, threads))
        }
    }
}

const ThreadComponentContainer = connect(mapStateToProps, mapDispatchToProps)(ThreadComponent);

export default ThreadComponentContainer;