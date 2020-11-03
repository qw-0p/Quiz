import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Сколько лап у собаки?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: '2', id: 1},
                    {text: '3', id: 2},
                    {text: '4', id: 3},
                    {text: '12', id: 4}
                ]
            },
            {
                question: 'Сколько материков на земле?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: '6', id: 1},
                    {text: '7', id: 2},
                    {text: '8', id: 3},
                    {text: '5', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz
