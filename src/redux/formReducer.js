import {DEFAULT_FORM_VALUE} from "../Component/PostForm/PostForm";

const FORM_UPDATE = 'FORM_UPDATE';
const ADD_TEXT = 'ADD_TEXT';

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case FORM_UPDATE: {
            let stateCopy = {...state};

            stateCopy[action.location] = action.form;

            return stateCopy;
        }
        case ADD_TEXT: {
            let stateCopy = {...state};

            if (stateCopy[action.location] === undefined) {
                stateCopy[action.location] = DEFAULT_FORM_VALUE;
                stateCopy[action.location].text = action.text;
            }
            else {
                stateCopy[action.location].text = ''.concat(stateCopy[action.location].text, action.text)
            }


            return stateCopy;
        }
    }
    return state;
}

export const formUpdate = (location, form) => {
    return {
        type: FORM_UPDATE,
        form: form,
        location: location
    }
}

export const addTextToForm = (location, text) => {
    return {
        type: ADD_TEXT,
        text: text,
        location: location
    }
}