import React from "react";
import {connect} from "react-redux";
import HighOrderModerationCheckbox from "./HighOrderModerationCheckbox";
import {formLogin} from "../../redux/loginReducer";

const mapStateToProps = (state) => {
    return {
        roles: state.login.roles
    }
}

export default connect(mapStateToProps, {
    formLogin
})(HighOrderModerationCheckbox)