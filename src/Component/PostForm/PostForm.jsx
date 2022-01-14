import React, {useEffect, useState} from "react";
import DragArea from "../dragArea/DragArea";
import {uploadFiles} from "../../api/api";

const PostForm = (props) => {

    let [formState, setFormState] = useState({
        submit: 'Отправить',
        name: '',
        theme: '',
        text: ''
    });
    let [dragFiles, setDragFiles] = useState([]);

    console.log(dragFiles);

    const handleSubmit = (event) => {
        event.preventDefault();

        let formForRequest = {...formState};

        uploadFiles(dragFiles)
            .then(response => {
                formForRequest['filenames'] = response.data.data.filenames;
                formForRequest['board'] = props.board;

                if (props.threadId !== undefined) {

                    formForRequest['threadId'] = props.threadId;
                    props.createPost(props.board, props.threadId, formForRequest);
                } else {
                    props.createThread(props.board, formForRequest);

                }
            });
    }

    const handleChange = (event) => {
        console.log(event);

        let stateCopy = {...formState};

        stateCopy[event.target.name] = event.target.value;

        setFormState(stateCopy);
    }

    return (
        <>
            <form method={"POST"} onSubmit={ handleSubmit }>
                <input name={'name'} onChange={ handleChange } value={formState.name} />
                <input name={'theme'} onChange={ handleChange } value={formState.theme} />
                <textarea name={'text'} onChange={ handleChange } value={formState.text} />
                <DragArea setFiles={ setDragFiles }/>
                <input type={"submit"} value={formState.submit}/>
            </form>
        </>
    );
}

export default PostForm;