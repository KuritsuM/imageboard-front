import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useMatch} from "react-router";
import axios from "axios";
import Post from "../Component/Post/Post";
import {getPosts} from "../api/api";
import PostForm from "../Component/PostForm/PostForm";
import Thread from "../Component/Thread/Thread";
import ModerationFormComponent from "../Component/moderationForm/ModerationFormComponent";
const PostComponent = (props) => {
    console.log(props);
    const currentLocation = useLocation().pathname.split('/');
    const currentLocation2 = useLocation();

    let match = useMatch('/:board/:thread');

    useEffect(() => {
        props.getPostsThunkCreator(match.params.board, match.params.thread);
    }, [currentLocation2.pathname, props.login.isAuth]);
    let thread = null;

    let posts = [];

    try {
        let thisThread = props.posts[match.params.board][match.params.thread];

        thread = <Thread id={thisThread.id}
                       created_at={thisThread.created_at}
                       text={thisThread.text}
                       file1={thisThread.file1}
                         location={match.params.thread}
                         addFormText={props.addTextToForm}
                       />;

        posts = thisThread.posts.map(post => {
            return <Post key={post.id} id={post.id}
                         text={post.text}
                         created_at={post.created_at}
                         file1={post.file1}
                         location={match.params.thread}
                         addFormText={props.addTextToForm}/>;
        });
    } catch (e) {
        //* ignore *
    }

    return (
        <>
            <ModerationFormComponent />
            <PostForm board={match.params.board}
                      threadId={match.params.thread}
                      createPost={props.createPostThunkCreator}
                      formUpdate={props.formUpdate}
                      location={match.params.thread}
                      formState={props.forms}/>
            {thread}
            {posts}
        </>
    );
}

export default PostComponent;