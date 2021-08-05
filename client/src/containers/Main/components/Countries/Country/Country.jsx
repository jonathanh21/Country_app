import React from 'react';
import styles from "./Country.module.css";

export default function Country (props) {
    //here, we display the infotmation for each country (ppal route info)
    console.log(props)
    const {name, continent, flag} = props.info
    return (
        <div className={styles.info}>
            <img className={styles.flag} src={flag} alt="loading..."/>
            <div className={styles.title}><h1 className={styles.title}>{name}</h1></div>
            <h1 className={styles.continent}>{continent}</h1>
        </div>
    )
}