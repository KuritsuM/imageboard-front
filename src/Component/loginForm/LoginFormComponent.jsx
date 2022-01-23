import React from "react";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {loginThunkCreator} from "../../redux/loginReducer";

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const LoginFormComponent = connect(mapStateToProps, {
    loginThunkCreator
})(LoginForm);

export default LoginFormComponent;