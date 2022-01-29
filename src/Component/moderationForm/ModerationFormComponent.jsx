import React from "react";
import {connect} from "react-redux";
import ModerationForm from "./ModerationForm";
import {deletePostsAction} from "../../redux/moderatorCheckboxesReducer";

const mapStateToProps = (state) => {
    return {
        checkboxes: state.moderCheckboxes
    }
}

export default connect(mapStateToProps, {
    deletePostsAction
})(ModerationForm);