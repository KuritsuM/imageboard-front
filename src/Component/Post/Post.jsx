import React from "react";
import postCss from './Post.module.css'
import FileHandler from "../media/Media";

const Post = (props) => {
    const handleClick = (event) => {
        console.log(event.target.textContent);

        props.addFormText(props.location, '>>>' + props.id.toString());
    }

    return (
        <>
            <div className={postCss.post}>
                <div className={postCss.post_info}>
                    <div className={postCss.post_id} onClick={handleClick}>
                        {props.id}
                    </div>
                    <div className={postCss.post_time}>
                        {props.created_at}
                    </div>
                </div>
                <div>
                    <FileHandler startFileName={props.file1} />
                </div>
                <div className={postCss.post_text}>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default Post;