import React, {useEffect} from "react";
import {useMatch} from "react-router";
import ModeratorService from "../../services/ModeratorService";
import ModerationCheckboxContainer from "./ModerationCheckboxContainer";
import {getUser} from "../../api/api";

const HighOrderModerationCheckbox = (props) => {
    let match = useMatch('/:board/:thread');

    /*useEffect(() => {
       getUser()
           .then(r => {
               props.formLogin();
           })
    });*/

    if (ModeratorService.isUserBoardModerator(props.roles, match.params.board))
    {
        return (
            <ModerationCheckboxContainer id={props.id} type={props.type}/>
        )
    }
    else return null;
}

export default HighOrderModerationCheckbox;