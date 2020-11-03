import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    {this.state.isFinished ? (
                        <h2>Finish</h2>
                    ) : (
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Quiz
