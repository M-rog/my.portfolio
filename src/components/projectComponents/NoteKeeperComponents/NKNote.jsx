import React from "react";

function NKNote(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      <button
        type="button"
        onClick={() => {
          props.delete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NKNote;