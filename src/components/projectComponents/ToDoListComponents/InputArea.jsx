import React, { useState } from "react";

function InputArea(props) {
    
  const [input, setInput] = useState("");

  function handleInput(entry) {
    const newInput = entry.target.value;
    setInput(newInput);
  }

  return (
    <div>
      <input
        placeholder="Enter to-do item"
        className="input"
        onChange={handleInput}
        type="text"
        value={input}
      />
      <button
        onClick={() => {
            if (input !== "") {
                props.add(input);
                setInput("");
            }}} 
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;