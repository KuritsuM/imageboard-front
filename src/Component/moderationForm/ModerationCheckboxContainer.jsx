import React from "react";
import {connect} from "react-redux";
import ModerationCheckbox from "./ModerationCheckbox";
import {addCheckedThunkCreator, removeCheckedThunkCreator} from "../../redux/moderatorCheckboxesReducer";

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {
    removeChecked: removeCheckedThunkCreator,
    addChecked: addCheckedThunkCreator
})(ModerationCheckbox);