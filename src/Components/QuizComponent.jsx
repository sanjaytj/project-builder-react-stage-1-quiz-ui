import React, { Component } from 'react';
import '../Css/QuizComponent.css'

export default class QuizComponent extends Component {
    render() {
        return (
            <div>
                <div className="quiz-component">
                    <div className="white-panel">
                        <div className="question-panel">
                            <h1>Question</h1>
                            <div>
                                <p>4 of 15</p>
                                <p>Which is the only mammal that cant jump?</p>
                            </div>
                        </div>
                        <div className="option-panel">
                            <button>Dog</button>
                            <button>Goat</button>
                            <button>Elephant</button>
                            <button>Lion</button>
                        </div>
                        <div className="button-panel">
                            <button id="previous">Previous</button>
                            <button id="next">Next</button>
                            <button id="clear">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuizComponent;
