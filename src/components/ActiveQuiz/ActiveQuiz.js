import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2. </strong>
                    Example quiz
                </span>
            </p>

            <AnswersList answers={props.answers} />
        </div>
    )
}

export default ActiveQuiz
