import React, {useEffect} from "react";
import {useLocation, useMatch} from "react-router";
import axios from "axios";
import Thread from "../Component/Thread/Thread";
import {getThreads} from "../api/api";

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
            />
        );
    }

    return (
        <>
            {threads}
        </>
    )
}

export default ThreadComponent;