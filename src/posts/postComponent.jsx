import React, {useEffect} from "react";
import {useLocation} from "react-router";
import {useMatch} from "react-router";
import axios from "axios";
import Post from "../Component/Post/Post";
import {getPosts} from "../api/api";


const PostComponent = (props) => {
    console.log(props);
    const currentLocation = useLocation().pathname.split('/');
    const currentLocation2 = useLocation();

    let match = useMatch('/:board/:thread');

    useEffect(() => {
        /*getPosts(match.params.thread)
            .then(response => {
                console.log(response);
                let resp = response.data;
                props.setPosts(resp.board, resp.thread, resp.posts);
            })*/
        props.getPostsThunkCreator(match.params.board, match.params.thread);
    }, [currentLocation2.pathname]);

    let thread = null;
    let posts = [];

    console.log(thread);
    console.log(props.state);

    try {
        let thisThread = props.posts[match.params.board][match.params.thread];

        thread = <Post id={thisThread.id}
                       created_at={thisThread.created_at}
                       text={thisThread.text}/>;

        posts = thisThread.posts.map(post => {
            return <Post key={post.id} id={post.id}
                         text={post.text}
                         created_at={post.created_at}/>;
        });
    } catch (e) {
        //* ignore *
    }



    return (
        <>
            {thread}
            {posts}
        </>
    );
}

export default PostComponent;