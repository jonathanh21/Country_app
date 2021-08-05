import React from 'react';
import { useDispatch } from 'react-redux'
import { getAllCountries} from '../../../redux/actions'
import styles from './InitialButton.module.css'
import { Link } from 'react-router-dom';

export default function InitialButton () {
    const dispatch = useDispatch()
    
    const clickHandler = () => {
        dispatch(getAllCountries())
    }
    
    //aca se despacha la accion para cargar el store de redux 
    return (
        <div className={styles.bg}>
                <h1 className={styles.text}>LET'S TRAVEL AROUND THE WORLD</h1>
                <h2 className={styles.text2}>Click on the map</h2>
                <Link onClick={clickHandler} to={"/main"} className={styles.icon}><h1></h1></Link>
        </div>
    )
}