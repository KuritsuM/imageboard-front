import React, {useState} from "react";

const ModerationForm = (props) => {
    let [currentValue, setCurrentValue] = useState('deletePosts');

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    }

    const handleClick = (event) => {
        if (currentValue === 'deletePosts') props.deletePostsAction(props.checkboxes.posts);
    }

    return (
        <>
            <select value={currentValue} onChange={handleChange}>
                <option value={'deletePosts'}>Удалить пост(ы)</option>
                <option value={'deleteThread'}>Удалить тред(ы)</option>
            </select>
            <button onClick={handleClick}>Выполнить</button>
        </>
    )
}

export default ModerationForm;