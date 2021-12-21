import React, { useState } from "react";
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(note)
    {
        setNotes((prevNote) => {
            return [...prevNote, note]
            
        })
       
    }
    function deleteNote(id)
    {
        setNotes(prevNote => {
            return prevNote.filter((newNote, index) => {
                return index !== id ;
            })
        })
    }
    return(
    <div>
        <Header/>
        <CreateArea
            onAdd={addNote}
        />
        {notes.map((newNote, index) => {
            return(
                <Note
            id = {index}
            key = {index}    
            title = {newNote.title}
            content = {newNote.content}
            onDelete= {deleteNote}
            />
            ) ; 
         })}

        <Footer/>
       
    </div>
   
       
    )
}

export default App;