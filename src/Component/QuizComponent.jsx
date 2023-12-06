import React, { Component } from 'react'

export default class QuizComponent extends Component {
    render() {
        return (
            <div id='body'>
                <div id='subContainer'>
                    <h1 id='quesHead'>Question</h1>
                    <p id='noQues'>1 of 15</p>
                    <p id='ques'>Which is the only mammal that can jump?</p>
                    <div id='choiceBox'>
                        <div className='flexContent' id='contentOne'>
                            <p className='choice'>Dog</p>
                            <p className='choice'>Elephant</p>
                        </div>
                        <div className='flexContent' id='contentTwo'>
                            <p className='choice'>Goat</p>
                            <p className='choice'>Lion</p>
                        </div>
                        <div id='options'>
                            <p className='opt' id='preview'>Preview</p>
                            <p className='opt' id='next'>Next</p>
                            <p className='opt' id='quit'>Quit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
