import React from 'react';
import InitialButton from './components/InitialButton.jsx';
import styles from './Initial.module.css'

export default function Initial () {
    return (
        <section className={styles.welcome}>
            <InitialButton/>
        </section>
    )
}