import React, {useState} from "react";

const ModerationCheckbox = (props) => {
    let [id, setId] = useState(props.id);

    const handleChange = (event) => {
        if (event.target.checked) props.addChecked(id);
        else props.removeChecked(id);
    }

    console.log(props.id);
    console.log(props.type);

    return (
        <input type={"checkbox"} onChange={handleChange}/>
    )
}

export default ModerationCheckbox;