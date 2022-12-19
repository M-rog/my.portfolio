import React from "react";
import { useState } from "react";


function SimonGameContainer() {


    const [start, handleStart] = useState(false);

    const [level, handleLevel] = useState(0);

    const [gameArray, handleGameArray] = useState([]);
    const [userArray, handleUserArray] = useState([]);

    const colors =["green" , "red" , "yellow" , "blue"];


    // const [color, handleColor] = useState();


    
    function startGame() {
        handleStart(true);
        nextSequence(); 
    }


    function nextSequence() {
        handleUserArray([]);
        handleLevel(+1);
        let rngColor = colors[Math.floor(Math.random()*4)];
        handleGameArray((prevValues) => [...prevValues, rngColor]);
    }


    function userSelection(e) {
        
        // console.log(e.target.id);
        let userChosenColor = e.target.id;
        console.log(userChosenColor);

        // let userChosenColor = e.target.id;

        playSound(userChosenColor);

        

        handleUserArray((prevValues) => [...prevValues, userChosenColor]);

        // pressAnimation();
        

        let currentLevel = userArray.length;
        checkAnswer(currentLevel);
    }


    function checkAnswer(currentLevel) {

        if (gameArray[currentLevel] === userArray[currentLevel]) {
            if (gameArray.length === userArray.length) {
                setTimeout(() => {nextSequence()}, 1000);
            }
        }
    }


    function playSound(userChosenColor) {
        let audio = new Audio("simonsounds/" + userChosenColor + ".mp3");
        console.log(audio);
        audio.play();
      }


    // function pressAnimation() {

    // }

    // function incorrectAnswer() {

    // }


    return (
        <div>

            <h1 id="level-title">Press <button onClick={() => {
                if (!start) {
                    startGame();
                }
            }}>button</button> to start
            </h1>

            <h1 hidden={!start ? "hidden" : null}>Level {level}</h1>

            <div className="container">
                
                <div className="row sg-container">

                    <div className="col-6">

                        <div
                            className="sg-btn green"
                            type="button" 
                            id="green" 
                            onClick={(id) => start ? userSelection(id) : null}
                            >
                        </div>

                    </div>

                    <div className="col-6">

                        <div 
                            className="sg-btn red"
                            type="button" 
                            id="red" 
                            onClick={(id) => start ? userSelection(id) : null}
                            >
                        </div>

                    </div>
                        
                </div>

                <div className="row">

                    <div className="col-6">

                        <div 
                            className="sg-btn yellow"
                            type="button" 
                            id="yellow" 
                            onClick={(id) => start ? userSelection(id) : null}
                            >
                        </div>

                    </div>    

                    <div className="col-6">

                        <div 
                            className="sg-btn blue"
                            type="button" 
                            id="blue" 
                            onClick={(id) => start ? userSelection(id) : null}
                            >
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SimonGameContainer;