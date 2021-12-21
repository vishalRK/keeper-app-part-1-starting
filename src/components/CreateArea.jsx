import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab  from "@material-ui/core/Fab";
import Zoom  from "@material-ui/core/Zoom";


function CreateArea(props) {
    const [isExpand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
            
        });
       
        
    }
    function expanded()
    {
        setExpand(true);
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    
   


    return (
        <div>
            <form className="create-note">
            {isExpand && 
                <input  name="title" onChange={handleChange} values={note.title} placeholder="title" />}

           <textarea onClick={expanded} name="content" onChange={handleChange} values={note.content} placeholder="content" rows={isExpand ? "3" : "1"} />
                <Zoom in="true">
                 <Fab size="small" onClick={submitNote}>
                    <AddIcon/>
                 </Fab>
             </Zoom>
        
               
            </form>
        </div>
    );
}

export default CreateArea;