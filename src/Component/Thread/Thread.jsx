import React from "react";
import threadCss from "./Thread.module.css"
import {Link} from "react-router-dom";
import {Route, Routes, useLocation} from "react-router";
import PostComponentContainer from "../../posts/postComponentContainer";

const Thread = (props) => {
    const currentLocation = useLocation();

    return (
        <>
            <div className={threadCss.post}>
                <div className={threadCss.post_info}>
                    <div className={threadCss.post_id}>
                        {props.id}
                    </div>
                    <div className={threadCss.post_time}>
                        {props.created_at}
                    </div>
                    <div className={threadCss.post_toThread}>
                        <Link to={currentLocation.pathname + '/' + props.id}>В тред</Link>
                    </div>
                </div>
                <div className={threadCss.post_text}>
                    {props.text}
                </div>
            </div>
        </>
    );
}

export default Thread;