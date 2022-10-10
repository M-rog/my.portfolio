import React from "react";




function SimonGameContainer() {
    return (
    <div>
        <h1 id="level-title">Press A Key to Start</h1>
        <div class="sg-container">
            <div class="sg-row">

                <div type="sg-button" id="green" class="sg-btn green">
                </div>

                <div type="sg-button" id="red" class="sg-btn red">
                </div>
                
            </div>

            <div class="sg-row">

                <div type="sg-button" id="yellow" class="sg-btn yellow">
                </div>

                <div type="sg-button" id="blue" class="sg-btn blue">
                </div>

            </div>

        </div>

    </div>);
    
}

export default SimonGameContainer;