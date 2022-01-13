import React, {useEffect, useState} from "react";

const PostForm = (props) => {

    let [formState, setFormState] = useState({
        submit: 'Отправить',
        name: '',
        theme: '',
        text: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        let formForRequest = {...formState};
        formForRequest['board'] = props.board;
        formForRequest['threadId'] = props.threadId;

        props.createPost(props.board, props.threadId, formForRequest);
    }

    const handleChange = (event) => {
        console.log(event);

        let stateCopy = {...formState};

        stateCopy[event.target.name] = event.target.value;

        setFormState(stateCopy);
        console.log(formState);
    }

    return (
        <>
            <form method={"POST"} onSubmit={ handleSubmit }>
                <input name={'name'} onChange={ handleChange } value={formState.name} />
                <input name={'theme'} onChange={ handleChange } value={formState.theme} />
                <textarea name={'text'} onChange={ handleChange } value={formState.text} />
                <input type={"submit"} value={formState.submit}/>
            </form>
        </>
    );
}

export default PostForm;