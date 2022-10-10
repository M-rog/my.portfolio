
// React and React-Bootstrap Dependencies
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Note Keeper App Import
import NKApp from './NoteKeeperComponents/NKApp';


function NoteKeeper({ name, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='proj-button'>
      <Button variant="secondary" onClick={handleShow} className="me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>
      </Button>

      <Offcanvas className='nk-canvas' placement={'bottom'} show={show} onHide={handleClose} {...props} >

        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Note Keeper App!</h3></Offcanvas.Title>
          
        </Offcanvas.Header>

        <Offcanvas.Body>
          <NKApp></NKApp>
        </Offcanvas.Body>

      </Offcanvas>
    </div>
  );
}

export default NoteKeeper;