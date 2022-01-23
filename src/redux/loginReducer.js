import AuthService from "../services/AuthService";

const LOGIN_USER = 'LOGIN_USER';
const UNLOGIN_USER = 'UNLOGIN_USER';

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            let stateCopy = {...state};

            stateCopy.username = action.username;

            return stateCopy;
        }
        case UNLOGIN_USER: {
            return {};
        }
    }
    return state;
}

export const formLogin = (username) => {
    return {
        type: LOGIN_USER,
        username: username,
    }
}

export const unloginUser = () => {
    return {
        type: UNLOGIN_USER
    }
}

export const loginThunkCreator = (username, password) => {
    return (dispatch) => {
        AuthService.login(username,password)
            .then(response => {
                dispatch(formLogin(username));
            })
    }
}

export const unloginThunkCreator = () => {
    return (dispatch) => {
        dispatch(unloginUser());
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token')
    }
}