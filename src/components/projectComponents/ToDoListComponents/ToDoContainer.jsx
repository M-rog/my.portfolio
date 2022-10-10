
// React and UseState Import
import React, { useState } from "react";

// ToDoContainer Children Imports
import InputArea from "./InputArea";
import ListItems from "./ListItems";

function ToDoContainer() {

    // UseState hook initialized with empty array
  const [items, setItems] = useState([]);

    // Function called when item is added to the list
  function addItem(input) {
    setItems((prevValue) => {
      return [...prevValue, input];
    });
  }

    // Function called when item is deleted from the list
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

    // Container returned 
  return (
    <div className="todolist-container-div">
      <div>
        <InputArea add={addItem} />
      </div>
      <div>
        <ul className="list">
          {items.map((item, index) => {
            return (
              <ListItems
                onClicked={deleteItem}
                key={index}
                id={index}
                text={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoContainer;
