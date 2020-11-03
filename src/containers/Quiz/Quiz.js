import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Сколько лап у собаки?',
                rightAnswerId: 3,
                answers: [
                    {text: '2', id: 1},
                    {text: '3', id: 2},
                    {text: '4', id: 3},
                    {text: '12', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} question={this.state.quiz[0].question} onAnswerClick={this.onAnswerClickHandler} />
                </div>
            </div>
        )
    }
}

export default Quiz
