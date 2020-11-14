import React from 'react'
import classes from './Dev.module.css'
import gitLogo from './github.svg'

function Dev() {
    return (
        <div className={classes.Dev}>
            <a href='https://github.com/qw-0p'>
                Developed by Aleksandr Sarkisov
                <img src={gitLogo} alt='GitHub' />
            </a>
        </div>
    )
}

export default Dev
