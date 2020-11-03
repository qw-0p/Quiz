import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = () => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    Example text
                    <i className={''} />
                </li>
            </ul>
            <p>Example counter</p>
            <div>
                <button>Reply</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
