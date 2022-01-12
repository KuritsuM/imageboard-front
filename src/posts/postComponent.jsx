import React, {useEffect} from "react";
import {useLocation} from "react-router";
import axios from "axios";
import Post from "../Component/Post/Post";

const PostComponent = (props) => {
    console.log(props);
    const currentLocation = useLocation().pathname.split('/');

    console.log(currentLocation);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/' + currentLocation[2])
            .then(response => {
                console.log(response);
                let resp = response.data.data;
                props.setPosts(resp.board, resp.thread, resp.posts);
            })
            .catch(e => {
            console.log(e);
        })
    }, [null]);

    console.log(props);

    let thread = null;
    let posts = [];
    if (props.posts[currentLocation[1]] !== undefined) {
        let thisThread = props.posts[currentLocation[1]][currentLocation[2]];

        thread = <Post id={thisThread.id}
                           created_at={thisThread.created_at}
                            text={thisThread.text}/>;

        posts = thisThread.posts.map(post => {
            return <Post key={post.id} id={post.id}
                         text={post.text}
                         created_at={post.created_at}/>;
        });
    }
    console.log(thread);

    return (
        <>
            {thread}
            {posts}
        </>
    );
}

export default PostComponent;