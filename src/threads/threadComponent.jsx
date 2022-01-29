import React, {useEffect} from "react";
import {useLocation, useMatch} from "react-router";
import axios from "axios";
import Thread from "../Component/Thread/Thread";
import {getThreads} from "../api/api";
import PostForm from "../Component/PostForm/PostForm";
import ModerationFormComponent from "../Component/moderationForm/ModerationFormComponent";

const ThreadComponent = (props) => {
    let threads = [];
    const currentLocation = useMatch('/:board').params.board;



    useEffect(() => {
        props.getThreadsThunkCreator(currentLocation);
    }, [currentLocation]);

    console.log(props);

    for (let thread in props.board[currentLocation]) {
        threads.push(
            <Thread key={props.board[currentLocation][thread].id}
                    id={props.board[currentLocation][thread].id}
                    created_at={props.board[currentLocation][thread].created_at}
                    text={props.board[currentLocation][thread].text}
                    file1={props.board[currentLocation][thread].file1}
                    location={currentLocation}
                    addFormText={props.addTextToForm}
            />
        );
    }

    return (
        <>
            <ModerationFormComponent />
            <PostForm board={currentLocation}
                      createThread={props.createThreadThunkCreator}
                      location={currentLocation}
                      formState={props.forms}
                      formUpdate={props.formUpdate}/>
            {threads}
        </>
    )
}

export default ThreadComponent;