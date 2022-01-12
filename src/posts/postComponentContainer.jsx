import {connect} from "react-redux";
import PostComponent from "./postComponent";
import {setPosts} from "../redux/setPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (board, thread, posts) => {
            dispatch(setPosts(board, thread, posts));
        }
    }
}

const PostComponentContainer = connect(mapStateToProps, mapDispatchToProps)(PostComponent);

export default PostComponentContainer;