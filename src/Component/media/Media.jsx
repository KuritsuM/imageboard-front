import React from "react";

const FileHandler = (props) => {

    const handleClick = (event) => {
        if (event.target.paused) {
            event.target.play();
        }
        else event.target.pause();
    }

    if (props.startFileName !== undefined) {
        if (props.startFileName !== null) {
            let filename = props.startFileName.split('.');

            if (filename[filename.length - 1] === 'webm') {
                return (
                    <video width={'240px'} height={'240px'}
                           onClick={handleClick}>
                        <source src={`http://localhost:8000/file/${props.startFileName}`} type={'video/webm'}/>
                    </video>
                )
            } else {
                return (
                    <img src={`http://localhost:8000/file/${props.startFileName}`} alt={props.startFileName}/>
                )
            }
        }
    }

    return null;
}

export default FileHandler;