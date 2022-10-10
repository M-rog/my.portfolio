import React, { useState } from "react";

function NKCreateArea(props) {
  //const created to maintain state of our keeper note input object
  const [content, setContent] = useState({
    title: "",
    info: ""
  });

  //function called when title or content areas take an input
  //typed into the create note area
  function handleChange(event) {

    //const deconstructs our event which is taken in from the onChange attribute
    const { name, value } = event.target;

    //setContent function called to return previous value typed into either
    //the title or the info content area, depending on where typed, dictated by name attribute
    setContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={content.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="info"
          value={content.info}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="button"
          
          //button onClick attribute calls the add prop function from our app component
          //add prop returns our content maintained by react hook used above
          //after button clicked, setContent function clears note content object strings
          onClick={() => {
            props.add(content);
            setContent({
              title: "",
              info: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NKCreateArea;
