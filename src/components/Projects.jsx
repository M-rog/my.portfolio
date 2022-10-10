import React from "react";

import ToDoList from "./projectComponents/ToDoList";
import SimonGame from "./projectComponents/SimonGame";
import NoteKeeper from "./projectComponents/NoteKeeper";

function Projects() {
    return(
    <div>
        <section id="Projects">

            <div className="nav-intro">

                <h1><u>Sample Projects</u></h1>

                    <div className="container proj-container">

                        <div className="row justify-content-center proj-button">
                    
                            <div className="row col-lg-3 col-md-4 col-sm-4 proj-div">
                                <div className="col-lg-6">
                                    <h4>To-Do List Project</h4>
                                </div>
                                <div className="col-lg-6 proj-button">
                                    <ToDoList></ToDoList>
                                </div>
                            </div>

                        </div>


                        <hr className="proj-hr"></hr>

                        <div className="row justify-content-center proj-button">
                    
                            <div className="row col-lg-3 col-md-4 col-sm-4 proj-div">
                                <div className="col-lg-6">
                                    <h4>Simon Game</h4>
                                </div>
                                <div className="col-lg-6 proj-button">
                                    <SimonGame></SimonGame>
                                </div>
                            </div>

                        </div>

                        <hr className="proj-hr"></hr>

                        <div className="row justify-content-center proj-button">
                    
                            <div className="row col-lg-3 col-md-4 col-sm-4 proj-div">
                                <div className="col-lg-6">
                                    <h4>Note Keeper App</h4>
                                </div>
                                <div className="col-lg-6 proj-button">
                                    <NoteKeeper></NoteKeeper>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    </div>)
}

export default Projects;