import * as React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

const classes = classnames('hero', 'hero-lg', 'mb-3', styles.hero)

function Hero(){
    return(
        <div className={classes}>
            <div className="hero-body text-center text-light"> 
                <h1>Treehouse: Find Housing in Santa Cruz, CA</h1>       
                <p className="mb-0">Made for Students by Students</p>
            </div>
        </div>
    )
}

export default Hero