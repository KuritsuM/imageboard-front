import AuthService from "../services/AuthService";
import {getUser} from "../api/api";

const LOGIN_USER = 'LOGIN_USER';
const UNLOGIN_USER = 'UNLOGIN_USER';

export const loginReducer = (state = { roles: [], isAuth: false }, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            let stateCopy = {...state};

            stateCopy.username = action.username;
            stateCopy.roles = action?.roles;
            stateCopy.isAuth = true;

            return stateCopy;
        }
        case UNLOGIN_USER: {
            return { roles: [], isAuth: false };
        }
    }
    return state;
}

export const formLogin = (username, roles) => {
    return {
        type: LOGIN_USER,
        username: username,
        roles: roles
    }
}

export const unloginUser = () => {
    return {
        type: UNLOGIN_USER
    }
}

/*
export const reloginThunkCreator = () => {
    return dispatch => {
        getUser()
            .then(response => {
                console.log(response);
            })
    }
}
*/

export const loginThunkCreator = (username, password) => {
    return (dispatch) => {
        AuthService.login(username,password)
            .then(response => {
                console.log('thinkCreator');
                console.log(response)
                dispatch(formLogin(username, response?.data?.user?.roles));
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