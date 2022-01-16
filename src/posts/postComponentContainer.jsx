import {connect} from "react-redux";
import PostComponent from "./postComponent";
import {setPosts} from "../redux/setPosts";
import {getPostsThunkCreator} from "../redux/postsReducer";
import {createPostThunkCreator} from "../redux/postsReducer";
import {formUpdate, addTextToForm} from "../redux/formReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        forms: state.forms,
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
    setPosts, getPostsThunkCreator,
    createPostThunkCreator, formUpdate, addTextToForm
})(PostComponent);

export default PostComponentContainer;