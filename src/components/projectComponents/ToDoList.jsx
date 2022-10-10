
// React and React-Bootstrap Dependencies
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// To Do List Container Import
import ToDoContainer from './ToDoListComponents/ToDoContainer';

function ToDoList({ name, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='proj-button'>

      <Button variant="secondary" onClick={handleShow} className="me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </Button>

      <Offcanvas className='tdl-canvas' show={show} onHide={handleClose} {...props}>

        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Please create your own to-do list below!</h3></Offcanvas.Title>
          
        </Offcanvas.Header>

        <Offcanvas.Body>
          <p>Note: Click items from the list to remove them.</p>
          <ToDoContainer></ToDoContainer>
        </Offcanvas.Body>

      </Offcanvas>

    </div>
  );
}


export default ToDoList;
