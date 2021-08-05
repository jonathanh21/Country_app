import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Countries from './components/Countries/Countries.jsx'
import Continents from './components/Continents/Continents.jsx'
import styles from './Main.module.css';
import { getAllCountries } from "../../redux/actions"

export default function Main () {
const dispatch = useDispatch();

useEffect(()=> {
    dispatch(getAllCountries())
},[])

    return (
        <div className={styles.mCont}>
            <div className={styles.up}>
                <div className={styles.right}>
                    <h1>KNOW SOME DETAILS <br/> ABOUT THE COUNTRY YOU LIKE</h1>
                    <p>And customize the activities you have practiced there!</p>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.content}>
                    <Continents />
                    <Countries />
                </div>
            </div>
        </div>
    )
        
}