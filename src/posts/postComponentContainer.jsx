import {connect} from "react-redux";
import PostComponent from "./postComponent";
import {setPosts} from "../redux/setPosts";
import {getPostsThunkCreator} from "../redux/postsReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        state: state
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (board, thread, posts) => {
            dispatch(setPosts(board, thread, posts));
        },
        getPostsThunkCreator: getPostsThunkCreator
    }
}*/

const PostComponentContainer = connect(mapStateToProps, {
    setPosts, getPostsThunkCreator
})(PostComponent);

export default PostComponentContainer;