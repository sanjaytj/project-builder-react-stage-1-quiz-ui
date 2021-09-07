import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div>
               <div className="result-component">
                    <i className="far fa-check-circle check-mark"></i>
                    <h2 id="result">Result</h2>
                    <div className="white-panel">
                        <h2>You need more practice</h2>
                        <h1>Your Score: 20%</h1>
                        <div id="details">
                            <div className="info">
                                <p>Total number of questions:</p>
                                <p>Number of attempted questions:</p>
                                <p>Number of correct answers:</p>
                                <p>Number of wrong answers:</p>    
                            </div>
                            <div className="score">
                                <p>15</p>
                                <p>9</p>
                                <p>3</p>
                                <p>6</p>
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button id="play">Play Again</button>
                        <button id="back">Back to home</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultComponent;
