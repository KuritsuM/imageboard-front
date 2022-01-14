import React, {useState} from "react";
import dragAreaCss from './DragArea.module.css'

const DragArea = (props) => {
    let [drag, setDrag] = useState(true);

    const handleDrag = (event) => {
        event.preventDefault();
        setDrag(false);
    }

    const handleLeaveDrag = (event) => {
        event.preventDefault();
        setDrag(true);
    }

    const handleDrop = (event) => {
        event.preventDefault();
        let files = [...event.dataTransfer.files];

        props.setFiles(files);

        console.log(files);
        setDrag(true);
    }

    return(
      <>
          {
              drag ?
                  <div className={dragAreaCss.dragarea}
                      onDragStart={ handleDrag }
                      onDragLeave={ handleDrag }
                      onDragOver={ handleDrag }
                  >Перенесите сюда файлы</div>
                  :
                  <div  className={dragAreaCss.dragarea}
                    onDragStart={ handleDrag }
                    onDragLeave={ handleLeaveDrag }
                    onDragOver={ handleDrag }
                    onDrop={ handleDrop }
                  >Отпустите файлы</div>
          }
      </>
    );
}

export default DragArea;