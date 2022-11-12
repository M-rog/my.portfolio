import React from "react";
import { useState } from "react";


function SimonGameContainer() {

    const [start, handleStart] = useState(false);

    const [level, handleLevel] = useState(0);

    const [gameArray, handleGameArray] = useState([]);
    const [userArray, handleUserArray] = useState([]);

    const colors =["green" , "red" , "yellow" , "blue"];




    function startGame() {

        handleStart(true);
        nextSequence();
        
        // console.log("game started");
    }


    // function nextSequence() {

    //     userClickedPattern = [];
    //     level++;
    //     $("#level-title").text("Level " + level);
      
    //     var randomNumber = Math.floor(Math.random() * 4);
    //     var randomChosenColour = buttonColours[randomNumber];
    //     gamePattern.push(randomChosenColour);
      
    //     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //     playSound(randomChosenColour);
    //   }


    function nextSequence() {
        handleUserArray([]);
        handleLevel(+1);
        let rngColor = colors[Math.floor(Math.random()*4)];
        // console.log(rngColor);
        handleGameArray((prevValues, rngColor) => [...prevValues, rngColor]);
    }


    function userSelection(e) {
        let userChosenColor = e.target.value;
        handleUserArray((prevValues) => [...prevValues, userChosenColor]);

        // pressAnimation();
        playSound(userChosenColor);

        let currentLevel = userArray.length;
        checkAnswer(currentLevel);
    }


    function checkAnswer(currentLevel) {

        if (gameArray[currentLevel] === userArray[currentLevel]) {
            if (gameArray.length === userArray.length) {
                setTimeout(() => {
                    nextSequence();
                  }, 1000);
            }
        }
    }


    function playSound(userChosenColor) {
        var audio = new Audio("simonsounds/" + userChosenColor + ".mp3");
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

            <div className="container ">
                
                <div className="row sg-container justify-content-center">

                    <div className="col-6">

                        <div
                            className="sg-btn green"
                            type="button" 
                            id="green" 
                            onClick={() => 
                                (id) => userSelection(id)
                            
                        }
                            // console.log(id);
                            >
                        </div>

                    </div>

                    <div className="col-6">

                        <div 
                            className="sg-btn red"
                            type="button" 
                            id="red" 
                            onClick={(id) => userSelection(id)}
                            // console.log(id);
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
                            onClick={(id) => userSelection(id)}
                            // console.log(id);
                            >
                        </div>

                    </div>    

                    <div className="col-6">

                        <div 
                            className="sg-btn blue"
                            type="button" 
                            id="blue" 
                            onClick={(id) => userSelection(id)}
                            // console.log(id);
                            >
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SimonGameContainer;