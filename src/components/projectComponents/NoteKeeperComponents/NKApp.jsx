import React, { useState } from "react";
import NKHeader from "./NKHeader";
import NKNote from "./NKNote";
import NKCreateArea from "./NKCreateArea";

function App() {

  //constant created to maintain state of notes array
  const [notes, setNotes] = useState([]);

  //function called from CreateArea React Component when Add button is clicked
  function addNote(content) {
    
    //setNotes function called to maintain array of notes and return prev
    //notes as React renders additional new note
    setNotes((prevNotes) => {
      return [...prevNotes, content];
    });
  }

  //function called from Note React Component when Delete button is clicked
  function deleteNote(id) {

    //setNotes function here called to filter through all previous notes in
    //our notes array and return note that is not equal to ID of note clicked
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="nk-body">
      <NKHeader />
      <NKCreateArea add={addNote} />
      <div>
      
        {/* map method called here to loop through each note 
        in our note array and return each note and its content
         through the props passed into the Note component */}
        {notes.map((noteContent, index) => {
          return (
            <NKNote
              key={index}
              id={index}
              title={noteContent.title}
              info={noteContent.info}
              delete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
