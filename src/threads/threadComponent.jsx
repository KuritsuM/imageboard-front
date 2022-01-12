import React, {useEffect} from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Thread from "../Component/Thread/Thread";

const ThreadComponent = (props) => {
    let threads = [];
    console.log(props);
    const currentLocation = useLocation();

    console.log(useLocation());

    useEffect(() => {
        axios.get('http://localhost:8000/api/threads' + currentLocation.pathname)
            .then(response => {
                console.log(response);
                props.setPosts(currentLocation.pathname, response.data.data.threads);
            })
    }, [null])

    //console.log(props.threads.threads[currentLocation]);
    console.log(props.board[currentLocation]);

    console.log('called');

    for (let thread in props.board[currentLocation.pathname]) {
        threads.push(
            <Thread key={props.board[currentLocation.pathname][thread].id}
                    id={props.board[currentLocation.pathname][thread].id}
                    created_at={props.board[currentLocation.pathname][thread].created_at}
                    text={props.board[currentLocation.pathname][thread].text}
            />
        );
    }


    console.log(props.board['/po']);

    return (
        <>
            {threads}
        </>
    )
}

export default ThreadComponent;