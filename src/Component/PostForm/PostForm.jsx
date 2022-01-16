import React, {useEffect, useState} from "react";
import DragArea from "../dragArea/DragArea";
import {uploadFiles} from "../../api/api";
import {formUpdate} from "../../redux/formReducer";

export const DEFAULT_FORM_VALUE = {
    submit: 'Отправить',
    name: '',
    theme: '',
    text: ''
};

const PostForm = (props) => {

    useEffect(() => {
        console.log('nothing');
    }, [props.formState]);

    let [dragFiles, setDragFiles] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        let formForRequest = {...props.formState[props.location]};

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

                formUpdate(props.location, DEFAULT_FORM_VALUE);
            });
    }

    const handleChange = (event) => {
        let stateCopy = {...props.formState[props.location]};

        if (Object.keys(stateCopy).length === 0) {
            stateCopy = DEFAULT_FORM_VALUE;
        }

        stateCopy[event.target.name] = event.target.value;

        props.formUpdate(props.location, stateCopy);
    }

    let isFormInitialized = props.formState[props.location] === undefined;

    return (
        <>
            <form method={"POST"} onSubmit={ handleSubmit }>
                <input name={'name'} onChange={ handleChange } value={ isFormInitialized ? '' : props.formState[props.location].name } />
                <input name={'theme'} onChange={ handleChange } value={ isFormInitialized ? '' : props.formState[props.location].theme} />
                <textarea name={'text'} onChange={ handleChange } value={ isFormInitialized ? '' : props.formState[props.location].text} />
                <DragArea setFiles={ setDragFiles }/>
                <input type={"submit"} value={ isFormInitialized ? '' : props.formState[props.location].submit}/>
            </form>
        </>
    );
}

export default PostForm;